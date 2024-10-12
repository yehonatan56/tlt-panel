const linkModel = require("../../models/links");
module.exports.deleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    const link = await linkModel.findByIdAndDelete(id);
    res.json(link);
  } catch (err) {
    res.status(400).json(err);
  }
};
