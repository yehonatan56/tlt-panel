const express = require("express");
const router = express.Router();
const linkModel = require("../models/links");
router.post("/", async (req, res) => {
  try {
    const { link } = req.body;
    const linkDoc = new linkModel({ link });
    await linkDoc.save();
    res.json(linkDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/purchase", async (req, res) => {
  try {
    const { link } = req.body;
    const linkDoc = await linkModel.findOneAndUpdate(
      { link },
      { $inc: { purchases: 1 } },
    );
    res.json(linkDoc);
    // todo: send full linkDoc back
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
