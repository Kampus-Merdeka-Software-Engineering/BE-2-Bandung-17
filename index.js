require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { catalogRoutes } = require(`./routes/catalog.routes`);
const { productRoutes } = require('./routes/product.routes');
const { contactRoutes } = require(`./routes/contact.routes`);
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.send("here is the");
});

app.use("/catalogs", catalogRoutes);
app.use("/product", productRoutes);
app.use("/contact", contactRoutes);



app.all("*", async (req, res) => {
    res.json({
        message: `routes you're looking is not found`,
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is already running at ${PORT}`);
});