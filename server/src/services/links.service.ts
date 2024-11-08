import linkModel from '../models/links.model';
import { ILink } from '../interfaces/link.interface';

export const createLinkServiceHandler = async ({ link, image }): Promise<ILink> => {
    try {
        const linkDoc = new linkModel({ link, image });
        await linkDoc.save();

        return linkDoc as unknown as ILink;
    } catch (err) {
        return err;
    }
};

export const deleteLinkServiceHandler = async (id: string): Promise<ILink> => {
    try {
        const link = await linkModel.findByIdAndDelete(id);
        return link as unknown as ILink;
    } catch (err) {
        return err;
    }
};

export const getLinksServiceHandler = async (filters: {
    page: number;
    min: number;
    max: number;
    dateFrom: Date;
    dateTo: Date;
}): Promise<ILink[]> => {
    try {
        const { page = undefined, min: purchasesLower = 0, max: purchasesHigh = '1000', dateFrom, dateTo } = filters;

        const links = await linkModel
            .find({
                purchases: { $gte: +purchasesLower, $lte: +purchasesHigh },

                // createdAt: { $gte: dateFrom, $lte: dateTo },
            })
            .limit(8)
            .skip((page - 1) * 8);
        return links as unknown as ILink[];
    } catch (err) {
        return err;
    }
};

// this route is`nt used in the frontend
export const getHighestPurchasesServiceHandler = async (): Promise<ILink[]> => {
    try {
        const links = await linkModel.find().sort({ purchases: -1 }).limit(3);
        return links as unknown as ILink[];
    } catch (err) {
        return err;
    }
};

export const getPagesServiceHandler = async () => {
    try {
        const linksPerPage = 8;
        const linksCount = await linkModel.countDocuments();
        const pages = Math.ceil(linksCount / linksPerPage);
        return pages;
    } catch (err) {
        return err;
    }
};
export const purchaseServiceHandler = async (link: string, customerID: string): Promise<ILink> => {
    try {
        const linkDoc = await linkModel.updateOne(
            { link },
            {
                $inc: { purchases: 1 },

                $addToSet: { customers: customerID },
            },
            { new: true }
        );

        if (linkDoc.modifiedCount === 0) {
            const linkDoc = await linkModel.findOneAndUpdate(
                { link: 'https://thelosttreasures.net/?default' },
                {
                    $inc: { purchases: 1 },
                    $addToSet: { customers: customerID },
                },
                { new: true }
            );
            return linkDoc as unknown as ILink;
        }
        return linkDoc as unknown as ILink;
    } catch (err) {
        return err;
    }
};

export const editLinkServiceHandler = async (
    id: string,
    { link, image }: { link: string; image: string }
): Promise<ILink> => {
    try {
        const linkDoc = await linkModel.findOneAndUpdate({ _id: id }, { link, image }, { new: true });
        return linkDoc as unknown as ILink;
    } catch (err) {
        return err;
    }
};
