import customerModel from '../models/customers.model';
import { ICustomer } from '../interfaces/customer.interface';

const getCustomersServiceHandler = async (): Promise<ICustomer[]> => {
    return (await customerModel.find({})) as unknown as ICustomer[];
};
const addCustomerServiceHandler = async (customer: ICustomer): Promise<string> => {
    const customerDoc = await customerModel.findOneAndUpdate(
        { phone: customer.phone }, // Filter: Find by phone number
        {
            $inc: { purchases: 1 }, // Increment the "purchases" field
        },
        {
            upsert: true, // Create a new document if no match is found
            new: true, // Return the new or updated document
        }
    );
    if (!customerDoc || !customerDoc._id) {
        throw new Error('Failed to create or update customer');
    }

    return customerDoc._id.toString();
};

export { getCustomersServiceHandler, addCustomerServiceHandler };
