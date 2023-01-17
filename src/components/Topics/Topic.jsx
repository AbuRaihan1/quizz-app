import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { logo, name, total, id } = topic;
  return (
    <div>
      <div className="topicsWrapper">
        <img src={logo} alt="" />
        <div className="topicDesc">
          <h3>{name}</h3>
          <p>
            <strong>{total}</strong> Questions
          </p>
        </div>

        <Link to={`/topic/${id}`}>
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
