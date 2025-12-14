const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

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
app.post('/explain', async (req, res) => {
    const { code, language, complexity, outputLanguage } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }

    // Check for API Key
    if (!process.env.GEMINI_API_KEY) {
        console.warn("No GEMINI_API_KEY found in .env");
        return res.status(500).json({ error: "Server misconfiguration: No API Key" });
    }

    try {
        const { GoogleGenerativeAI } = require("@google/generative-ai");
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Using the latest efficient flash model
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const fs = require('fs');
        const path = require('path');
        const systemPromptPath = path.join(__dirname, 'ai_prompt.md');
        let systemPrompt = "";
        
        try {
             systemPrompt = fs.readFileSync(systemPromptPath, 'utf8');
        } catch (err) {
            console.error("Could not read system prompt file:", err);
            // Fallback system prompt if file read fails
            systemPrompt = "You are an expert coding tutor. Explain the code in simple JSON format.";
        }

        const userPrompt = `
        ${systemPrompt}

        ---
        **Request Details**:
        - **Language**: ${language}
        - **Mode**: ${complexity}
        - **Output Language**: ${outputLanguage}
        
        **Code to Explain**:
        ${code}
        `;

        const result = await model.generateContent(userPrompt);
        const responseCallback = await result.response;
        const text = responseCallback.text();
        
        // Basic JSON cleanup (remove markdown code blocks if AI adds them)
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        
        try {
            const jsonResponse = JSON.parse(cleanJson);
            res.json(jsonResponse);
        } catch (parseError) {
            console.error("Failed to parse AI response as JSON:", cleanJson);
            res.status(500).json({ error: "AI response format error", raw: text });
        }

    } catch (error) {
        console.error("AI Generation Error:", error);
        res.status(500).json({ error: "Failed to generate explanation" });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', server: 'DevPain AI Backend' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
