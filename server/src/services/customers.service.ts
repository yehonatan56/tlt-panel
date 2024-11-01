import customerModel from "../models/customers.model";
import { ICustomer } from "../interfaces/customer.interface";
const addCustomerServiceHandler = async (customer: ICustomer) => {
  try {
    const customerDoc = new customerModel(customer);
    await customerDoc.save();
    return customerDoc._id;
  } catch (err) {
    return err;
  }
};

export { addCustomerServiceHandler };
