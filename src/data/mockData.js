// Profiles of historical characters in the Qin Dynasty WeChat Moments
export const CHARACTERS = {
  qingshihuang: {
    id: 'qingshihuang',
    name: '始皇帝 嬴政',
    avatar: '👑',
    title: '大秦帝国一世皇帝',
    bio: '朕即大秦，横扫六合。谁有长生不老药的消息，速报！',
    banner: 'linear-gradient(135deg, #1c1c1f 0%, #a67c1e 100%)',
    stats: {
      unification: '6 / 6 (韩赵魏楚燕齐已灭)',
      wall: '92% 进度',
      elixir: '寻找中...',
      coins: '秦半两 (已统一)'
    }
  },
  lisi: {
    id: 'lisi',
    name: '丞相 李斯',
    avatar: '📜',
    title: '大秦帝国丞相',
    bio: '法治天下，规矩成方圆。书同文、车同轨、币同型。',
    banner: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
    stats: {
      unification: '郡县制推行中',
      wall: '监工督造',
      elixir: '持怀疑态度',
      coins: '小篆书写范本'
    }
  },
  zhaogao: {
    id: 'zhaogao',
    name: '中车府令 赵高',
    avatar: '🐴',
    title: '掌管车马与符玺',
    bio: '指鹿为马？不，这真是一匹汗血宝马。',
    banner: 'linear-gradient(135deg, #3a223a 0%, #1f0f1f 100%)',
    stats: {
      unification: '潜伏伺机',
      wall: '不甚关心',
      elixir: '暗中破坏',
      coins: '指鹿为马'
    }
  },
  mengtian: {
    id: 'mengtian',
    name: '大将军 蒙恬',
    avatar: '🛡️',
    title: '内史大将军',
    bio: '三十万大军北击匈奴，修筑万里长城。',
    banner: 'linear-gradient(135deg, #7f0808 0%, #3a0000 100%)',
    stats: {
      unification: '北击匈奴',
      wall: '筑长城万里',
      elixir: '忠心护国',
      coins: '军功爵制'
    }
  },
  jingke: {
    id: 'jingke',
    name: '刺客 荆轲',
    avatar: '🗡️',
    title: '燕国著名侠客',
    bio: '风萧萧兮易水寒，壮士一去兮不复还！图穷匕见，就差一点点！',
    banner: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    stats: {
      unification: '抗秦刺客',
      wall: '拒绝评价',
      elixir: '刺秦丹',
      coins: '燕刀币'
    }
  },
  xufu: {
    id: 'xufu',
    name: '方士 徐福',
    avatar: '⛵',
    title: '皇家首席炼丹师',
    bio: '东渡蓬莱，求取仙药。陛下，预算不够了，再打点钱呗！',
    banner: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    stats: {
      unification: '海外仙山',
      wall: '不问世事',
      elixir: '正在蓬莱忽悠',
      coins: '经费燃烧中'
    }
  },
  xiangyu: {
    id: 'xiangyu',
    name: '西楚霸王 项羽',
    avatar: '🔥',
    title: '楚国名将项燕之孙',
    bio: '力拔山兮气盖世！彼可取而代也！',
    banner: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    stats: {
      unification: '楚虽三户，亡秦必楚',
      wall: '烧阿房宫预备',
      elixir: '不需要，力拔山河',
      coins: '楚蚁鼻钱'
    }
  },
  liubang: {
    id: 'liubang',
    name: '汉王 刘邦',
    avatar: '🐉',
    title: '泗水亭长',
    bio: '大风起兮云飞扬。大丈夫当如此也！',
    banner: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    stats: {
      unification: '约法三章',
      wall: '曾服徭役',
      elixir: '赤帝之子',
      coins: '四铢钱'
    }
  }
};

