import customerModel from '../models/customers.model';
import { ICustomer } from '../interfaces/customer.interface';
import mongoose from 'mongoose';

const addCustomerServiceHandler = async (customer: ICustomer): Promise<mongoose.Types.ObjectId> => {
    try {
        const customerDoc = new customerModel(customer);

        await customerDoc.save();
        return customerDoc._id;
    } catch (err) {
        return err;
    }
};

export { addCustomerServiceHandler };
