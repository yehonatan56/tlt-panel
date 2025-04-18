import { rateLimit } from 'express-rate-limit';
import { NODE_ENV } from '../utils/enviromment-varibals';
export const purchaseLimiter =
    NODE_ENV === 'production'
        ? rateLimit({
              limit: 1,
              windowMs: 5 * 60 * 1000, // 5 minutes
              message: 'Too many requests, please try again later.',
          })
        : (_req, _res, next) => next();