// Moments data
export const INITIAL_MOMENTS = [
  {
    id: 'post_unification',
    authorId: 'qingshihuang',
    content: '今天朕正式颁布诏令：全国废除分封制，设立三十六郡！从此天下尽归大秦，收天下兵器铸以为十二金人，立石东海上以表朕之功绩！统一文字（小篆）、车轨和度量衡、货币（半两钱）！大秦万世！👑⚔️',
    time: '始皇二十六年 (公元前221年)',
    location: '咸阳宫·阿房殿',
    tag: 'unification', // Event tag
    likes: ['lisi', 'mengtian', 'zhaogao'],
    images: [],
    comments: [
      {
        id: 'c1',
        authorId: 'lisi',
        content: '陛下圣明！郡县制乃万世之基，分封制只会让战乱重演。臣手书的《仓颉篇》小篆字帖已发往各郡，不识小篆者重罚！'
      },
      {
        id: 'c2',
        authorId: 'qingshihuang',
        content: '＠丞相 李斯 李爱卿功不可没，赏黄金百斤，赐良田十顷！'
      },
      {
        id: 'c3',
        authorId: 'xiangyu',
        content: '哼，强秦暴虐，夺天下兵器又如何？楚虽三户，亡秦必楚！等我带兵杀进咸阳！'
      },
      {
        id: 'c4',
        authorId: 'liubang',
        content: '哇，好大的金人，阿房殿真是气派。嗟乎，大丈夫当如此也！'
      },
      {
        id: 'c5',
        authorId: 'jingke',
        content: '可惜我那把匕首被你融了铸金人，不然现在真想再给你表演个绕柱走。'
      },
      {
        id: 'c6',
        authorId: 'qingshihuang',
        content: '＠刺客 荆轲 护卫！护卫！把这小子的账号封了！'
      }
    ]
  },
  {
    id: 'post_assassination',
    authorId: 'jingke',
    content: '燕太子丹托付重任，今日我将与秦舞阳一同前往咸阳，向秦王献上督亢地图及樊於期将军之首级。风萧萧兮易水寒，壮士一去兮不复还！大义所在，在所不辞！🗡️🗺️',
    time: '始皇二十年 (公元前227年)',
    location: '易水河畔',
    tag: 'jingke',
    likes: ['xiangyu', 'liubang'],
    images: ['https://images.unsplash.com/photo-1599849594171-48e4cfc580dd?w=600'], // Visual mock map/dagger
    comments: [
      {
        id: 'c7',
        authorId: 'qingshihuang',
        content: '朕在咸阳宫等你，地图像是挺大，朕倒要看看你搞什么花样。听说燕国地图里藏了好东西？'
      },
      {
        id: 'c8',
        authorId: 'zhaogao',
        content: '大王小心！臣瞧这小子面相不善，怕是不怀好意！'
      },
      {
        id: 'c9',
        authorId: 'jingke',
        content: '＠始皇帝 嬴政 放心，地图里面什么都没有，就是卷得有点紧，待会大殿上臣给您慢慢拉开，保准有惊喜。'
      },
      {
        id: 'c10',
        authorId: 'lisi',
        content: '督亢地图？燕国竟然这么主动，定有蹊跷。大王万万不可让其近身！'
      }
    ]
  },
  {
    id: 'post_wall',
    authorId: 'mengtian',
    content: '长城工程最新进展！今日临洮至辽东段已顺利连接，北起辽东，西至临洮，延袤万余里。十万将士及民工兄弟们辛苦了！筑起这道屏障，北拒匈奴，保我大秦万世江山！🛡️🧱🐎',
    time: '始皇三十二年 (公元前215年)',
    location: '九原郡·万里长城',
    tag: 'wall',
    likes: ['qingshihuang', 'lisi'],
    images: [],
    comments: [
      {
        id: 'c11',
        authorId: 'qingshihuang',
        content: '大将军辛苦了！有此长城阻挡，匈奴安敢南下牧马，胡人不敢弯弓报怨！大秦江山固若金汤！'
      },
      {
        id: 'c12',
        authorId: 'mengtian',
        content: '为陛下，为大秦，臣肝脑涂地！'
      },
      {
        id: 'c13',
        authorId: 'zhaogao',
        content: '大将军真乃国之栋梁。不过陛下，这长城造价昂贵，百姓多有怨言，孟姜女家那位好像还在工地上……'
      },
      {
        id: 'c14',
        authorId: 'mengtian',
        content: '＠中车府令 赵高 闭嘴，这是百年国防大计，你个只懂驾车的太监懂什么叫国家战略！'
      }
    ]
  },
  {
    id: 'post_elixir',
    authorId: 'xufu',
    content: '蓬莱、方丈、瀛洲三神山已在望！臣已隐约望见仙人乘白鹤，仙丹瑞气冲天！只是海上风浪巨大，且有鲛鱼（大鲨鱼）阻路，求陛下再拨三千童男童女、百工巧匠、谷物良种及良弓硬弩，臣定带回不老仙丹！⛵🧪✨',
    time: '始皇三十七年 (公元前210年)',
    location: '东海·琅琊港外海',
    tag: 'elixir',
    likes: ['qingshihuang'],
    images: [],
    comments: [
      {
        id: 'c15',
        authorId: 'qingshihuang',
        content: '徐爱卿！你要的黄金和人手，朕已经下旨让李斯即刻拨发！另外，朕赐你连弩，若遇巨鱼，直接射杀！一定要把长生仙丹带回来！'
      },
      {
        id: 'c16',
        authorId: 'lisi',
        content: '陛下……臣总觉得这厮是个骗子，前前后后拿了多少预算了，带了几千人出海，毛都没带回来一根，这分明是公款跑路！'
      },
      {
        id: 'c17',
        authorId: 'xufu',
        content: '＠丞相 李斯 丞相此言差矣！海上求仙乃是逆天改命之事，岂能一蹴而就？仙人说我心不诚，正是因为你们在后方乱嚼舌根！'
      },
      {
        id: 'c18',
        authorId: 'zhaogao',
        content: '徐仙长别动怒，大王对您是绝对信任的。不过……您下次出海带的那些日本特产，能给老奴捎点不？'
      },
      {
        id: 'c19',
        authorId: 'liubang',
        content: '这家伙绝对是在东海找了个岛自己当国王去了，真是羡慕啊。'
      }
    ]
  },
  {
    id: 'post_deer',
    authorId: 'zhaogao',
    content: '今天在朝堂上发现了一匹绝世好马，跑得极快，而且角长得很别致。大伙儿瞧瞧，这是不是一匹千里马？🐴🦌✨',
    time: '二世元年 (公元前209年)',
    location: '咸阳宫·正殿',
    tag: 'conspiracy',
    likes: ['liubang'],
    images: [],
    comments: [
      {
        id: 'c20',
        authorId: 'lisi',
        content: '赵高，你当我瞎吗？这明明是……呃，仔细一看，确实是一匹骏马，你看这蹄子，你看这鬃毛，绝对是日行千里的宝马！'
      },
      {
        id: 'c21',
        authorId: 'mengtian',
        content: '赵高你个阉贼！这分明是只梅花鹿！你竟敢在朝堂上指鹿为马，颠倒黑白，愚弄朝臣！'
      },
      {
        id: 'c22',
        authorId: 'zhaogao',
        content: '＠大将军 蒙恬 哎呀，蒙将军火气真大，看来最近边关风大，将军可能需要多休息休息了，不如把兵权交出来安心养病？'
      },
      {
        id: 'c23',
        authorId: 'qingshihuang',
        content: '朕要是还活着，高低给你两嘴巴子，顺便送你一颗朱砂水银丹！'
      }
    ]
  }
];

