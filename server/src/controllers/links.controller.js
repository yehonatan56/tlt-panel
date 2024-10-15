const {
  getLinksServiceHandler,
  createLinkServiceHandler,
  deleteLinkServiceHandler,
  getHighestPurchasesServiceHandler,
  getPagesServiceHandler,
  purchaseServiceHandler,
} = require("../services/links.service");
module.exports.getLinksCtrl = async (req, res, next) => {
  try {
    const links = await getLinksServiceHandler();
    res.send(links);
  } catch (e) {
    res.send(e);
  }
};

module.exports.createLinkCtrl = async (req, res, next) => {
  try {
    const link = await createLinkServiceHandler(req);
    res.send(link);
  } catch (e) {
    res.send(e);
  }
};

module.exports.deleteLinkCtrl = async (req, res, next) => {
  try {
    const link = await deleteLinkServiceHandler(req.params.id);
    res.json(link);
  } catch (e) {
    res.send(e);
  }
};

module.exports.getHighestPurchasesCtrl = async (req, res, next) => {
  try {
    const links = await getHighestPurchasesServiceHandler();
    res.send(links);
  } catch (e) {
    next(e);
  }
};

module.exports.getPagesCtrl = async (req, res, next) => {
  try {
    const pages = await getPagesServiceHandler();
    res.send(pages);
  } catch (e) {
    next(e);
  }
};

module.exports.getLinksCtrl = async (req, res, next) => {
  try {
    const links = await getLinksServiceHandler();
    res.send(links);
  } catch (e) {
    next(e);
  }
};

module.exports.purchaseCtrl = async (req, res, next) => {
  try {
    const link = await purchaseServiceHandler(req.body.link);
    res.send(link);
  } catch (e) {
    res.send(e);
  }
};
