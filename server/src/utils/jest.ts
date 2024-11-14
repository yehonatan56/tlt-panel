import dotenv from 'dotenv';
import connectDB from '../config/db';
import { ENV_PATH } from '../paths';
import usersModel from '../models/users.model';

jest.setTimeout(30000);
dotenv.config({ path: ENV_PATH });

beforeAll(async () => {
    await connectDB().then(async () => {
        await new usersModel({
            username: 'test',
            password: 'test',
        }).save();
    });
});

afterAll(async () => {
    await usersModel.deleteMany({});
});
