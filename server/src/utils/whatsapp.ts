import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client({});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('message', (message) => {
    console.log(message.body);
});

client.initialize();

export default client;
