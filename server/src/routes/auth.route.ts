import { Router, Request, Response } from 'express';
import { loginCtrl } from '../controllers/auth.controller';
import { loggerMW } from '../middlewars/logger.middleware';

const router = Router();

router.use(loggerMW);

router.post('/login', loginCtrl);

// todo: add underscore for never read var like req => _req
router.post('/logout', (req: Request, res: Response) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out' });
});

export default router;
