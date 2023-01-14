import React from 'react';

const SingleTopics = ({questions}) => {
 
    return (
        <div>
          <div className='singleQuestion' key={questions.id}>
            <h4>{questions.question}</h4>
            {
              questions.options.map((option, idx) =>  <div key={idx}>
                <div className='option'>
                  <p>{option}</p>
                </div>
              </div>)
            }
          </div>
        </div>
    );
};

export default SingleTopics;