import React from 'react';

export function CodeInput({ code, setCode, placeholder = "Paste your code here..." }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: '400px',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            overflow: 'hidden',
            background: 'var(--bg-secondary)'
        }}>
            <div style={{
                padding: '0.5rem 1rem',
                background: 'var(--bg-tertiary)',
                borderBottom: '1px solid var(--border)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                Input Code
            </div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={placeholder}
                style={{
                    width: '100%',
                    flex: 1,
                    background: 'transparent',
                    color: 'var(--text-primary)',
                    border: 'none',
                    padding: '1rem',
                    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                    fontSize: '0.9rem',
                    resize: 'none',
                    outline: 'none',
                    lineHeight: 1.6
                }}
            />
        </div>
    );
}
