import React, { useState } from 'react';
import { Sparkles, MessageSquare, ShieldAlert, Award, FileText } from 'lucide-react';
import { CHARACTERS, INITIAL_MOMENTS, TIMELINE_EVENTS } from './data/mockData';
import MomentsList from './components/MomentsList';
import PostForm from './components/PostForm';
import ChatBox from './components/ChatBox';
import Standardizer from './components/Standardizer';

export default function App() {
  const [currentUser, setCurrentUser] = useState(CHARACTERS.qingshihuang);
  const [moments, setMoments] = useState(INITIAL_MOMENTS);
  const [activeTab, setActiveTab] = useState('moments');
  const [filterTag, setFilterTag] = useState('all');

  // Login handler (Change character role)
  const handleUserChange = (userId) => {
    setCurrentUser(CHARACTERS[userId]);
  };

  // Like handler
  const handleLike = (postId) => {
    setMoments(prevMoments =>
      prevMoments.map(moment => {
        if (moment.id !== postId) return moment;
        
        const hasLiked = moment.likes.includes(currentUser.id);
        const newLikes = hasLiked
          ? moment.likes.filter(id => id !== currentUser.id)
          : [...moment.likes, currentUser.id];
          
        return { ...moment, likes: newLikes };
      })
    );
  };

  // Comment handler
  const handleComment = (postId, commentText) => {
    const newComment = {
      id: `c_${Date.now()}`,
      authorId: currentUser.id,
      content: commentText
    };

    setMoments(prevMoments =>
      prevMoments.map(moment => {
        if (moment.id !== postId) return moment;
        return {
          ...moment,
          comments: [...moment.comments, newComment]
        };
      })
    );
  };

  // Publish new moment handler
  const handlePublish = ({ content, location, tag }) => {
    const newMoment = {
      id: `post_${Date.now()}`,
      authorId: currentUser.id,
      content,
      time: '始皇三十七年 (公元前210年 - 动感发布)',
      location,
      tag,
      likes: [],
      comments: []
    };

    setMoments([newMoment, ...moments]);
  };

  // Filter moments by tag
  const filteredMoments = filterTag === 'all'
    ? moments
    : moments.filter(m => m.tag === filterTag);

  return (
    <div className="app-layout">
      {/* Top Navigation / Dashboard Info */}
      <header style={{ 
        borderBottom: '1px solid var(--border-color)', 
        background: 'rgba(18, 18, 20, 0.9)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.8rem' }}>⚔️</span>
            <div>
              <h1 className="classical-font" style={{ fontSize: '1.5rem', color: 'var(--primary-gold)', letterSpacing: '0.1em' }}>
                大秦朋友圈
              </h1>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', letterSpacing: '0.05em' }}>
                THE QIN DYNASTY SOCIAL MATRIX v1.0.0
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>切换登录身份：</span>
            <select
              className="profile-character-select"
              style={{ width: '180px', padding: '0.4rem 0.75rem', fontSize: '0.9rem' }}
              value={currentUser.id}
              onChange={(e) => handleUserChange(e.target.value)}
            >
              {Object.values(CHARACTERS).map((char) => (
                <option key={char.id} value={char.id}>
                  {char.avatar} {char.name} ({char.title.slice(0, 4)})
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="app-container">
        
        {/* Left Sidebar: Profile Details */}
        <aside className="glass-panel profile-card" style={{ height: 'fit-content' }}>
          <div className="profile-avatar-container">
            <div className="profile-avatar-large">
              {currentUser.avatar}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 className="classical-font" style={{ color: 'var(--primary-gold)', fontSize: '1.4rem' }}>{currentUser.name}</h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{currentUser.title}</p>
          </div>

          <div style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-primary)', 
            background: 'rgba(255,255,255,0.02)', 
            padding: '0.75rem', 
            borderRadius: '8px', 
            border: '1px solid rgba(255,255,255,0.03)',
            lineHeight: '1.5',
            fontStyle: 'italic'
          }}>
            “ {currentUser.bio} ”
          </div>

          <div>
            <h4 className="classical-font" style={{ fontSize: '0.9rem', color: 'var(--primary-gold)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              帝王统治指引 / 国情概览
            </h4>
            <div className="stats-grid">
              <div className="stat-item active-stat">
                <span className="stat-label">六国吞并进度</span>
                <span className="stat-value">{currentUser.stats.unification}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">国防长城建设</span>
                <span className="stat-value">{currentUser.stats.wall}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">长生仙药进度</span>
                <span className="stat-value">{currentUser.stats.elixir}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">国家统一货币</span>
                <span className="stat-value">{currentUser.stats.coins}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Main Panel */}
        <main style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          
          {/* Main Tabs Navigation */}
          <nav className="main-tabs">
            <button 
              className={`tab-btn ${activeTab === 'moments' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('moments')}
            >
              <Sparkles size={16} />
              大秦朋友圈
            </button>
            <button 
              className={`tab-btn ${activeTab === 'chat' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('chat')}
            >
              <MessageSquare size={16} />
              御前密信 (直达天听)
            </button>
            <button 
              className={`tab-btn ${activeTab === 'standardizer' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('standardizer')}
            >
              <Award size={16} />
              度量衡统一
            </button>
          </nav>

          {/* Dynamic Content Views */}
          {activeTab === 'moments' && (
            <div>
              {/* Moments WeChat-style Banner Header */}
              <div className="moments-banner-container">
                <div 
                  className="moments-banner" 
                  style={{ background: currentUser.banner }}
                >
                  <div className="moments-banner-text">
                    <h2 className="moments-banner-title">大秦帝国纪实朋友圈</h2>
                    <p className="moments-banner-subtitle">始皇扫灭六国，天下尽归一人之社交圈</p>
                  </div>
                </div>

                {/* Overhanging profile card */}
                <div className="banner-user-card">
                  <span className="banner-username">{currentUser.name}</span>
                  <div className="banner-avatar">
                    {currentUser.avatar}
                  </div>
                </div>
              </div>

              {/* Publish box */}
              <PostForm 
                currentUser={currentUser} 
                characters={CHARACTERS} 
                onPublish={handlePublish} 
              />

              {/* Timeline Horizontal Filter */}
              <div className="timeline-filter-container">
                {TIMELINE_EVENTS.map(event => (
                  <button
                    key={event.id}
                    className={`timeline-chip ${filterTag === event.id ? 'active-chip' : ''}`}
                    onClick={() => setFilterTag(event.id)}
                  >
                    {event.name}
                  </button>
                ))}
              </div>

              {/* Moments feed list */}
              <div className="glass-panel" style={{ padding: '0.5rem 1.5rem 1.5rem 1.5rem' }}>
                <MomentsList 
                  moments={filteredMoments}
                  characters={CHARACTERS}
                  currentUser={currentUser}
                  onLike={handleLike}
                  onComment={handleComment}
                />
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <ChatBox currentUser={currentUser} />
          )}

          {activeTab === 'standardizer' && (
            <Standardizer />
          )}

        </main>
      </div>
    </div>
  );
}
