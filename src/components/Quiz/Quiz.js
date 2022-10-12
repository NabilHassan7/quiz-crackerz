import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const quizQuestions = useLoaderData().data.questions;
    console.log(quizQuestions);
    // console.log(quizQuestions);
    return (
        <div>
            <div>{quiz.name}</div>
        </div>
    );
};

export default Quiz;