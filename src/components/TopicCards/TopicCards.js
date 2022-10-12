import React from 'react';
import { Link } from 'react-router-dom';

const TopicCards = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className='border border-black max-w-sm rounded overflow-hidden shadow-lg bg-blue-300 m-2'>
            <img className="w-full" src={logo} alt="Sunset in the mountains"></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    Questions: {total}
                </p>
            </div>
            <div className='bg-white p-2'>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link to={`/quiz/${id}`}>Take the quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default TopicCards;