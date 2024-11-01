import { Request, Response, NextFunction } from "express";
import { addCustomerServiceHandler } from "../services/customers.service";
const addCustomerCtrl = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = await addCustomerServiceHandler(req.body);
    req.customerID = id;
    next();
  } catch (e) {
    res.json(e);
  }
};

export { addCustomerCtrl };
