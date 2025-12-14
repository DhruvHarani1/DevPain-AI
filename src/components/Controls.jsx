import React from 'react';

export function Controls({ language, setLanguage, onExplain }) {
    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
            justifyContent: 'flex-end',
            alignItems: 'center'
        }}>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border)',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    outline: 'none'
                }}
            >
                <option value="java">Java</option>
                <option value="python">Python</option>
            </select>

            <button
                onClick={onExplain}
                style={{
                    background: 'var(--accent)',
                    color: '#fff',
                    border: 'none',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'var(--accent-hover)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'var(--accent)'}
            >
                Explain My Code
            </button>
        </div>
    );
}
