import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const quizQuestions = useLoaderData().data.questions;
    console.log(quiz);
    console.log(quizQuestions);
    return (
        <div className='mt-20'>
            <div className=' mb-10 text-blue-600 font-bold text-4xl'>
                Quiz of {quiz.name}
            </div>
            <div className='flex flex-col gap-2'>
                {
                    quizQuestions.map(quizQuestion => <QuizQuestion
                        id = {quizQuestion.id}
                        quizQuestion = {quizQuestion}
                    ></QuizQuestion>)
                }
            </div>
        </div>
    );
};

export default Quiz;