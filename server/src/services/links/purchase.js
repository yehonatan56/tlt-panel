const linkModel = require("../../models/links");
const sendMail = require("../../config/mail");

module.exports.purchase = async (req, res) => {
  try {
    const linkDoc = await linkModel.findOneAndUpdate(
      { link: req.body.link },
      { $inc: { purchases: 1 } },
      { new: true },
    );

    await sendMail(`Someone bought your product: ${req.body.link}`);

    res.json(linkDoc);
  } catch (err) {
    res.status(400).json(err);
  }
};
