import { IUser } from "./interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
      userId?: string;
    }
  }
}
export {}; // Fix for TS4023       ]
