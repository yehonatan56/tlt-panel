import express from 'express';
import { getQuestionsCtrl, addQuestionCtrl } from '../controllers/questions.controller';
import { isAdminUserMW, isAuthorizedUserMW } from '../middlewars/auth.middleware';

const router = express.Router();

router.get('/:level', getQuestionsCtrl);
router.post('/', isAuthorizedUserMW, isAdminUserMW, addQuestionCtrl);

export default router;
