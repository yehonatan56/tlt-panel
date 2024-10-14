const express = require("express");
const { create } = require("../services/links/create");
const { purchase } = require("../services/links/purchase");
const { get, getPages, getHighestPurchases } = require("../services/links/get");
// TODO: Change to isAuthorizedUserMW
const { isAuthorized } = require("../middlewars/auth");
const { deleteLink } = require("../services/links/delete");

const router = express.Router();

// todo: remove console logs
console.log("router");

router.get("/", isAuthorized(), get);
router.get("/pages", isAuthorized(), getPages);
router.get("/highest", isAuthorized(), getHighestPurchases);
router.post("/", isAuthorized(), create);
router.post("/purchase", purchase);
router.delete("/:id", isAuthorized(), deleteLink);
module.exports = router;
