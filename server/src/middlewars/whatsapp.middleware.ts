import { TOKEN, WHATSAPP_GROUP_ID } from '../utils/enviromment-varibals';

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
    fetch('https://gate.whapi.cloud/messages/text', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            typing_time: 0,
            to: WHATSAPP_GROUP_ID,
            body: message,
        }),
    })
        .then((response) => response.json())
        .then((data) => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));

    next();
};

// AIzaSyCnKLU5Pl8mbjO1kdvHQ1op22IdV3ketZ0
