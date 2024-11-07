import bcrypt from 'bcrypt';
// todo: schema function is not next of express , remove this NextFunction express from here!
import { NextFunction } from 'express';

const userHook = (schema) => {
    schema.pre('save', async function (next: NextFunction) {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 10);
        }

        next();
    });
};

export default userHook;
