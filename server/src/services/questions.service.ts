import { IQuestion } from '../interfaces/question.interface';
import questionsModel from '../models/questions.model';
import levelsModel from '../models/levels.model';

export const getQuestionsServiceHandler = async (levelID: string): Promise<IQuestion[]> => {
    return questionsModel.find({ level: levelID });
};

export const addQuestionServiceHandler = async (question: IQuestion): Promise<string> => {
    const questionDoc = new questionsModel(question);
    await questionDoc.save();
    return questionDoc._id.toString();
};
