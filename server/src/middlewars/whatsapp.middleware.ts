import { WHATSAPP_GROUP_ID } from '../utils/enviromment-varibals';
import client from '../utils/whatsapp';

export const whatsappMW = async (req, _res, next) => {
    const message = `
    new purchase:
    name: ${req.body.firstName} ${req.body.lastName}
    phone: ${req.body.phone}
    email: ${req.body.email}
    address: ${req.body.address}
    city: ${req.body.city}
    pickup method: ${req.body.pickupMethod}
    `;
    console.log('SHOSHANA');
    client
        .sendMessage(WHATSAPP_GROUP_ID, message)
        .then(() => {
            console.log('Message sent');
        })
        .catch((err) => {
            console.log('Error sending message', err);
        });

    next();
};
