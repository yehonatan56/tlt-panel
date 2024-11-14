import customerModel from '../models/customers.model';
import { ICustomer } from '../interfaces/customer.interface';
const addCustomerServiceHandler = async (customer: ICustomer): Promise<string> => {
    const customerDoc = new customerModel(customer);

    await customerDoc.save();
    return customerDoc._id as unknown as string;
};

export { addCustomerServiceHandler };
