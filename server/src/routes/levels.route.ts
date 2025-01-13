import express from 'express';
import { addLevelCtrl, getLevelsCtrl } from '../controllers/levels.controller';
import { isAdminUserMW } from '../middlewars/auth.middleware';

const router = express.Router();

router.get('/', getLevelsCtrl);
router.post('/', isAdminUserMW, addLevelCtrl);

export default router;
