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
                            <p style={{ whiteSpace: 'pre-wrap' }}>{explanation.lineByLine}</p>
                        </CollapsibleSection>
                    )}

                    {explanation.logicFlow && (
                        <CollapsibleSection title="3. Logic flow">
                            <p style={{ whiteSpace: 'pre-wrap' }}>{explanation.logicFlow}</p>
                        </CollapsibleSection>
                    )}

                    {explanation.issues && (
                        <CollapsibleSection title="4. Problems / Bad practices">
                            <div style={{ borderLeft: '3px solid #dba642', paddingLeft: '1rem', background: 'rgba(219, 166, 66, 0.1)', padding: '0.5rem 1rem' }}>
                                <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{explanation.issues}</p>
                            </div>
                        </CollapsibleSection>
                    )}

                    {explanation.improvedVersion && (
                        <CollapsibleSection title="5. Improved version">
                            <pre style={{
                                background: '#0d1117',
                                padding: '1rem',
                                borderRadius: '4px',
                                overflowX: 'auto',
                                border: '1px solid var(--border)',
                                color: 'var(--text-primary)'
                            }}>
                                <code>{explanation.improvedVersion}</code>
                            </pre>
                        </CollapsibleSection>
                    )}
                </div>
            )}
        </div>
    );
}
