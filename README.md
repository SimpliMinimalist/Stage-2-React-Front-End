# Stage 2 – React Frontend

This repository contains **Stage 2** of the assessment: a React frontend that connects to the [Stage 1 Backend API](https://github.com/SimpliMinimalist/Stage-1-Backend-API-with-Node.js).

It provides a working user interface for registration, login, and a protected dashboard — all powered by the Stage 1 API.

## Important

**Stage 1 must be running before you start Stage 2.**

The frontend makes HTTP requests to the backend at `http://localhost:3000`. If Stage 1 is not running, the UI will not be able to register, log in, or retrieve any data.

If you have not yet set up Stage 1, go here first: [Stage 1 Backend API](https://github.com/SimpliMinimalist/Stage-1-Backend-API-with-Node.js)

## Getting Started

> **Step 1:** Make sure the Stage 1 backend server is running (`npm run dev` in the Stage 1 directory). Keep that terminal open.

**Step 2:** In a new terminal window, clone this repository:

```bash
git clone https://github.com/SimpliMinimalist/Stage-2-React-Front-End.git
cd Stage-2-React-Front-End
```

**Step 3:** Install dependencies:

```bash
npm install
```

**Step 4:** Copy the environment file and connect to Stage 1:

```bash
# Windows
copy .env.example .env

# macOS / Linux
cp .env.example .env
```

> No changes are needed. The `.env` file is pre-configured to connect to `http://localhost:3000/api` — which is where the Stage 1 server runs by default.

**Step 5:** Start the development server:

```bash
npm run dev
```

**Step 6:** Open your browser and navigate to `http://localhost:5173`.

You should see the Register page. Create an account, log in, and you will be redirected to the dashboard displaying your username.

## Technology Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Vanilla CSS
