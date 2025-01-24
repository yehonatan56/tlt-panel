export type user = {
  username: string;
  password: string;
};
export type params = {
  page?: number;
  min?: number;
  max?: number;
  dateFrom?: string;
  dateTo?: string;
};

export type level = {
  _id?: string;
  name: string;
  image?: any;
  index?: number;
};

export type question = {
  _id?: string;
  level: string;
  title: string;
  correctAnswer: string;
  incorrectAnswer1: string;
  incorrectAnswer2: string;
  incorrectAnswer3: string;
  image?: string;
};
