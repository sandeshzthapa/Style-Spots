const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

const PORT = process.env.PORT || 5174;

app.listen(PORT, () => console.log('Server listening on ${PORT}'));