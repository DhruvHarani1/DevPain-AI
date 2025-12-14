import React from 'react';

export function Header() {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '1.5rem 0',
      marginBottom: '2rem'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 700, 
            margin: 0,
            color: 'var(--accent)'
          }}>
            DevPain AI
          </h1>
          <p style={{ 
            margin: '0.25rem 0 0 0', 
            fontSize: '0.875rem', 
            color: 'var(--text-secondary)' 
          }}>
            Understand code you didn’t write
          </p>
        </div>
      </div>
    </header>
  );
}
