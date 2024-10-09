const linkModel = require("../../models/links");

module.exports.purchase = async (req, res) => {
  try {
    const linkDoc = await linkModel.findOneAndUpdate(
      { link: req.body.link },
      { $inc: { purchases: 1 } },
      { new: true },
    );

    res.json(linkDoc);
  } catch (err) {
    res.status(400).json(err);
  }
};
