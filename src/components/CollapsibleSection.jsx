import React, { useState } from 'react';

export function CollapsibleSection({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div style={{
            borderBottom: '1px solid var(--border)',
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    background: 'var(--bg-secondary)',
                    border: 'none',
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'var(--bg-secondary)'}
            >
                <span>{title}</span>
                <span style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                }}>
                    ▼
                </span>
            </button>

            {isOpen && (
                <div style={{
                    padding: '1rem',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border)'
                }}>
                    {children}
                </div>
            )}
        </div>
    );
}
