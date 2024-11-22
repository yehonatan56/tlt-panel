import path from 'path';
import { NODE_ENV } from './utils/enviromment-varibals';

const envPath = (): string => {
    if (['local', 'localhost', undefined, ''].includes(NODE_ENV)) {
        return '.env.local';
    } else if (NODE_ENV === 'test') {
        return '.env.test';
    }
    return '.env';
};
export const PUBLIC_PATH = path.join(__dirname, '..', 'public');

export const ENV_PATH = path.join(__dirname, '..', envPath());
console.log(PUBLIC_PATH);
