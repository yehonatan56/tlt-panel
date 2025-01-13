import { ILevel } from '../interfaces/level.interface';
import levelsModel from '../models/levels.model';

export const getLevelsServiceHandler = async (): Promise<ILevel[]> => {
    return levelsModel.find({});
};

export const addLevelServiceHandler = async (level: ILevel): Promise<string> => {
    const levelDoc = new levelsModel(level);
    await levelDoc.save();
    return levelDoc._id.toString();
}
