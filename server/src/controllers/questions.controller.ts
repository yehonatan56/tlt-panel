import { Request, Response } from 'express';
import { addQuestionServiceHandler, getQuestionsServiceHandler } from '../services/questions.service';

export const getQuestionsCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const questions = await getQuestionsServiceHandler(req.params.level);

        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addQuestionCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const question = addQuestionServiceHandler(req.body);
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
