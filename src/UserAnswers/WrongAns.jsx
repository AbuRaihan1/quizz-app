import React from "react";
import "./UserAns.css";
const WrongAns = ({ wrongAns, setWrongAns }) => {
  let selectWrongAns;
  let selectWrongBody;

  if (!wrongAns.length) {
    selectWrongAns = <p className="defaultAnswering">No Answer Selected</p>;
  } else {
    selectWrongBody = wrongAns.map((singleRight, idx) => (
      <li key={idx}>{singleRight}</li>
    ));
  }

  return (
    <div className="rightAnsWrapper" id="wrongANsWrapper">
      <h2>Your Wrong Answers</h2>
      <div className="singelItemRightAns singelItemWrongAns">
        {selectWrongAns}
        {selectWrongBody}
      </div>
    </div>
  );
};

export default WrongAns;
