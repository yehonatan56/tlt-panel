import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/users.model';

export const loginServiceHandler = async ({
    username,
    password,
}: {
    username: string;
    password: string;
}): Promise<{ message: string; status: number; token: string | null }> => {
    const user = await userModel.findOne({ username });

    if (!user) {
        return { message: 'User not found', status: 404, token: null };
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        return { message: 'Invalid credentials', status: 401, token: null };
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET);

    return { message: 'Logged in', status: 200, token };
};
