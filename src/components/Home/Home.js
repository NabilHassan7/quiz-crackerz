import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import TopicCards from '../TopicCards/TopicCards';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <div>
            <Header></Header>
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

export default Home;