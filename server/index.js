const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data Generator
const getMockExplanation = (code, language, complexity, outputLanguage) => {
    return {
        summary: `This ${language} code performs a specific task. In ${complexity} mode, it means...`,
        lineByLine: `1. First line does x\n2. Second line does y`,
        logicFlow: `The logic flows from A to B.`,
        issues: `No major issues found in this snippet.`,
        improvedVersion: `// Optimized ${language} code goes here\nprint("Hello World")`
    };
};

// Endpoints
app.post('/explain', (req, res) => {
    const { code, language, complexity, outputLanguage } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }

    // Simulate processing delay
    setTimeout(() => {
        const explanation = getMockExplanation(code, language, complexity, outputLanguage);
        res.json(explanation);
    }, 1000);
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', server: 'DevPain AI Backend' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
