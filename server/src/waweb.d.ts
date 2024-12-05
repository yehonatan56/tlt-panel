declare namespace WAWebJS {
    class Client {
        constructor(options: any);

        requestPairingCode(phoneNumber: string, showNotification: boolean): Promise<string>;
    }
}
