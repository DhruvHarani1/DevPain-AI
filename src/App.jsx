import React, { useState } from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { CodeInput } from './components/CodeInput';
import { OutputArea } from './components/OutputArea';

function App() {
  const [language, setLanguage] = useState('java');
  const [complexity, setComplexity] = useState('beginner');
  const [outputLanguage, setOutputLanguage] = useState('english');
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleExplain = () => {
    // Mock functionality for UI skeleton
    if (!code.trim()) {
      alert("Please enter some code first.");
      return;
    }
    setExplanation(`[Mock Explanation]\n\nMode: ${complexity.toUpperCase()}\nLanguage: ${outputLanguage.toUpperCase()}\n\nThis is where the simple explanation for your ${language} code will appear.\n\nIt works by analyzing the code you pasted...`);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Controls
          language={language}
          setLanguage={setLanguage}
          complexity={complexity}
          setComplexity={setComplexity}
          outputLanguage={outputLanguage}
          setOutputLanguage={setOutputLanguage}
          onExplain={handleExplain}
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* On mobile this should stack, for now keeping it simple grid for desktop. 
                Ideally we add a media query or uses flex-wrap. 
                Let's use a flex wrap style actually for better responsiveness without CSS files.
            */}
          <div style={{ display: 'contents' }} className="grid-layout">
            {/* Reverting to simple div structure if I can't easily do media queries inline without window hook */}
          </div>
        </div>

        {/* Responsive Layout Wrapper */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <CodeInput code={code} setCode={setCode} />
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <OutputArea explanation={explanation} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
