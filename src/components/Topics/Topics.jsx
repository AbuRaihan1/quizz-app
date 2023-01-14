import React, { useContext } from 'react';
import { TopicsContext } from '../../layout/Main';
import './Topics.css';

const Topics = () => {
    const topicsData = useContext(TopicsContext);
    return (
        <div className='mainWrapTotal'>
            {
                topicsData.map(topic => <div key={topic.id}>
                    
                   <div className='topicsWrapper'>
                      <img src={topic.logo} alt="" />
                      <div className='topicDesc'>
                        <h3>{topic.name}</h3>
                        <p>{topic.total}</p>
                      </div>
                      <button>Show Details</button>
                   </div>
                </div>)
            }
        </div>
    );
};

export default Topics;