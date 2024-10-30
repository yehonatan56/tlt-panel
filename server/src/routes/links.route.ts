import express from "express";
import { isAuthorizedUserMW } from "../middlewars/auth.middleware";
import {
  createLinkCtrl,
  deleteLinkCtrl,
  getHighestPurchasesCtrl,
  getLinksCtrl,
  getPagesCtrl,
  purchaseCtrl,
  uploadCtrl,
  editLinkCtrl,
} from "../controllers/links.controller";
import { uploadMW } from "../middlewars/upload.miiddleware";
const router = express.Router();

router.get("/", isAuthorizedUserMW, getLinksCtrl);
router.get("/pages", isAuthorizedUserMW, getPagesCtrl);
router.get("/highest", isAuthorizedUserMW, getHighestPurchasesCtrl);
router.post("/", isAuthorizedUserMW, createLinkCtrl);
router.post("/purchase", purchaseCtrl);
router.post("/upload", isAuthorizedUserMW, uploadMW.single("file"), uploadCtrl);
router.put("/:id", isAuthorizedUserMW, editLinkCtrl);
router.delete("/:id", isAuthorizedUserMW, deleteLinkCtrl);

export default router;
