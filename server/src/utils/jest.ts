import connectDB from '../config/db';
import usersModel from '../models/users.model';
import { CONNECTION_STRING } from './enviromment-varibals';

jest.setTimeout(30000);

beforeAll(async () => {
    await connectDB(CONNECTION_STRING).then(async () => {
        await new usersModel({
            username: 'test',
            password: 'test',
        }).save();
    });
});

afterAll(async () => {
    await usersModel.deleteMany({});
});
