import React, { useContext } from "react";
import { TopicsContext } from "../../layout/Main";
import Topic from "./Topic";
import "./Topics.css";

const Topics = () => {
  const topicsData = useContext(TopicsContext);
  return (
    <div className="mainWrapTotal">
      {topicsData.map((topic) => (
        <Topic topic={topic} key={topic.id}></Topic>
      ))}
    </div>
  );
};

export default Topics;
