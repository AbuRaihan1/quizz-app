import React, { useContext } from "react";
import { TopicsContext } from "../../layout/Main";
import "./Staticties.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Staticties = () => {
  const loadTopicsData = useContext(TopicsContext);
  const topicBarData = loadTopicsData.map((topic) => {
    const singleTopic = {
      name: topic.name,
      question: topic.total,
    };
    return singleTopic;
  });
  return (
    <div className="question">
      <h2>staticties</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={topicBarData}>
          <XAxis dataKey="name" />
          <YAxis dataKey="question" />
          <Legend />
          <Bar dataKey="question" fill="#ff5200" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Staticties;
