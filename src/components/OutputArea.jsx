import React from 'react';
import { CollapsibleSection } from './CollapsibleSection';

export function OutputArea({ explanation }) {
    const hasContent = !!explanation;

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

            {!hasContent ? (
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
                    <CollapsibleSection title="1. What this code does" defaultOpen={true}>
                        <p>This code <strong>calculates the factorial</strong> of a given number. It basically takes an input integer and multiplies it by all positive integers less than it.</p>
                        <p><em>(Placeholder for high-level summary)</em></p>
                    </CollapsibleSection>

                    <CollapsibleSection title="2. Line-by-line explanation">
                        <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                            <li><code>Line 1</code>: Defines the function named <code>calculate</code>.</li>
                            <li><code>Line 2</code>: Checks if the number is less than 0.</li>
                            <li><code>Line 3</code>: Returns an error/null if so.</li>
                            <li><em>(Placeholder for detailed steps)</em></li>
                        </ul>
                    </CollapsibleSection>

                    <CollapsibleSection title="3. Logic flow">
                        <p>The code follows a <strong>recursive</strong> pattern (or iterative, depending on input). It starts at the top level and calls itself with <code>n-1</code> until it reaches the base case.</p>
                        <p><em>(Placeholder for logic flow)</em></p>
                    </CollapsibleSection>

                    <CollapsibleSection title="4. Problems / Bad practices">
                        <div style={{ borderLeft: '3px solid #dba642', paddingLeft: '1rem', background: 'rgba(219, 166, 66, 0.1)', padding: '0.5rem 1rem' }}>
                            <strong>Warning:</strong> No input validation for non-integers.
                        </div>
                        <p style={{ marginTop: '0.5rem' }}>Variable names like <code>x</code> are vague. Use descriptive names like <code>inputNumber</code>.</p>
                    </CollapsibleSection>

                    <CollapsibleSection title="5. Improved version">
                        <pre style={{
                            background: '#000',
                            padding: '1rem',
                            borderRadius: '4px',
                            overflowX: 'auto',
                            border: '1px solid var(--border)'
                        }}>
                            {`def factorial(n):
    if n < 0:
        raise ValueError("Must be positive")
    if n == 0:
        return 1
    return n * factorial(n-1)`}
                        </pre>
                    </CollapsibleSection>
                </div>
            )}
        </div>
    );
}
