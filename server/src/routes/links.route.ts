import express from 'express';
import { isAuthorizedUserMW } from '../middlewars/auth.middleware';
import {
    createLinkCtrl,
    deleteLinkCtrl,
    getHighestPurchasesCtrl,
    getLinksCtrl,
    getPagesCtrl,
    purchaseCtrl,
    uploadCtrl,
    editLinkCtrl,
} from '../controllers/links.controller';
import { loggerMW } from '../middlewars/logger.middleware';
import upload from '../utils/cloudinary';
import { whatsappMW } from '../middlewars/whatsapp.middleware';
import { addCustomerIfNotExistsMW } from '../middlewars/customer.middleware';
import { addPickupMW } from '../middlewars/pickup.middleware';
import { purchaseLimiter } from '../middlewars/limiters.middleware';
const router = express.Router();

router.use(loggerMW);
router.get('/', isAuthorizedUserMW, getLinksCtrl);
router.get('/pages', isAuthorizedUserMW, getPagesCtrl);
router.get('/highest', isAuthorizedUserMW, getHighestPurchasesCtrl);
router.post('/', isAuthorizedUserMW, createLinkCtrl);
router.post('/purchase', purchaseLimiter, addCustomerIfNotExistsMW, addPickupMW, whatsappMW, purchaseCtrl);

router.post('/upload', isAuthorizedUserMW, upload.single('image'), uploadCtrl);
router.put('/:id', isAuthorizedUserMW, editLinkCtrl);
router.delete('/:id', isAuthorizedUserMW, deleteLinkCtrl);

export default router;
