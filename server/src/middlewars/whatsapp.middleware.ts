import { TOKEN, WHATSAPP_GROUP_ID, WHATSAPP_GROUP_ID_COMMUNITY } from '../utils/enviromment-varibals';
import convertPhone from '../functions/convertPhone';
import { createVerify } from 'node:crypto';

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

    const messageToCustomer = `
    היי ${req.body.firstName} ${req.body.lastName},
    קיבלנו את ההזמנה שלך, נטפל בה בהקדם האפשרי.
    צירפנו אותך לקבוצת הוואטסאפ שלנו, כדי לקבל עדכונים והצעות מיוחדות.
    אם אתה רוצה להסיר את עצמך מהקבוצה, תוכל לעשות זאת בכל עת.
    `;
    // fetch('https://gate.whapi.cloud/messages/text', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         Authorization: 'Bearer ' + TOKEN,
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         typing_time: 0,
    //         to: WHATSAPP_GROUP_ID,
    //         body: message,
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => console.log('Success:', data))
    //     .catch((error) => console.error('Error:', error));

    fetch(`https://gate.whapi.cloud/groups/${WHATSAPP_GROUP_ID_COMMUNITY}/participants`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ participants: [convertPhone(req.body.phone)] }), // Adjust slicing if needed
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => console.log('Success:', data))
        .catch((error) => console.log('Error:', error));

    fetch('https://gate.whapi.cloud/messages/text', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            typing_time: 0,
            to: convertPhone(req.body.phone) + '@c.us',
            body: messageToCustomer,
        }),
    });

    next();
};

// AIzaSyCnKLU5Pl8mbjO1kdvHQ1op22IdV3ketZ0
