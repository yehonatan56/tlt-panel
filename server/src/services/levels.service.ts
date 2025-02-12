import { ILevel } from '../interfaces/level.interface';
import levelsModel from '../models/levels.model';

export const getLevelsServiceHandler = async (): Promise<ILevel[]> => {
    // todo: return data sorted by createdAt field to getting data instead of using index field
    // const levels = await levelsModel.find({}).sort({ createdAt: 1 });
    const levels = await levelsModel.find({});
    return levels;
};

export const addLevelServiceHandler = async (level: ILevel): Promise<string> => {
    if (!level.index) {
        // todo: check how to get count instead of getting all db collection data, like the following line
        // const levels = await levelsModel.find({}).countDocuments();
        const levels = await levelsModel.find({});
        level.index = levels.length + 1;
    }
    const levelDoc = new levelsModel(level);
    await levelDoc.save();
    return levelDoc._id.toString();
};
