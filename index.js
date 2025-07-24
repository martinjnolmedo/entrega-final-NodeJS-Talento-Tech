import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Bienvenido!!" });
});

import productsRouter from "./src/routes/products.router.js";
app.use('/api', productsRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

