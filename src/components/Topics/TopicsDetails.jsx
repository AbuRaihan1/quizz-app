import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopics from './SingleTopics';

const TopicsDetails = () => {
    const topicsDetailsData = useLoaderData();
    const topicsDetails = topicsDetailsData.data;
    const questionsData = topicsDetails.questions;
    
    return (
        <div>
            <h2>Here is a Question About <span style={{color : '#ff5200'}}>{topicsDetails.name}</span></h2>
             <div className="detailsWrapper">
                <div className="wrongQuestionArea"></div>
                <div className="questionQuestionArea">
                   {
                    questionsData.map(questions => <SingleTopics questions={questions} key={questions.id}></SingleTopics>)
                   }
                </div>
                <div className="rightQuestionArea"></div>
             </div>
        </div>
    );
};

export default TopicsDetails;