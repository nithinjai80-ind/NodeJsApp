const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Node.js Application Running Successfully 🚀</h1>");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
