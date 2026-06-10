import React, { useState } from 'react';
import { Coins, Edit3, Award, Share2 } from 'lucide-react';

export default function Standardizer() {
  // Currency Converter State
  const [currencyAmount, setCurrencyAmount] = useState('100');
  const [sourceState, setSourceState] = useState('qi');
  const [banliangResult, setBanliangResult] = useState(50);
  const [complianceMessage, setComplianceMessage] = useState('大秦律例：六国旧币停用，私自兑换、交易者，罚作苦役修筑长城！');

  // Seal Generator State
  const [sealText, setSealText] = useState('大秦万世');

  // Decree Generator State
  const [decreeText, setDecreeText] = useState('命大将军蒙恬领兵三十万击匈奴，修筑长城万里，卫我边防。');
  const [decreeDate, setDecreeDate] = useState('始皇二十六年十月');
  const [showDecree, setShowDecree] = useState(true);

  // Currency factors (Value in Qin Ban Liang)
  const currencyRates = {
    qi: { name: '齐国 刀币', rate: 0.5, quote: '李斯曰：齐刀轻浮，劣铜斑驳，罚收为军械原料。' },
    zhao: { name: '赵国 铲形币', rate: 0.4, quote: '李斯曰：赵铲参差不齐，大秦半两分量十足，兑换二点五折。' },
    chu: { name: '楚国 蚁鼻钱', rate: 0.1, quote: '李斯曰：楚人蚁鼻钱如鬼脸，难登大雅之堂，尽数销毁。' },
    wei: { name: '魏国 桥足釿', rate: 0.3, quote: '李斯曰：魏币桥型粗陋，不可在大秦关市流通。' },
    yan: { name: '燕国 明刀币', rate: 0.45, quote: '李斯曰：燕刀因易水一案已划入管制，不可擅兑。' }
  };

  const handleConvert = () => {
    const amount = parseFloat(currencyAmount);
    if (isNaN(amount) || amount <= 0) {
      setBanliangResult(0);
      return;
    }
    const rateInfo = currencyRates[sourceState];
    const converted = amount * rateInfo.rate;
    setBanliangResult(converted.toFixed(2));
    setComplianceMessage(rateInfo.quote);
  };

  return (
    <div className="standardizer-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      <div className="glass-panel" style={{ borderLeft: '4px solid var(--primary-gold)' }}>
        <h2 className="classical-font" style={{ color: 'var(--primary-gold)', marginBottom: '0.5rem' }}>度量衡与制度统一局</h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          「一法度衡石丈尺，车同轨，书同文字。」大秦帝国制度标准化实验室，由丞相李斯亲自坐镇督办。
        </p>
      </div>

      <div className="standardizer-grid">
        
        {/* Currency Converter */}
        <div className="glass-panel std-card">
          <h3 className="std-card-title">
            <Coins size={18} />
            币制统一：六国货币换算
          </h3>
          <div className="std-input-group">
            <label className="std-label">旧币来源国</label>
            <select 
              className="std-select"
              value={sourceState}
              onChange={(e) => setSourceState(e.target.value)}
            >
              {Object.entries(currencyRates).map(([key, val]) => (
                <option key={key} value={key}>{val.name}</option>
              ))}
            </select>
          </div>

          <div className="std-input-group">
            <label className="std-label">数额 (贯/枚)</label>
            <input 
              type="number" 
              className="std-input"
              value={currencyAmount}
              onChange={(e) => setCurrencyAmount(e.target.value)}
              min="1"
            />
          </div>

          <button className="btn-primary" onClick={handleConvert} style={{ marginTop: '0.5rem' }}>
            依法统一换算
          </button>

          <div className="std-result-box">
            <div className="std-result-desc">等值兑换大秦标准货币</div>
            <div className="std-result-value">{banliangResult} <span style={{ fontSize: '1rem' }}>两</span></div>
            <div className="std-result-desc" style={{ color: 'var(--primary-gold)', fontWeight: 'bold' }}>秦半两 (Ban Liang Coin)</div>
          </div>
          
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: '1.4' }}>
            {complianceMessage}
          </p>
        </div>

        {/* Jade Seal Stamp Generator */}
        <div className="glass-panel std-card">
          <h3 className="std-card-title">
            <Edit3 size={18} />
            书同文：传国御玺印章生成器
          </h3>
          
          <div className="std-input-group">
            <label className="std-label">印章刻字 (最多四字)</label>
            <input 
              type="text" 
              className="std-input"
              value={sealText}
              onChange={(e) => setSealText(e.target.value.slice(0, 4))}
              placeholder="大秦万世"
            />
          </div>

          <div className="seal-creator-layout" style={{ marginTop: '1rem' }}>
            <div className="seal-preview-box">
              {sealText || '大秦万世'}
            </div>
            
            <div style={{ flexGrow: 1, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              <p style={{ color: 'var(--accent-red)', fontWeight: 'bold', marginBottom: '0.25rem' }}>受命于天 既寿永昌</p>
              <p>采用大秦官方「小篆风格」红色篆印朱砂模。请输入最多4个汉字，如“始皇之印”、“修筑长城”、“指鹿为马”以生成专属印记。</p>
            </div>
          </div>
        </div>

      </div>

      {/* Imperial Decree Generator */}
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h3 className="std-card-title" style={{ margin: 0 }}>
          <Award size={18} />
          皇帝诏曰：圣旨编辑器
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="std-input-group">
              <label className="std-label">诏书内容 (写下你作为始皇的绝对命令)</label>
              <textarea 
                className="std-input"
                style={{ height: '100px', resize: 'none', fontFamily: 'var(--font-classical)' }}
                value={decreeText}
                onChange={(e) => setDecreeText(e.target.value)}
                maxLength={150}
              />
            </div>
            <div className="std-input-group">
              <label className="std-label">纪年日期</label>
              <input 
                type="text" 
                className="std-input"
                value={decreeDate}
                onChange={(e) => setDecreeDate(e.target.value)}
              />
            </div>
            <button 
              className="btn-primary" 
              onClick={() => setShowDecree(true)}
            >
              颁布御前圣旨
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {showDecree && (
              <div className="decree-outer">
                <div className="decree-header">皇帝诏曰</div>
                <div className="decree-content-text">
                  {decreeText || '朕即大秦，统一度量衡，封六国库。'}
                </div>
                <div className="decree-footer">
                  <div className="decree-date">{decreeDate}</div>
                  <div className="decree-seal-spot">
                    {/* Tiny representation of the imperial seal stamp */}
                    <div style={{
                      width: '45px', 
                      height: '45px', 
                      border: '2px solid #8b0000', 
                      color: '#8b0000', 
                      fontSize: '0.55rem', 
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      writingMode: 'vertical-rl',
                      lineHeight: '1.1',
                      padding: '2px'
                    }}>
                      皇帝<br/>之玺
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <button 
                className="btn-secondary" 
                onClick={() => {
                  alert('圣旨已通过中车府驿马八百里加急发送至咸阳各部门！');
                }}
                style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
              >
                <Share2 size={14} />
                分享圣旨给百官
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
