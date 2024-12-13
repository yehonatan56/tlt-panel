import connectDB from '../config/db';
import usersModel from '../models/users.model';

jest.setTimeout(30000);

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
