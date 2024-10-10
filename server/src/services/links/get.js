const linkModel = require("../../models/links");

module.exports.get = async (req, res) => {
  try {
    const {
      page = undefined,
      min: purchasesLower = 0,
      max: purchasesHigh = "1000",
      dateFrom,
      dateTo,
    } = req.query;

    const links = await linkModel
      .find({
        purchases: { $gte: +purchasesLower, $lte: +purchasesHigh },

        // createdAt: { $gte: dateFrom, $lte: dateTo },
      })
      .limit(8)
      .skip((page - 1) * 8);

    res.json({ links });
  } catch (err) {
    res.status(400).json(err);
  }
};

// this route is`nt used in the frontend
module.exports.getHighestPurchases = async (req, res) => {
  try {
    const links = await linkModel.find().sort({ purchases: -1 }).limit(3);

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
