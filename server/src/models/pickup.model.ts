import mongoose from 'mongoose';
import { IPickup } from '../interfaces/pickup.interface';

const pickupSchema = new mongoose.Schema<IPickup>({
    // @ts-ignore
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        required: true,
    },
    products: {
        type: [String],
        required: true,
    },
    location: {
        enum: ['zefat', 'rishon'],
        type: String,
    },
    taken: {
        type: Boolean,
        default: false,
    },
});

const pickupModel = mongoose.model('pickups', pickupSchema);
export default pickupModel;
