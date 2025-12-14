import React from 'react';

export function OutputArea({ explanation }) {
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
                Explanation
            </div>
            <div style={{
                padding: '1.5rem',
                flex: 1,
                color: explanation ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.7
            }}>
                {explanation ? explanation : "Run 'Explain My Code' to see the simple explanation here."}
            </div>
        </div>
    );
}
