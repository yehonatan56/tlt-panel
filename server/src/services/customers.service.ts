import customerModel from '../models/customers.model';
import { ICustomer } from '../interfaces/customer.interface';

const getCustomersServiceHandler = async (page: number): Promise<ICustomer[]> => {
    return (await customerModel
        .find({})
        .skip(page * 8)
        .limit(8)) as unknown as ICustomer[];
};
const addCustomerServiceHandler = async (customer: ICustomer): Promise<string> => {
    const customerDoc = new customerModel(customer);

    await customerDoc.save();
    return customerDoc._id as unknown as string;
};

export { getCustomersServiceHandler, addCustomerServiceHandler };
