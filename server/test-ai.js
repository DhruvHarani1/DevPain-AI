const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function testConnection() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("No API Key found in .env");
    return;
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  try {
    console.log("Testing API Key...");
    // Try to get a model and generate simple content
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hello");
    console.log("Success with gemini-1.5-flash!");
    console.log(result.response.text());
  } catch (error) {
    console.error("Failed with gemini-all-flash:", error.message);
    
    // Fallback test
    try {
        console.log("Trying gemini-pro...");
        const modelPro = genAI.getGenerativeModel({ model: "gemini-pro" });
        const resultPro = await modelPro.generateContent("Hello");
        console.log("Success with gemini-pro!");
    } catch (errPro) {
        console.error("Failed with gemini-pro:", errPro.message);
    }
  }
}

testConnection();
