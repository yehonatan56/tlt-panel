import mongoose from 'mongoose';
import { ICustomer } from '../interfaces/customer.interface';

const customerSchema = new mongoose.Schema<ICustomer>(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },
        phone: {
            type: String,
            required: [true, 'Phone is required'],
            //   unique: true,
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
        },
        city: {
            type: String,
            required: [true, 'City is required'],
        },
        purchases: {
            type: Number,
            default: 1,
        },
        pickupMethod: {
            // todo: change to enum option
            type: String,
            required: [true, 'Pickup method is required'],
        },
        products: { type: [String], default: [] },
    },
    { timestamps: true }
);

const CustomerModel = mongoose.model('customers', customerSchema);

export default CustomerModel;
