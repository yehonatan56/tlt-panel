// const { Client } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// @ts-ignore
import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client({});

client.on('ready', async () => {
    console.log('Client is ready!');
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.initialize();

export default client;
