const express = require("express");

const { isAuthenticatedMW } = require("../config/passport");
const { create } = require("../services/links/create");
const { purchase } = require("../services/links/purchase");
const { get, getPages } = require("../services/links/get");

const router = express.Router();
console.log("router");

router.get("/", get);
router.get("/pages", getPages);
router.post("/", create);

router.post("/purchase", purchase);

module.exports = router;
