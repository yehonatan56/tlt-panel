const express = require("express");

const { isAuthenticatedMW } = require("../config/passport");
const { create } = require("../services/links/create");
const { purchase } = require("../services/links/purchase");

const router = express.Router();

router.post("/", create);

router.post("/purchase", purchase);

module.exports = router;
