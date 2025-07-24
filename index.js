import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Bienvenido" });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

