// @ts-ignore
import path from 'path';
import { NODE_ENV } from './utils/enviromment-varibals';

const envPath = (): string => {
    switch (NODE_ENV) {
        case 'local':
        case 'localhost':
        case undefined:
        case '':
            return '.env.local';

        case 'test':
            return '.env.test';

        default:
            return '.env';
    }
};
export const PUBLIC_PATH = path.join(__dirname, '..', 'public');

export const ENV_PATH = path.join(__dirname, '..', envPath());
console.log(PUBLIC_PATH);
