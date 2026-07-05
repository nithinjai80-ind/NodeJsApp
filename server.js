const express = require("express");

const app = express();

// Elastic Beanstalk automatically provides PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>Node.js Application</h1>
        <h2>Deployment Successful 🚀</h2>
        <p>This application is running successfully.</p>
    `);
});

// Health Check
app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application is healthy"
    });
});

// API Route
app.get("/api/info", (req, res) => {
    res.json({
        application: "Node.js Demo",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
