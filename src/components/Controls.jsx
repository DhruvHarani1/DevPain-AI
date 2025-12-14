import React from 'react';

const ToggleGroup = ({ label, options, value, onChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {label}:
            </span>
            <div style={{
                display: 'flex',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                overflow: 'hidden',
                padding: '2px'
            }}>
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onChange(option.value)}
                        style={{
                            background: value === option.value ? 'var(--bg-tertiary)' : 'transparent',
                            color: value === option.value ? 'var(--accent)' : 'var(--text-secondary)',
                            border: 'none',
                            padding: '0.35rem 0.8rem',
                            fontSize: '0.8rem',
                            fontWeight: value === option.value ? 600 : 400,
                            borderRadius: '4px',
                            transition: 'all 0.2s',
                            cursor: 'pointer'
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export function Controls({
    language, setLanguage,
    complexity, setComplexity,
    outputLanguage, setOutputLanguage,
    onExplain
}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '1rem',
        }}>
            {/* Settings Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
                <ToggleGroup
                    label="Level"
                    value={complexity}
                    onChange={setComplexity}
                    options={[
                        { label: 'Beginner', value: 'beginner' },
                        { label: 'Interview', value: 'interview' }
                    ]}
                />

                <ToggleGroup
                    label="Output"
                    value={outputLanguage}
                    onChange={setOutputLanguage}
                    options={[
                        { label: 'English', value: 'english' },
                        { label: 'Hinglish', value: 'hinglish' }
                    ]}
                />
            </div>

            {/* Main Actions Row */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        Input:
                    </span>
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
                </div>

                <button
                    onClick={onExplain}
                    style={{
                        background: 'var(--accent)',
                        color: '#fff',
                        border: 'none',
                        padding: '0.6rem 2rem',
                        borderRadius: '6px',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'var(--accent-hover)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'var(--accent)'}
                >
                    Explain My Code
                </button>
            </div>
        </div>
    );
}
