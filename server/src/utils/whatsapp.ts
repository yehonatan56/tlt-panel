import { Client, LocalAuth } from 'whatsapp-web.js';
import { SESSIONS_PATH } from '../paths';

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: SESSIONS_PATH,
    }),
});

client.initialize().then(() => console.log('Client is ready'));
export default client;
