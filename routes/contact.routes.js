const express = require('express');
const contactRoutes = express.Router();
const { prisma } = require("../config/prisma")

contactRoutes.post("/", async (req, res) => {
    const { name, address, message } = req.body;
    if (!name || !address || !message) {
        res.status(400).json({ message: `Name, address, and message are required fields` });
        return;
    }
    const newContact = await prisma.contact.create({
        data: {
            name,
            address,
            message,
        },
    });
    res.status(201).json({
        message: `Contact request submitted successfully`,
        data: newContact,
    });
});

module.exports = { contactRoutes };