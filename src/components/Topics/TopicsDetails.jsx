import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleTopics from "./SingleTopics";
import "./Topics.css";
const TopicsDetails = () => {
  const topicsDetailsData = useLoaderData();
  const topicsDetails = topicsDetailsData.data;
  const questionsData = topicsDetails.questions;

  const handleSubmitQuestion = (questions, selectOption) => {
    const correctAnswer = questions.correctAnswer;
    if (correctAnswer === selectOption) {
      let options = document.querySelectorAll(".option");
      console.log("correct answer");
    } else {
      console.log("wrong ans");
    }
  };

  return (
    <div>
      <h2>
        Here is a Question About{" "}
        <span style={{ color: "#ff5200" }}>{topicsDetails.name}</span>
      </h2>
      <div className="detailsWrapper">
        <div className="wrongQuestionArea">
          <h2>Wrong Ansers</h2>
        </div>
        <div className="questionQuestionArea">
          {questionsData.map((questions) => (
            <SingleTopics
              questions={questions}
              key={questions.id}
              handleSubmitQuestion={handleSubmitQuestion}
            ></SingleTopics>
          ))}
        </div>
        <div className="rightQuestionArea">
          <h2>Right Answers</h2>
        </div>
      </div>
    </div>
  );
};

export default TopicsDetails;
