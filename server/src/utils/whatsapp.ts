// const { Client } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// @ts-ignore
import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import logger from './logger';

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on('ready', async () => {
    logger.info('', 'Client is ready!');
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.initialize();

export default client;
