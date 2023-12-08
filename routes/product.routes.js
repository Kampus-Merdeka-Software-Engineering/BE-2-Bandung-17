const express = require('express');
const productRoutes = express.Router();
const { prisma } = require("../config/prisma");

productRoutes.get("/", async (req, res) => {
    const product = await prisma.product.findMany({

    });
    res.status(200).send(product);
});

productRoutes.get("/:catalogId", async (req, res) => {
	const { catalogId } = req.params;
	const products = await prisma.product.findMany({
		where: {
			catalogId: parseInt(catalogId),
		},
	});
	res.status(200).send(products);
});

productRoutes.post("/", async (req, res) => {
    const { name, price, imageUrl, catalogId, description } = req.body;
    if (!name || !price || !imageUrl || !catalogId || !description) {
        res.status(400).json({ message: `name is required` });
        return;
    }
    const priceValue = parseInt(price, 10);
    const catalogIdValue = catalogId !== null ? parseInt(catalogId, 10) : null;
    const newProduct = await prisma.product.create({
        data: {
            name: name,
            price: priceValue,
            imageUrl: imageUrl,
            catalogId: catalogIdValue,
            description: description
        },
    });
    res.status(201).json({
        message: `product created`,
        data: newProduct,
    });
});

module.exports = { productRoutes };