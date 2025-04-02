export interface IPickup {
    customer: string;
    products: string[];
    taken: boolean;
    location: 'zefat' | 'rishon';
}
