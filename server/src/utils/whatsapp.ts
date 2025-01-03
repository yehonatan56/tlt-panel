import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import logger from './logger';

const client = new Client({});

client.on('ready', async () => {
    logger.info('', 'Client is ready!');
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

export default client;
