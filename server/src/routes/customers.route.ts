import express from 'express';
import { isAuthorizedUserMW } from '../middlewars/auth.middleware';
import { getCustomersCtrl } from '../controllers/customers.cotroller';

const router = express.Router();

router.get('/', isAuthorizedUserMW, getCustomersCtrl);

export default router;
