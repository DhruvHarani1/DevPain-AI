import React, { useState } from 'react';
import { Header } from './components/Header';
import { Controls } from './components/Controls';
import { CodeInput } from './components/CodeInput';
import { OutputArea } from './components/OutputArea';

import { generatePDF } from './utils/pdfGenerator';

function App() {
  const [language, setLanguage] = useState('java');
  const [complexity, setComplexity] = useState('beginner');
  const [outputLanguage, setOutputLanguage] = useState('english');
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = () => {
    if (!explanation) return;
    generatePDF(explanation, language, complexity);
  };

  const handleExplain = async () => {
    if (!code.trim()) {
      alert("Please enter some code first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setExplanation(null);

    try {
      const response = await fetch('http://localhost:5000/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          language,
          complexity,
          outputLanguage
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get explanation');
      }

      setExplanation(data);

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
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
          isLoading={isLoading}
          onDownload={handleDownload}
          hasResult={!!explanation}
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
            <OutputArea
              explanation={explanation}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
