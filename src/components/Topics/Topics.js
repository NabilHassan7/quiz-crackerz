import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCards from '../TopicCards/TopicCards';

const Topics = () => {
    const topics = useLoaderData().data;
    return (
        <div className='mt-20'>
           <div className='grid grid-cols-1 grid-rows-4 sm:grid-cols-4 sm:grid-rows-1 mx-10'>
                {
                    topics.map(topic => <TopicCards
                        key = {topic.id}
                        topic={topic}
                    ></TopicCards>)
                }
            </div> 
        </div>
    );
};

export default Topics;