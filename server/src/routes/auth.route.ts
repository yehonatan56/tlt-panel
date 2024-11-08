import { Router, Request, Response } from 'express';
import { loginCtrl } from '../controllers/auth.controller';
import { loggerMW } from '../middlewars/logger.middleware';

const router = Router();

router.use(loggerMW);

router.post('/login', loginCtrl);

router.post('/logout', (_req: Request, res: Response) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
});

export default router;
