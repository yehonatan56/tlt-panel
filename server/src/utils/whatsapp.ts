import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import logger from './logger';

const client = new Client({});

// client.on('ready', async () => {
//     logger.info('', 'Client is ready!');
// });
//
// client.on('qr', (qr) => {
//     qrcode.generate(qr, { small: true });
// });

export const connectClient = () => {
    return new Promise<void>((resolve, reject) => {
        client.on('ready', () => {
            logger.info('', 'Client is ready!');
            resolve();
        });

        client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true });
        });

        client.initialize();
    });
};
export default client;
