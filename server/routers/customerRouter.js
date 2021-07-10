const router = require("express").Router();
const auth = require("../middleware/auth");
const Customer = require("../models/customerModel");

router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;
    const newCostumer = new Customer({
      name,
    });
    const savedCostumer = await newCostumer.save();
    res.status(201);
    res.json(savedCostumer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
