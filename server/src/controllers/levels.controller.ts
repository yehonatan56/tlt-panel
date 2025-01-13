import { Request, Response } from 'express';
import { addLevelServiceHandler, getLevelsServiceHandler } from '../services/levels.service';

export const getLevelsCtrl = async (_req: Request, res: Response): Promise<void> => {
    try {
        const levels = await getLevelsServiceHandler();
        res.json(levels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addLevelCtrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const level = addLevelServiceHandler(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
