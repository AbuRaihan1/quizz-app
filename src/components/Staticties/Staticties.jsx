import React, { useContext, } from "react";
import { TopicsContext } from "../../layout/Main";
import "./Staticties.css";
import { BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

const Staticties = () => {
  const loadTopicsData = useContext(TopicsContext);
  const topicBarData = loadTopicsData.map((topic) => {
    const singleTopic = {
      name: topic.name,
      question: topic.total,
    };
    return singleTopic;
  });
  console.log(topicBarData);

  return (
    <div>
      <h2>staticties</h2>
      <BarChart
        width={500}
        height={300}
        data={topicBarData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="question" />
        <Legend />

        {/* <Bar dataKey="name" fill="#ff5200" /> */}
        <Bar dataKey="question" fill="#ff5200" />
      </BarChart>
    </div>
  );
};

export default Staticties;
