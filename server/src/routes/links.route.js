const express = require("express");
const { isAuthorizedUserMW } = require("../middlewars/auth");
const {
  createLinkCtrl,
  deleteLinkCtrl,
  getHighestPurchasesCtrl,
  getLinksCtrl,
  getPagesCtrl,
  purchaseCtrl,
  uploadCtrl,
} = require("../controllers/links.controller");
const { uploadMW } = require("../middlewars/upload");
const router = express.Router();

router.get("/", isAuthorizedUserMW, getLinksCtrl);
router.get("/pages", isAuthorizedUserMW, getPagesCtrl);
router.get("/highest", isAuthorizedUserMW, getHighestPurchasesCtrl);
router.post("/", isAuthorizedUserMW, createLinkCtrl);
router.post("/purchase", purchaseCtrl);
router.post("/upload", isAuthorizedUserMW, uploadMW.single("file"), uploadCtrl);

router.delete("/:id", isAuthorizedUserMW, deleteLinkCtrl);
module.exports = router;
