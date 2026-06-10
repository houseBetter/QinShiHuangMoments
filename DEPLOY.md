# 🚀 大秦朋友圈 AWS 部署指南 (QinShiHuangMoments AWS Deployment Guide)

本项目是一个基于 **Vite + React** 构建的单页应用 (SPA)。由于是完全静态的前端项目，推荐使用以下两种极其高效、稳定且低成本的 AWS 托管方式：

---

## 方案一：使用 AWS Amplify (最简单，全自动 CI/CD)

AWS Amplify 是部署现代前端框架（如 React、Vue 等）最方便的服务。只需关联你的 Git 仓库，即可实现提交代码后自动构建并部署。

### 部署步骤：
1. **推送代码至托管平台**：将你的项目代码推送至 GitHub、GitLab、Bitbucket 或 AWS CodeCommit。
2. **打开 AWS Amplify 控制台**：
   * 登录 AWS 控制台，搜索并进入 **AWS Amplify**。
   * 点击 **"Create new app"** 或 **"Host web app"**。
3. **连接 Git 仓库**：
   * 选择你托管代码的平台（例如 GitHub）并完成授权。
   * 选择你的仓库 `QinShiHuangMoments` 和部署分支（如 `main`）。
4. **配置构建设置 (App build and test settings)**：
   * Amplify 会自动识别 Vite 项目。请检查以下配置是否正确：
     * **Build Command**: `npm run build`
     * **Base directory**: `dist`
5. **保存并部署**：
   * 点击 **"Save and deploy"**。
   * 部署完成后，Amplify 会提供一个免费的 HTTPS 域名（例如 `https://main.xxxx.amplifyapp.com`）供你访问。

### 优点：
* 自动配置免费的 SSL 证书 (HTTPS)。
* 每次通过 `git push` 提交代码时，AWS 会自动拉取、构建并发布，无需手动干预。
* 自带分支预览和回滚功能。

---

## 方案二：使用 Amazon S3 + CloudFront (企业级推荐，高可用与 CDN 加速)

通过将静态资源存放在 Amazon S3 中，并利用 AWS CloudFront (CDN) 进行全球内容分发和加速。这是最节省成本且性能最高的方案。

### 步骤 1：本地打包构建
在部署之前，需要在本地对项目进行编译：
```bash
# 安装依赖（如果尚未安装）
npm install

# 编译项目
npm run build
```
编译完成后，会在项目根目录生成 `dist/` 文件夹，该文件夹内包含了所有需要上传的静态资源。

### 步骤 2：创建 Amazon S3 存储桶
1. 进入 AWS 控制台，打开 **Amazon S3**。
2. 点击 **"Create bucket"** (创建存储桶)。
3. 输入存储桶名称（如 `qin-shihuang-moments`），选择就近的 AWS 区域。
4. 在 "Object Ownership" 中保持默认的 **"Bucket owner enforced"**。
5. 在 "Block Public Access settings for this bucket" 中，勾选 **"Block all public access"** (阻止所有公开访问)。
   > 💡 **提示**：为了安全性，我们将存储桶保持私有，仅允许 CloudFront 访问它。
6. 点击 **"Create bucket"**。

### 步骤 3：上传静态文件
1. 点击进入刚刚创建的存储桶。
2. 将本地 `dist/` 目录下的**所有文件和文件夹**（包括 `index.html` 和 `assets/` 文件夹）拖拽上传到 S3 存储桶根目录下。
   > ⚠️ **注意**：是上传 `dist` 目录下的内容，而不是把整个 `dist` 文件夹直接上传。

### 步骤 4：创建 AWS CloudFront 分发 (CDN)
1. 打开 **AWS CloudFront** 控制台，点击 **"Create distribution"**。
2. **Origin Domain** (源网域)：选择你刚刚创建的 S3 存储桶。
3. **Origin access** (源访问)：选择 **"Origin access control settings (recommended)"** (源访问控制设置，简称 OAC)。
   * 点击 **"Create control setting"**，保持默认设置并创建。这会确保 S3 存储桶保持私有，只有 CloudFront 可以读取它。
4. **Viewer protocol policy** (查看器协议策略)：选择 **"Redirect HTTP to HTTPS"** (将 HTTP 重定向至 HTTPS)。
5. **Cache key and origin requests** (缓存键和源请求)：保持默认。
6. **Web Application Firewall (WAF)**：如不需要安全防护，可选择 "Do not enable security protections" (暂不启用安全保护以降低费用)。
7. **Settings** (设置) -> **Default root object** (默认根对象)：输入 `index.html`。
8. 点击 **"Create distribution"**。

### 步骤 5：更新 S3 存储桶策略 (Bucket Policy)
1. CloudFront 分发创建完成后，页面顶部会显示一条黄色提示，提示你需要更新 S3 存储桶策略。
2. 点击 **"Copy policy"** (复制策略)。
3. 返回 **S3 控制台**，打开你的存储桶，进入 **"Permissions"** (权限) 标签页。
4. 找到 **"Bucket policy"** (存储桶策略)，点击 **"Edit"** (编辑)，将刚才复制的 JSON 策略粘贴进去，保存修改。

### 步骤 6：配置单页应用 (SPA) 路由重定向
为了防止在刷新非根路径页面（如 `/chat` 或 `/standardizer`）时出现 403 或 404 错误，需要让所有请求都由 `index.html` 承载：
1. 在 **CloudFront 控制台** 中，点击你刚才创建的分发。
2. 进入 **"Error pages"** (错误页面) 标签页，点击 **"Create custom error response"** (创建自定义错误响应)。
3. 配置如下：
   * **HTTP error code**: 选择 `404: Not Found`（如有必要，也可以为 `403: Forbidden` 额外创建一条）。
   * **Customize error response**: 选择 `Yes`。
   * **Response page path**: 输入 `/index.html`。
   * **HTTP Response code**: 选择 `200: OK`。
4. 点击 **"Create"**。

---

## 🌐 域名与证书配置 (可选)

如果你有自定义域名（如 `qinshihuang.com`），可以在 AWS 中进行绑定：
1. **证书管理**：打开 **AWS Certificate Manager (ACM)**，在 **us-east-1 (弗吉尼亚北部)** 区域为你的域名申请免费的 SSL 证书。
2. **CloudFront 绑定**：编辑 CloudFront 分发设置，在 **Alternate domain name (CNAME)** 中输入你的域名，并在 **Custom SSL certificate** 中选择申请好的证书。
3. **DNS 解析**：在 **Route 53** 或你的域名服务商中，将域名的 CNAME 记录或 A 记录（Alias）指向 CloudFront 分发的域名（如 `dxxxxx.cloudfront.net`）。
