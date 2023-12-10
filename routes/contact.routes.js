const express = require('express');
const contactRoutes = express.Router();
const { prisma } = require("../config/prisma");

contactRoutes.post("/", async (req, res) => {
  const { name, address, message } = req.body;

  try {
    const newContact = await prisma.contact.create({
      data: {
        name: name,
        address: address,
        message: message
      },
    });

    res.status(201).json({
      message: `kontak dibuat`,
      data: newContact,
    });
  } catch (error) {
    console.log(`error membuat kontak`);
    console.log(error);

    res.status(500).json({
      message: `Error membuat kontak`,
      error: error.message,
    });
  }
});

  contactRoutes.get("/", async (req, res) => {
    try {
      const contacts = await prisma.contact.findMany();
      res.status(200).json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
module.exports = { contactRoutes };