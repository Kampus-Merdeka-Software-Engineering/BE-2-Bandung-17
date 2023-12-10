const express = require('express');
const contactRoutes = express.Router();
const { prisma } = require("../config/prisma")

contactRoutes.post("/", async (req, res) => {
  const { name } = req.body;
  // if (!name || !address || !message) res.status(400).json({ message: `name is required` });
 try{
  const newContact = await prisma.contact.create({
      data: {
          name: name,
          address: addressValues,
          message: message
      },
  });
  res.status(201).json({
      message: `contact created`,
      data: newContact,
  });
} catch (error) {
  console.log(`error create contact`);
  console.log(error);
  res.status()
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