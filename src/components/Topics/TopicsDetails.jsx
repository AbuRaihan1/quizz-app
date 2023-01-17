import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import SingleTopics from "./SingleTopics";
import "./Topics.css";

import RightAns from "../../UserAnswers/RightAns";
import WrongAns from "../../UserAnswers/WrongAns";
const TopicsDetails = () => {
  const topicsDetailsData = useLoaderData();
  const topicsDetails = topicsDetailsData.data;
  const questionsData = topicsDetails.questions;

  const [rightAns, setRightAns] = useState([]);
  const [wrongAns, setWrongAns] = useState([]);
  let lastItemRight = rightAns[rightAns.length - 1];
  let lastItemWrong = wrongAns[wrongAns.length - 1];

  const handleSubmitQuestion = (questions, selectOption) => {
    const correctAnswer = questions.correctAnswer;
    if (correctAnswer === selectOption) {
      if (lastItemRight === selectOption) {
        return;
      }
      let newAns = [];
      if (rightAns) {
        newAns = [...rightAns, selectOption];
      } else {
        newAns = [selectOption];
      }
      setRightAns(newAns);

      // let options = document.querySelectorAll(".option");
      // for (const option of options) {
      //   option.addEventListener("click", function () {
      //     this.classList.add('userRightAns');
      //     this.setAttribute("disabled", true);
      //   });
      // }
      toast.success("Your Answer Is Correct", {
        autoClose: 500,
        position: "top-center",
      });
    } else {
      if (lastItemWrong === selectOption) {
        return;
      }
      let newAns = [];
      if (wrongAns) {
        newAns = [...wrongAns, selectOption];
      } else {
        newAns = [selectOption];
      }
      setWrongAns(newAns);

      toast.error("oops! Wrong Answer", {
        autoClose: 500,
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <h2
        style={{
          position: "sticky",
          top: "0px",
          padding: "10px",
          background: "white",
          zIndex: "1",
        }}
      >
        Here is a Question About{" "}
        <span style={{ color: "#ff5200" }}>{topicsDetails.name}</span>
      </h2>
      <div className="detailsWrapper">
        <div className="wrongQuestionArea">
          <WrongAns wrongAns={wrongAns} setWrongAns={setWrongAns}></WrongAns>
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
          <RightAns rightAns={rightAns} setRightAns={setRightAns}></RightAns>
        </div>
      </div>
    </div>
  );
};

export default TopicsDetails;