// Historical events timeline configuration
export const TIMELINE_EVENTS = [
  { id: 'all', name: '全部动态' },
  { id: 'unification', name: '扫灭六国·一统天下' },
  { id: 'jingke', name: '荆轲刺秦·图穷匕见' },
  { id: 'wall', name: '北击匈奴·修筑长城' },
  { id: 'elixir', name: '东海求仙·长生之梦' },
  { id: 'conspiracy', name: '沙丘阴谋·大秦黄昏' }
];

// Simulated AI responses for Qin Shi Huang Chatbot
export const QIN_AI_REPLIES = [
  {
    keywords: ['你好', '您好', '陛下', '大王', '始皇'],
    replies: [
      '朕乃始皇帝嬴政，免礼。找朕所为何事？是要献上六国地图，还是长生不老药？',
      '平身。朕正忙于巡游天下，有何要事速速奏来！'
    ]
  },
  {
    keywords: ['长生', '不死', '仙丹', '不老药', '灵药', '徐福'],
    replies: [
      '仙丹！你有不老药的消息？快说！徐福那厮带了朕三千童男童女，现在还没回来，是不是又在东海忽悠朕？',
      '朕已派徐福东渡日本，卢生寻找仙门。若你能献上真正的仙丹，朕封你为万户侯，赏赐黄金万两！'
    ]
  },
  {
    keywords: ['长城', '修长城', '孟姜女', '筑墙', '匈奴'],
    replies: [
      '长城是朕为子孙万代修筑的防线！若无长城阻挡，匈奴骑兵一日便可直达咸阳！些许徭役，那是为了千秋万世的太平！',
      '蒙恬三十万大军在北方监工，长城乃国之命脉。谁敢造谣哭倒长城，立斩不赦！'
    ]
  },
  {
    keywords: ['荆轲', '刺杀', '匕首', '绕柱', '秦舞阳'],
    replies: [
      '荆轲？哼，提他朕就来气！要不是秦舞阳在大殿上吓得尿裤子，要不是朕的佩剑太长拔不出来……朕早就一脚踹飞他了！',
      '“王负剑！王负剑！”幸亏太医夏无且用药袋扔了荆轲一下，不然朕还真悬了。图穷匕见，燕国小儿真是不讲武德！'
    ]
  },
  {
    keywords: ['李斯', '丞相', '法家', '韩非子'],
    replies: [
      '李斯书写的小篆确实漂亮，郡县制也提得极好，实乃大秦栋梁。就是气量小了点，居然下毒害死了韩非子，朕心痛啊！',
      '法治乃大秦立国之本！李斯办事利索，就是心思太沉。朕盯着他呢，他翻不了天。'
    ]
  },
  {
    keywords: ['赵高', '指鹿为马', '胡海', '鹿', '马'],
    replies: [
      '赵高？他不过是朕身边一驾车奴才，办事周到罢了。什么？他敢指鹿为马？他敢逼死扶苏？胡说八道！朕的大秦怎会亡在他手里！朕要诛他九族！',
      '胡亥这逆子！竟听信赵高谗言，害死扶苏，篡夺皇位！朕恨不得亲自从骊山陵里爬出来清理门户！'
    ]
  },
  {
    keywords: ['亡', '二世而亡', '项羽', '刘邦', '陈胜', '吴广'],
    replies: [
      '放肆！朕的大秦乃是万世之业，怎会二世而亡？陈胜吴广不过是几个逃役的农民，项羽刘邦不过是六国余孽，大秦雄兵百万，必将他们粉身碎骨！',
      '楚虽三户，亡秦必楚？狂妄！朕的十二金人不是白铸的，蒙恬、王翦的军队何在？速去平叛！'
    ]
  },
  {
    keywords: ['钱', '半两', '度量衡', '文字', '小篆'],
    replies: [
      '币同型，车同轨，书同文！这是朕最伟大的功绩之一。以后全天下都用大秦半两钱，写李斯的小篆。谁敢不用，廷尉法伺候！'
    ]
  }
];

export const DEFAULT_QIN_REPLY = '朕知道了。大秦统一天下，功过留待后人评说。若无其他要事，退下吧！朕还要去批阅一百二十斤重的竹简奏折了。';
