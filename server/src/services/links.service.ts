import linkModel from "../models/links.model";

export const createLinkServiceHandler = async ({ link, image }) => {
  try {
    const linkDoc = new linkModel({
      link,
      image,
    });

    await linkDoc.save();
    return linkDoc;
  } catch (err) {
    return err;
  }
};

export const deleteLinkServiceHandler = async (id) => {
  try {
    const link = await linkModel.findByIdAndDelete(id);
    return link;
  } catch (err) {
    return err;
  }
};

export const getLinksServiceHandler = async (filters) => {
  try {
    const {
      page = undefined,
      min: purchasesLower = 0,
      max: purchasesHigh = "1000",
      dateFrom,
      dateTo,
    } = filters;

    const links = await linkModel
      .find({
        purchases: { $gte: +purchasesLower, $lte: +purchasesHigh },

        // createdAt: { $gte: dateFrom, $lte: dateTo },
      })
      .limit(8)
      .skip((page - 1) * 8);

    return links;
  } catch (err) {
    return err;
  }
};

// this route is`nt used in the frontend
export const getHighestPurchasesServiceHandler = async () => {
  try {
    const links = await linkModel.find().sort({ purchases: -1 }).limit(3);
    return links;
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
export const purchaseServiceHandler = async (link, customerID: string) => {
  try {
    const linkDoc = await linkModel.updateOne(
      { link },
      {
        $inc: { purchases: 1 },

        $addToSet: { customers: customerID },
      },
      { new: true },
    );

    return linkDoc;
  } catch (err) {
    return err;
  }
};

export const editLinkServiceHandler = async (id, { link, image }) => {
  try {
    const linkDoc = await linkModel.findOneAndUpdate(
      { _id: id },
      { link, image },
      { new: true },
    );
    return linkDoc;
  } catch (err) {
    return err;
  }
};
