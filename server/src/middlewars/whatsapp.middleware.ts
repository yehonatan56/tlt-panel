import { TOKEN, WHATSAPP_GROUP_ID } from '../utils/enviromment-varibals';
import convertPhone from '../functions/convertPhone';
export const whatsappMW = async (req, _res, next) => {
//     ?const message = ` new purchase:
//     name: ${req.body.firstName} ${req.body.lastName}
//     phone: ${req.body.phone}
//     email: ${req.body.email}
//     address: ${req.body.address}
//     city: ${req.body.city}
//     pickup method: ${req.body.pickupMethod}
//     `;
//
//     const messageToCustomer = ` היי ${req.body.firstName} ${req.body.lastName},
//     קיבלנו את ההזמנה שלך, נטפל בה בהקדם האפשרי.
//     יש לנו קבוצת וואטסאפ שקטה ללקוחות, תוכל להצטרף ולקבל עדכונים ומבצעים מיוחדים.
//     להצטרפות לחץ על הקישור הבא:
// https://chat.whatsapp.com/LEtTIFqBZQtE8JCMUJEBfg
//     תודה רבה,
//     לפניות  נוספות ניתן לפנות אלינו בטלפון: 055-315-1517
//     `;
//     fetch('https://gate.whapi.cloud/messages/text', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             Authorization: 'Bearer ' + TOKEN,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             typing_time: 0,
//             to: WHATSAPP_GROUP_ID,
//             body: message,
//         }),
//     })
//         .then((response) => response.json())
//         .then((data) => console.log('Success:', data))
//         .catch((error) => console.error('Error:', error));

    /*    fetch('https://gate.whapi.cloud/messages/text', {
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
*/
    next();
};
