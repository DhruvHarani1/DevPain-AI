import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';

export function OutputArea({ explanation, isLoading, error }) {

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                minHeight: '400px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 600 }}>
                    Analyzing logic...
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Generating simple explanation
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                minHeight: '400px',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <div style={{ color: '#ff6b6b', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Something went wrong
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                    {error}
                </p>
            </div>
        );
    }

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

            {!explanation ? (
                <div style={{
                    padding: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1
                }}>
                    Run "Explain My Code" to see the analysis here.
                </div>
            ) : (
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {explanation.summary && (
                        <CollapsibleSection title="1. What this code does" defaultOpen={true}>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{explanation.summary}</p>
                        </CollapsibleSection>
                    )}

                    {explanation.lineByLine && (
                        <CollapsibleSection title="2. Line-by-line explanation">
                            {Array.isArray(explanation.lineByLine) ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {explanation.lineByLine.map((item, idx) => (
                                        <div key={idx} style={{
                                            paddingLeft: '0.8rem',
                                            borderLeft: '2px solid var(--accent)'
                                        }}>
                                            <div style={{
                                                fontFamily: 'monospace',
                                                background: 'rgba(255,255,255,0.05)',
                                                padding: '0.2rem 0.5rem',
                                                borderRadius: '4px',
                                                display: 'inline-block',
                                                fontSize: '0.85rem',
                                                marginBottom: '0.3rem',
                                                color: 'var(--accent)',
                                                border: '1px solid rgba(255,255,255,0.1)'
                                            }}>
                                                {item.code}
                                            </div>
                                            <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                                {item.explanation}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ whiteSpace: 'pre-wrap' }}>{explanation.lineByLine}</p>
                            )}
                        </CollapsibleSection>
                    )}

                    {explanation.logicFlow && (
                        <CollapsibleSection title="3. Logic flow">
                            {Array.isArray(explanation.logicFlow) ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {explanation.logicFlow.map((step, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                            <div style={{
                                                background: 'var(--bg-tertiary)',
                                                border: '1px solid var(--border)',
                                                color: 'var(--text-secondary)',
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: 600,
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <div style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                                                {step}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ whiteSpace: 'pre-wrap' }}>{explanation.logicFlow}</p>
                            )}
                        </CollapsibleSection>
                    )}

                    {explanation.issues && (
                        <CollapsibleSection title="4. Problems / Bad practices">
                            {Array.isArray(explanation.issues) ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    {explanation.issues.map((issue, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            gap: '0.8rem',
                                            alignItems: 'flex-start',
                                            background: 'rgba(219, 166, 66, 0.1)',
                                            border: '1px solid rgba(219, 166, 66, 0.2)',
                                            padding: '0.8rem',
                                            borderRadius: '6px'
                                        }}>
                                            <div style={{ color: '#dba642', fontSize: '1.2rem', lineHeight: 1 }}>
                                                ⚠
                                            </div>
                                            <div style={{ color: 'var(--text-primary)', lineHeight: '1.5', fontSize: '0.95rem' }}>
                                                {issue}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ borderLeft: '3px solid #dba642', paddingLeft: '1rem', background: 'rgba(219, 166, 66, 0.1)', padding: '0.5rem 1rem' }}>
                                    <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{explanation.issues}</p>
                                </div>
                            )}
                        </CollapsibleSection>
                    )}

                    {explanation.improvedVersion && (
                        <CollapsibleSection title="5. Improved version">
                            <div style={{ position: 'relative' }}>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(explanation.improvedVersion);
                                        // Could add a temporary "Copied!" state here if we moved this to a sub-component, 
                                        // but for now a simple alert or text change is tricky without new state.
                                        // We'll just change the button text using DOM manipulation for simplicity or ideally use a new state.
                                        // Since we can't easily add state to this big component without refactoring, 
                                        // let's just make it a simple functional button.
                                        const btn = document.getElementById('copy-btn');
                                        if (btn) {
                                            btn.innerText = 'Copied!';
                                            setTimeout(() => btn.innerText = 'Copy', 2000);
                                        }
                                    }}
                                    id="copy-btn"
                                    style={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '0.5rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        color: 'var(--text-secondary)',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        zIndex: 10
                                    }}
                                >
                                    Copy
                                </button>
                                <pre style={{
                                    background: '#0d1117',
                                    padding: '1rem',
                                    paddingTop: '2rem', // Space for button
                                    borderRadius: '4px',
                                    overflowX: 'auto',
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-primary)',
                                    margin: 0
                                }}>
                                    <code>{explanation.improvedVersion}</code>
                                </pre>
                            </div>
                        </CollapsibleSection>
                    )}
                </div>
            )}
        </div>
    );
}
