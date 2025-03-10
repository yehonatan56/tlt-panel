import { useState, useEffect, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { level } from "../types.ts";
import { addLevel, getLevels } from "../requests/levels.ts";
import { useFilePreview } from "../hooks/useFilePreview.tsx";
import { addQuestionRequest, getQuestions } from "../requests/questions.ts";
import { question } from "../types.ts";
import { uploadFileRequest } from "../requests/links.ts";

interface IncorrectAnswers {
  incorrectAnswer1: string;
  incorrectAnswer2: string;
  incorrectAnswer3: string;
}
export default function Quiz() {
  const [levels, setLevels] = useState<level[]>([]);
  const [id, setId] = useState<string>("678fd0404ba05288015b2e50");
  const [levelName, setLevelName] = useState<string>("");
  const [levelImage, setLevelImage] = useState<File | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [questionImage, setQuestionImage] = useState<File | null>(null);
  const [questions, setQuestions] = useState<question[] | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswers>({
    incorrectAnswer1: "",
    incorrectAnswer2: "",
    incorrectAnswer3: "",
  });
  const [opened, { open, close }] = useDisclosure(false);
  const file = useRef<HTMLInputElement | null>(null);
  const questionFile = useRef<HTMLInputElement | null>(null);
  const preview = useFilePreview(levelImage);
  const questionPreview = useFilePreview(questionImage);

  const submitLevel = async () => {
    const uploadData = new FormData();
    uploadData.append("image", levelImage as Blob);
    const url = levelImage && (await uploadFileRequest(uploadData));
    const res = await addLevel({
      name: levelName,
      image: url ? url : undefined,
    });
    console.log(res);
    setLevelName("");
    setLevelImage(null);
    close();
  };
  const addQuestion = async (e: any) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("image", questionImage as Blob);
    const url = questionImage && (await uploadFileRequest(uploadData));

    const res = await addQuestionRequest({
      level: id,
      title: question,
      correctAnswer: correctAnswer,
      incorrectAnswer1: incorrectAnswers.incorrectAnswer1,
      incorrectAnswer2: incorrectAnswers.incorrectAnswer2,
      incorrectAnswer3: incorrectAnswers.incorrectAnswer3,
      image: url ? url : undefined,
    }).then((data) => data);
    console.log(res);
    setQuestion("");
    setCorrectAnswer("");
    setIncorrectAnswers({
      incorrectAnswer1: "",
      incorrectAnswer2: "",
      incorrectAnswer3: "",
    });

    setQuestionImage(null);
  };

  useEffect(() => {
    getLevels().then((data) => setLevels(data));
  }, []);

  useEffect(() => {
    getQuestions(id).then((data) => setQuestions(data));
  }, [id]);
  return (
    <div>
      <h1>Quiz</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className="quiz"
      >
        <div>
          <h2>Levels</h2>
          <ul>
            {levels.map((level) => (
              <li
                key={level._id}
                onClick={() => {
                  setId(level._id as string);
                }}
                style={{
                  transition: "all 0.3s ease", // Adds a transition effect to all properties
                  backgroundColor: level._id === id ? "skyblue" : "transparent",
                  border: level._id === id ? "1px solid black" : "none",
                  borderRadius: level._id === id ? "5px" : "0px",
                  padding: level._id === id ? "10px" : "5px", // Adjust padding if necessary
                }}
              >
                {level.name}
              </li>
            ))}
            {levels.length === 0 && <li>No levels found</li>}
          </ul>

          <Modal opened={opened} onClose={close} title="Add level">
            <div>
              <input
                placeholder="Level name"
                type="text"
                value={levelName}
                onChange={(e) => setLevelName(e.target.value)}
                style={{ width: "100%" }}
              />
              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                ref={file}
                onChange={(e) =>
                  setLevelImage(
                    e.currentTarget.files ? e.currentTarget.files[0] : null,
                  )
                }
              />
              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  style={{ width: "300px", height: "300px" }}
                />
              )}
              <Button onClick={() => submitLevel()}>Submit</Button>
            </div>
          </Modal>

          <Button variant="default" onClick={open}>
            Add level
          </Button>
        </div>
        <div>
          <h2>Add Question</h2>
          <form onSubmit={addQuestion}>
            <input
              placeholder="Question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={{ width: "100%" }}
            />
            <input
              placeholder="Correct answer"
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              style={{ width: "100%" }}
            />
            <input
              placeholder="Incorrect answer"
              type="text"
              value={incorrectAnswers.incorrectAnswer1}
              onChange={(e) =>
                setIncorrectAnswers({
                  ...incorrectAnswers,
                  incorrectAnswer1: e.target.value,
                })
              }
              style={{ width: "100%" }}
            />
            <input
              placeholder="Incorrect answer"
              type="text"
              value={incorrectAnswers.incorrectAnswer2}
              onChange={(e) =>
                setIncorrectAnswers({
                  ...incorrectAnswers,
                  incorrectAnswer2: e.target.value,
                })
              }
              style={{ width: "100%" }}
            />
            <input
              placeholder="Incorrect answer"
              type="text"
              value={incorrectAnswers.incorrectAnswer3}
              onChange={(e) =>
                setIncorrectAnswers({
                  ...incorrectAnswers,
                  incorrectAnswer3: e.target.value,
                })
              }
              style={{ width: "100%" }}
            />
            <input
              type="file"
              name="file"
              id="file"
              className="inputfile"
              ref={questionFile}
              onChange={(e) =>
                setQuestionImage(
                  e.currentTarget.files ? e.currentTarget.files[0] : null,
                )
              }
            />
            <input type="submit" value="Submit" />
          </form>
          {questionPreview && (
            <img
              src={questionPreview}
              alt="preview"
              style={{ width: "300px", height: "300px" }}
            />
          )}
        </div>
        <div>
          <h2>Questions</h2>
          <ul>
            {questions === null ? (
              <p>No questions found</p>
            ) : (
              questions.map((question) => (
                <li key={question._id}>{question.title}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
