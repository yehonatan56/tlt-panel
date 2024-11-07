import userModel from '../models/users.model';
import { IUser } from '../interfaces/user.interface';

export const getUsernamesServiceHandler = async (): Promise<IUser[]> => {
    const users = await userModel.find({}, 'username');
    return users as IUser[];
};

export const registerServiceHandler = async (userData: {
    username: string;
    password: string;
    role: string;
}): Promise<IUser> => {
    const { username, password, role } = userData;
    const user = new userModel({ username, password, role });
    await user.save();

    return user as IUser;
};
