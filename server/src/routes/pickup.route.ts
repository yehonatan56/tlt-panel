import express from 'express';
import { checkCodePickupLocationMW, checkIfPickupIsExistMW } from '../middlewars/pickup.middleware';
import { acceptPickupCtrl } from '../controllers/pickup.controller';
import { PICKUP_PATH } from '../paths';

const router = express.Router();

// @ts-ignore
router.get('/:id', checkIfPickupIsExistMW, (_req, res) => res.sendFile(PICKUP_PATH));

router.post('/:id', checkCodePickupLocationMW, acceptPickupCtrl);

export default router;
