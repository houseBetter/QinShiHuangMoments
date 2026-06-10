import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { QIN_AI_REPLIES, DEFAULT_QIN_REPLY } from '../data/mockData';

export default function ChatBox({ currentUser }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: 'qingshihuang',
      senderName: '始皇帝 嬴政',
      avatar: '👑',
      content: '朕乃始皇帝嬴政，免礼。找朕所为何事？是要献上六国地图，还是长生不老药？',
      isSystem: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      senderId: currentUser.id,
      senderName: currentUser.name,
      avatar: currentUser.avatar,
      content: inputText.trim(),
      isSystem: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate Qin Shi Huang reviewing the petition before replying
    setTimeout(() => {
      setIsTyping(false);
      const replyContent = generateQinReply(userMessage.content);
      
      const qinMessage = {
        id: Date.now() + 1,
        senderId: 'qingshihuang',
        senderName: '始皇帝 嬴政',
        avatar: '👑',
        content: replyContent,
        isSystem: true
      };
      setMessages(prev => [...prev, qinMessage]);
    }, 1000);
  };

  const generateQinReply = (text) => {
    const lowerText = text.toLowerCase();
    for (const item of QIN_AI_REPLIES) {
      if (item.keywords.some(keyword => lowerText.includes(keyword))) {
        const randomIndex = Math.floor(Math.random() * item.replies.length);
        return item.replies[randomIndex];
      }
    }
    return DEFAULT_QIN_REPLY;
  };

  return (
    <div className="glass-panel chat-container">
      <div className="chat-header">
        <div 
          style={{ 
            width: '45px', 
            height: '45px', 
            borderRadius: '50%', 
            background: 'var(--primary-gold)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)'
          }}
        >
          👑
        </div>
        <div className="chat-header-info">
          <h3 className="classical-font">始皇御前密信</h3>
          <p>当前皇帝状态：正殿批阅奏折中 (日阅一百二十斤简牍)</p>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`chat-bubble-wrapper ${msg.isSystem ? 'system' : 'user'}`}
          >
            <div className="chat-bubble-avatar">
              {msg.avatar}
            </div>
            <div className="chat-bubble-content">
              <span className="chat-sender-name">{msg.senderName}</span>
              <div className="chat-bubble">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chat-bubble-wrapper system">
            <div className="chat-bubble-avatar">👑</div>
            <div className="chat-bubble-content">
              <span className="chat-sender-name">始皇帝 嬴政</span>
              <div className="chat-bubble" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
                朕正在朱批竹简奏章...
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="chat-input-row">
        <input
          type="text"
          className="chat-input"
          placeholder="向陛下上奏... (输入“长生不老”、“修长城”、“指鹿为马”等关键词触发神机)"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          maxLength={100}
        />
        <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.25rem' }}>
          <Send size={16} />
          上奏
        </button>
      </form>
    </div>
  );
}
