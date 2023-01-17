import React, { useContext } from "react";
import { TopicsContext } from "../../layout/Main";
import Topic from "./Topic";
import "./Topics.css";
// import coverImg from "../../../src/quiz.jpg";
const Topics = () => {
  const topicsData = useContext(TopicsContext);
  return (
    <>
      {/* <img src={coverImg} alt="" width={"70%"} height={'400'}/> */}
      <div className="mainWrapTotal">
        {topicsData.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </>
  );
};

export default Topics;
