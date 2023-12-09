const express = require('express');
const contactRoutes = express.Router();
const { prisma } = require("../config/prisma")

contactRoutes.post("/", async (req, res) => {
    try {
      const newContact = await prisma.contact.create({
        data: req.body,
      });
   
      res.status(201).json({
        message: "Message created",
        data: newContact,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = { contactRoutes };