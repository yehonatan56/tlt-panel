import PickupModel from '../models/pickup.model';
import { IPickup } from '../interfaces/pickup.interface';

export const acceptPickupServiceHandler = async (pickupId: string) =>
    (await PickupModel.updateOne({ _id: pickupId }, { taken: true })) as unknown as IPickup;
