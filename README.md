# DevPain AI 🚀

**DevPain AI** is a SaaS web application designed to help students, beginners, and developers understand code in simple, human-friendly language. It uses Google's Gemini AI to break down complex logic into easy-to-understand explanations, analogies, and structured analysis.

![DevPain AI Screenshot](screenshot_placeholder.png) *Add a screenshot here*

## ✨ Features

- **Beginner Mode**: Explains code using real-world analogies (e.g., "This loop is like a shopping list").
- **Interview Mode**: Focuses on algorithmic complexity (Time/Space) and technical terminology.
- **Hinglish Support**: Generates explanations in a mix of Hindi and English for better accessibility.
- **Deep Analysis**:
    - **Line-by-Line Breakdown**: Hoverable code snippets with clear explanations.
    - **Logic Flow**: Step-by-step execution path.
    - **Bad Practices**: Detects inefficiencies, bugs, and security risks.
    - **Improved Version**: Auto-refactors code with a "Copy" button.
- **PDF Download**: Generate and download a clean, structured PDF report of the analysis.
- **Developer UI**: Dark mode, responsive design, and developer-friendly aesthetics.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Vanilla CSS (Custom Design System)
- **Backend**: Node.js, Express
- **AI Engine**: Google Gemini API (`gemini-2.5-flash` / `gemini-1.5-flash`)
- **PDF Generation**: `jspdf` (Client-side)

## ⚙️ Prerequisites

- **Node.js** (v18 or higher) installed.
- **Google Gemini API Key**: Get one for free at [Google AI Studio](https://aistudio.google.com/app/apikey).

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository_url>
cd DevPain-AI
```

### 2. Setup Backend
The backend handles the connection to the AI model.

```bash
cd server
npm install
```

**Configuration**:
Create a `.env` file in the `server` directory:
```env
PORT=5001
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Setup Frontend
The frontend is the React application.

```bash
# Go back to root
cd .. 
npm install
```

## 🏃‍♂️ How to Run

You need to run both the backend and frontend terminals.

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```
*Server runs on: `http://localhost:5001`*

**Terminal 2 (Frontend):**
```bash
npm run dev
```
*Frontend runs on: `http://localhost:5173`*

## 🔍 Troubleshooting

- **500 Internal Server Error**: 
    - Check your `.env` file in the `server` folder.
    - Ensure `GEMINI_API_KEY` is correct and has no extra spaces.
    - Ensure you have internet access.
- **Port Conflicts**:
    - The backend uses port `5001`. If it stays "Address in use", you can change the `PORT` in `.env` and restart.
- **AI Model Not Found**:
    - If `gemini-2.5-flash` fails, edit `server/index.js` and switch to `gemini-1.5-flash`.

## 🤝 Contributing

Feel free to fork and submit PRs!

---
*Built with ❤️ for developers who feel the pain of legacy code.*
