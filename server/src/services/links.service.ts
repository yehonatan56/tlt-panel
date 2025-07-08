import linkModel from '../models/links.model';
import { ILink } from '../interfaces/link.interface';

export const createLinkServiceHandler = async ({ link, image }): Promise<ILink> => {
    const linkDoc = new linkModel({ link, image });
    await linkDoc.save();

    return linkDoc as unknown as ILink;
};

export const deleteLinkServiceHandler = async (id: string): Promise<ILink> => {
    const link = await linkModel.findByIdAndDelete(id);

    return link as unknown as ILink;
};

export const getLinksServiceHandler = async (
    filters: Partial<{
        page: number;
        min: string;
        max: string;
        dateFrom: string;
        dateTo: string;
    }>
): Promise<ILink[]> => {
    const { page = undefined, min: purchasesLower = 0, max: purchasesHigh = '1000', dateFrom, dateTo } = filters;

    const links = await linkModel
        .find({
            purchases: { $gte: +purchasesLower, $lte: +purchasesHigh },
            // createdAt: { $gte: dateFrom, $lte: dateTo },
        })
        .limit(8)
        .skip((page - 1) * 8);

    return links as unknown as ILink[];
};

// this route is`nt used in the frontend
export const getHighestPurchasesServiceHandler = async (): Promise<ILink[]> => {
    const links = await linkModel.find().sort({ purchases: -1 }).limit(3);
    return links as unknown as ILink[];
};

export const getPagesServiceHandler = async (): Promise<number> => {
    const linksPerPage = 8;
    const linksCount = await linkModel.countDocuments();
    const pages = Math.ceil(linksCount / linksPerPage);
    return pages;
};

export const purchaseServiceHandler = async (link: string, customerID: string): Promise<ILink> => {
    console.log(`Purchasing link: ${link} for customer ID: ${customerID}`);
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
};

export const editLinkServiceHandler = async (
    id: string,
    { link, image }: { link: string; image: string }
): Promise<ILink> => {
    const linkDoc = await linkModel.findOneAndUpdate({ _id: id }, { link, image }, { new: true });

    return linkDoc as unknown as ILink;
};
