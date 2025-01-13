import mongoose from 'mongoose';
import { IQuestion } from '../interfaces/question.interface';

const questionSchema = new mongoose.Schema<IQuestion>(
    {
        // @ts-ignore
        level: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'levels',
            required: [true, 'Level is required'],
        },
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        correctAnswer: {
            type: String,
            required: [true, 'Correct answer is required'],
        },
        incorrectAnswer1: {
            type: String,
            required: [true, 'Incorrect answer 1 is required'],
        },
        incorrectAnswer2: {
            type: String,
            required: [true, 'Incorrect answer 2 is required'],
        },
        incorrectAnswer3: {
            type: String,
            required: [true, 'Incorrect answer 3 is required'],
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
        },
    },
    { timestamps: true }
);

const QuestionModel = mongoose.model('questions', questionSchema);
export default QuestionModel;
