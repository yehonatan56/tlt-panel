const express = require("express");
const { isAuthorizedUserMW } = require("../middlewars/auth");
const {
  createLinkCtrl,
  deleteLinkCtrl,
  getHighestPurchasesCtrl,
  getLinksCtrl,
  getPagesCtrl,
  purchaseCtrl,
} = require("../controllers/links.controller");
const router = express.Router();

router.get("/", isAuthorizedUserMW, getLinksCtrl);
router.get("/pages", isAuthorizedUserMW, getPagesCtrl);
router.get("/highest", isAuthorizedUserMW, getHighestPurchasesCtrl);
router.post("/", isAuthorizedUserMW, createLinkCtrl);
router.post("/purchase", purchaseCtrl);
router.delete("/:id", isAuthorizedUserMW, deleteLinkCtrl);
module.exports = router;
