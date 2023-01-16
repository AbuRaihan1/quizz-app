import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-toastify";
const SingleTopics = ({ questions, handleSubmitQuestion }) => {
  console.log(questions);

  const showAns = (correctAnswer) => {
    toast.info("Right Ans is: " + correctAnswer, {
      autoClose: 2000,
      position: "top-center",
      pauseOnFocusLoss: false,
    });
  };
  return (
    <div>
      <div className="singleQuestion" key={questions.id}>
        <div className="question-eye">
          {" "}
          <h4>{questions.question}</h4>{" "}
          <span title="show ans">
            <EyeIcon onClick={() => showAns(questions.correctAnswer)} />
          </span>
        </div>
        {questions.options.map((option, idx) => (
          <div key={idx}>
            <div
              className="option"
              onClick={() => handleSubmitQuestion(questions, option)}
            >
              <p>{option}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleTopics;
