import { ILevel } from '../interfaces/level.interface';
import levelsModel from '../models/levels.model';

export const getLevelsServiceHandler = async (): Promise<ILevel[]> => {
    const levels = await levelsModel.find({});
    return levels;
};

export const addLevelServiceHandler = async (level: ILevel): Promise<string> => {
    if (!level.index) {
        const levels = await levelsModel.find({});
        level.index = levels.length + 1;
    }
    const levelDoc = new levelsModel(level);
    await levelDoc.save();
    return levelDoc._id.toString();
};
