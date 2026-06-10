import React, { useState } from 'react';
import { Heart, MessageSquare, MapPin } from 'lucide-react';

export default function MomentsList({ moments, characters, currentUser, onLike, onComment }) {
  const [activeCommentPostId, setActiveCommentPostId] = useState(null);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    onComment(postId, commentText.trim());
    setCommentText('');
    setActiveCommentPostId(null);
  };

  const getCharacter = (id) => {
    return characters[id] || { name: '大秦子民', avatar: '🧑', title: '百姓' };
  };

  return (
    <div className="moments-list">
      {moments.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
          <p className="classical-font" style={{ fontSize: '1.2rem', color: 'var(--primary-gold)' }}>暂无此项纪实动态</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>陛下，换个分类或发表您的第一条动态吧！</p>
        </div>
      ) : (
        moments.map((moment) => {
          const author = getCharacter(moment.authorId);
          const hasLiked = moment.likes.includes(currentUser.id);

          return (
            <div key={moment.id} className="moment-card">
              {/* Left Avatar */}
              <div className="moment-left">
                <div className="moment-avatar" title={author.name}>
                  {author.avatar}
                </div>
              </div>

              {/* Right Content */}
              <div className="moment-right">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="moment-author">{author.name}</span>
                  <span className="moment-title-badge">{author.title}</span>
                </div>

                <div className="moment-content" style={{ marginTop: '0.25rem' }}>
                  {moment.content}
                </div>

                {/* Attached Mock Images */}
                {moment.images && moment.images.length > 0 && (
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {moment.images.map((imgUrl, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          width: '180px', 
                          height: '120px', 
                          borderRadius: '6px', 
                          overflow: 'hidden', 
                          border: '1px solid var(--border-color)',
                          background: 'rgba(255,255,255,0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-muted)',
                          fontSize: '0.8rem',
                          position: 'relative'
                        }}
                      >
                        <img 
                          src={imgUrl} 
                          alt="Moment attachment" 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            // If Unsplash fails or is blocked, show a placeholder
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<div style="padding: 1rem; text-align:center;">📜 督亢地图<br/><span style="font-size:0.6rem; color:var(--primary-gold)">大秦防伪印</span></div>`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Event Tags */}
                {moment.tag && (
                  <span className="moment-tag">
                    #{
                      moment.tag === 'unification' ? '扫灭六国' :
                      moment.tag === 'jingke' ? '刺秦风云' :
                      moment.tag === 'wall' ? '筑长城' :
                      moment.tag === 'elixir' ? '东海求仙' :
                      moment.tag === 'conspiracy' ? '沙丘风暴' : '大秦风采'
                    }
                  </span>
                )}

                {/* Footer Section */}
                <div className="moment-footer">
                  <div className="moment-meta">
                    <span style={{ fontSize: '0.75rem' }}>{moment.time}</span>
                    <span className="moment-location">
                      <MapPin size={12} />
                      {moment.location}
                    </span>
                  </div>

                  {/* Actions buttons */}
                  <div className="moment-actions">
                    <button 
                      className={`action-btn ${hasLiked ? 'liked' : ''}`}
                      onClick={() => onLike(moment.id)}
                      title={hasLiked ? '取消点赞' : '点赞'}
                    >
                      <Heart size={16} fill={hasLiked ? 'var(--primary-gold)' : 'none'} color={hasLiked ? 'var(--primary-gold)' : 'var(--text-muted)'} />
                      <span>{moment.likes.length}</span>
                    </button>

                    <button 
                      className="action-btn"
                      onClick={() => {
                        setActiveCommentPostId(activeCommentPostId === moment.id ? null : moment.id);
                        setCommentText('');
                      }}
                      title="评论"
                    >
                      <MessageSquare size={16} />
                      <span>{moment.comments.length}</span>
                    </button>
                  </div>
                </div>

                {/* Likes & Comments Interactive Bubble Box */}
                {(moment.likes.length > 0 || moment.comments.length > 0 || activeCommentPostId === moment.id) && (
                  <div className="interaction-box">
                    
                    {/* Likes row */}
                    {moment.likes.length > 0 && (
                      <div className="likes-section">
                        <Heart size={12} fill="#5b7a9c" stroke="none" style={{ marginRight: '2px' }} />
                        {moment.likes.map((likeId, index) => {
                          const likeUser = getCharacter(likeId);
                          return (
                            <span key={likeId}>
                              <span className="like-name-link">{likeUser.name}</span>
                              {index < moment.likes.length - 1 ? '，' : ''}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* Comments row */}
                    {moment.comments.length > 0 && (
                      <div className="comments-section">
                        {moment.comments.map((comment) => {
                          const commentAuthor = getCharacter(comment.authorId);
                          return (
                            <div key={comment.id} className="comment-item">
                              <span className="comment-author-name">{commentAuthor.name}</span>
                              {commentAuthor.id === moment.authorId && (
                                <span style={{ fontSize: '0.65rem', background: 'rgba(214,175,55,0.2)', color: 'var(--primary-gold)', padding: '0.05rem 0.2rem', borderRadius: '3px', marginLeft: '0.25rem', marginRight: '0.25rem' }}>楼主</span>
                              )}
                              ：
                              <span style={{ color: 'var(--text-primary)' }}>{comment.content}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Active Comment Form */}
                    {activeCommentPostId === moment.id && (
                      <form className="comment-form" onSubmit={(e) => handleCommentSubmit(e, moment.id)}>
                        <input
                          type="text"
                          className="comment-input"
                          placeholder={`以「${currentUser.name}」的身份发表高见...`}
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          autoFocus
                        />
                        <button type="submit" className="comment-submit-btn">发送</button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
