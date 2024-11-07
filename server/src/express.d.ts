import { IUser } from "./interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      id?: string;
      user?: IUser;
      userId?: string;
      fileGenaratedName?: string;
      customerID?: string;
    }
  }
}
export {}; // Fix for TS4023       ]
