import express from 'express';
import { acceptPickupCtrl } from '../controllers/pickup.controller';

const router = express.Router();

router.get('/:id', acceptPickupCtrl);

export default router;
