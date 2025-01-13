import express from 'express';
import { getQuestionsCtrl, addQuestionCtrl } from '../controllers/questions.controller';
import { isAdminUserMW } from '../middlewars/auth.middleware';

const router = express.Router();

router.get('/', getQuestionsCtrl);
router.post('/', isAdminUserMW, addQuestionCtrl);

export default router;
