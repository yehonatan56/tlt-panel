export default function convertPhone(phone: string): string {
    if (phone.startsWith('0')) {
        return `972${phone.slice(1)}`;
    }
    if (phone.startsWith('+972')) {
        return phone.slice(1);
    }
    if (phone.includes('-')) {
        return phone.split('-').join('');
    }
    return phone;
}
