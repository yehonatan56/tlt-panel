import { rateLimit } from 'express-rate-limit';
export const purchaseLimiter = rateLimit({
    limit: 1,
    windowMs: 5 * 60 * 1000, // 5 minutes
    message: 'Too many requests, please try again later.',
});
