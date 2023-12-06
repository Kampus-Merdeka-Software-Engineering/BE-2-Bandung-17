const express = require('express');
const catalogRoutes = express.Router();
const { prisma } = require("../config/prisma")

catalogRoutes.get("/", async (req, res) => {
    const catalog = await prisma.catalog.findMany();
    res.status(200).send(catalog);
});

catalogRoutes.get("/:id", async (req, res) => {
    const catalog = await prisma.catalog.findUnique({
        where: {
            id: parseInt(req.params.id),
        },
    });
    res.status(200).send(catalog);
});

catalogRoutes.post("/", async (req, res) => {
    const { name } = req.body;
    if (!name) res.status(400).json({ message: `name is required` });
    const newCatalog = await prisma.catalog.create({
        data: {
            name: name,
        },
    });
    res.status(201).json({
        message: `catalog created`,
        data: newCatalog,
    });
});

module.exports = { catalogRoutes };