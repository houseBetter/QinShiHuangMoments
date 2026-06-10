import React, { useState } from 'react';
import { Send, MapPin, Tag } from 'lucide-react';

export default function PostForm({ currentUser, characters, onPublish }) {
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('咸阳宫');
  const [tag, setTag] = useState('unification');

  const locations = ['咸阳宫', '阿房殿', '琅琊台', '九原郡', '易水河畔', '东海仙船', '沛县酒馆', '巨鹿战场'];
  const categories = [
    { id: 'unification', name: '一统天下' },
    { id: 'jingke', name: '刺秦恩怨' },
    { id: 'wall', name: '筑长城防线' },
    { id: 'elixir', name: '海外求仙' },
    { id: 'conspiracy', name: '朝堂密谋' },
    { id: 'general', name: '大秦日常' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    onPublish({
      content: content.trim(),
      location,
      tag,
      authorId: currentUser.id
    });
    setContent('');
  };

  return (
    <div className="glass-panel publish-card">
      <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.2rem' }}>
        发表新动态 (以「{currentUser.name}」身份)
      </h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="publish-textarea"
          placeholder="朕今天巡游天下，有何感想？或者，卿有什么八卦想与同僚分享？"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={400}
        />
        
        <div className="publish-row">
          <div className="publish-options">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <MapPin size={14} color="#5b7a9c" />
              <select 
                className="publish-select" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </span>

            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <Tag size={14} color="var(--primary-gold)" />
              <select 
                className="publish-select" 
                value={tag} 
                onChange={(e) => setTag(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </span>
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            disabled={!content.trim()}
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem', opacity: content.trim() ? 1 : 0.6 }}
          >
            <Send size={14} />
            发布
          </button>
        </div>
      </form>
    </div>
  );
}
