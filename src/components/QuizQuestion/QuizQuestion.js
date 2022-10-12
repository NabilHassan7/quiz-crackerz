import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizQuestion = ({quizQuestion}) => {
    const {question, options, correctAnswer} = quizQuestion;
    const checkAnswer = (event, answer) => {
        if(answer === correctAnswer){
            // console.log("true");
            correct();
        }
        else{
            wrong()
        }
    }
    
    const correct = () => { 
        toast.success("You have selected the correct answer!", {
          position: toast.POSITION.TOP_CENTER
        });
    }

    const wrong = () => { 
        toast.error("You have selected the wrong answer !", {
          position: toast.POSITION.TOP_CENTER
        });
    }

    const showAnswer = () => { 
        toast.info(`The correct answer is: "${correctAnswer}"`, {
          position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div className='flex flex-col mt-10 border border-red-500 p-4 mx-10'>
            <div className='border border-green-400 p-4'>
                <h1 className=' font-bold text-2xl'>
                    {question}
                </h1>
            </div>
            <div className='flex justify-center items-center p-2'>
                <div onClick={() => showAnswer()}>
                    <EyeIcon className="h-6 w-6 text-blue-500"/>
                </div>
            </div>
            <div>
                <div className='flex flex-col'>
                    <div onClick={event => checkAnswer(event, options[0])} class=" w-full flex justify-center items-center mb-4 border border-green-400 p-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="default-radio-1" class="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-300">{options[0]}</label>
                    </div>
                    <div onClick={event => checkAnswer(event, options[1])} class=" w-full flex justify-center items-center mb-4 border border-green-400 p-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="default-radio-1" class="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-300">{options[1]}</label>
                    </div>
                    <div onClick={event => checkAnswer(event, options[2])} class=" w-full flex justify-center items-center mb-4 border border-green-400 p-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="default-radio-1" class="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-300">{options[2]}</label>
                    </div>
                    <div onClick={event => checkAnswer(event, options[3])} class=" w-full flex justify-center items-center mb-4 border border-green-400 p-2">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                        dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="default-radio-1" class="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-300">{options[3]}</label>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizQuestion;