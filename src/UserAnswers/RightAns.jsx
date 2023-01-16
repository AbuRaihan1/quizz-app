import React from "react";
import "./UserAns.css";
const RightAns = ({ rightAns }) => {
  let selectRightAns;
  let selectRightBody;
  if (!rightAns.length) {
    selectRightAns = <p className="defaultAnswering">No Answer Selected</p>;
  } else {
    selectRightBody = rightAns.map((singleRight, idx) => (
      <li key={idx}>{singleRight}</li>
    ));
  }
  return (
    <div className="rightAnsWrapper">
      <h2>Your Right Answers : <span> {rightAns.length}</span></h2>
      <div className="singelItemRightAns">
        {selectRightAns}
        {selectRightBody}
        </div>
    </div>
  );
};

export default RightAns;
