import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client({
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html',
    },
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('message', (message) => {
    console.log(message.body);
});

client.initialize().then((r) => console.log('Whatsapp client initialized'));

export default client;
