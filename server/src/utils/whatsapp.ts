import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { SESSIONS_PATH } from '../paths';

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: SESSIONS_PATH,
    }),
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('message', (message) => {
    console.log(message.body);
});

client.initialize().then(() => console.log('Client is ready'));
export default client;
