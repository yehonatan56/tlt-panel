import express from 'express';
import { addLevelCtrl, getLevelsCtrl } from '../controllers/levels.controller';
import { isAdminUserMW, isAuthorizedUserMW } from '../middlewars/auth.middleware';

const router = express.Router();

router.get('/', getLevelsCtrl);
router.post('/', isAuthorizedUserMW, isAdminUserMW, addLevelCtrl);

export default router;
