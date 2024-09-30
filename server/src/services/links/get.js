const linkModel = require("../../models/links");

module.exports.get = async (req, res) => {
  try {
    const {
      page = 1,
      min: purchasesLower = 0,
      max: purchasesHigh = Infinity,
      dateFrom,
      dateTo,
    } = req.query;

    const links = await linkModel
      .find({
        purchases: { $gte: purchasesLower, $lte: purchasesHigh },
        createdAt: { $gte: dateFrom, $lte: dateTo },
      })
      .limit(8)
      .skip((page - 1) * 8);

    res.json({ links });
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.getPages = async (req, res) => {
  try {
    const linksPerPage = 8;
    const linksCount = await linkModel.countDocuments();
    const pages = Math.ceil(linksCount / linksPerPage);
    res.json({ pages });
  } catch (err) {
    res.status(400).json(err);
  }
};
