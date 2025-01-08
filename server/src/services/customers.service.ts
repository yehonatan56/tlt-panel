import customerModel from '../models/customers.model';
import { ICustomer } from '../interfaces/customer.interface';

const getCustomersServiceHandler = async (): Promise<ICustomer[]> => {
    return customerModel.find({});
};

const addCustomerIfNotExistsServiceHandler = async (phoneOrEmail: string, customer: ICustomer): Promise<string> => {
    const customerDoc = await customerModel.findOne({ $or: [{ email: phoneOrEmail }, { phone: phoneOrEmail }] });
    if (customerDoc) {
        return customerDoc._id.toString();
    }

    const newCustomerDoc = new customerModel(customer);
    await newCustomerDoc.save();
    return newCustomerDoc._id.toString();
};

export { getCustomersServiceHandler, addCustomerIfNotExistsServiceHandler };
