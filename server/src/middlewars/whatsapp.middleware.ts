import client from '../utils/whatsapp.js';
import { WHATSAPP_GROUP_ID } from '../utils/enviromment-varibals';

export const whatsappMW = async (req, res, next) => {
    const message = `
    new purchase:
    name: ${req.body.firstName} ${req.body.lastName}
    phone: ${req.body.phone}
    email: ${req.body.email}
    address: ${req.body.address}
    city: ${req.body.city}
    pickup method: ${req.body.pickupMethod}
    `;
    await client.sendMessage(WHATSAPP_GROUP_ID, message);

    next();
};
