import mongoose from 'mongoose';
import { ILevel } from '../interfaces/level.interface';

const levelSchema = new mongoose.Schema<ILevel>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
        },
        index: {
            type: Number,
            required: [true, 'Index is required'],
        },
    },
    { timestamps: true }
);

const LevelModel = mongoose.model('levels', levelSchema);

export default LevelModel;
