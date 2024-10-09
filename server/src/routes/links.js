const express = require("express");
const { create } = require("../services/links/create");
const { purchase } = require("../services/links/purchase");
const { get, getPages, getHighestPurchases } = require("../services/links/get");
const { isAuthorized } = require("../middlewars/auth");

const router = express.Router();
console.log("router");

router.get("/", isAuthorized(), get);
router.get("/pages", isAuthorized(), getPages);
router.get("/highest", isAuthorized(), getHighestPurchases);
router.post("/", isAuthorized(), create);
router.post("/purchase", purchase);

module.exports = router;
