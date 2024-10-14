const linkModel = require("../../models/links");

module.exports.create = async (req, res) => {
  try {
    const linkDoc = new linkModel({
      link: req.body.link,
      // image: req.file.filename,
    });

    await linkDoc.save();

    res.json(linkDoc);
  } catch (err) {
    res.status(400).json(err);
  }
};
