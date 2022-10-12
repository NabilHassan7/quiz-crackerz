import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className=' text-black font-bold text-5xl p-5'>
                Error 404
            </h1>
            <h1 className=' text-black font-bold text-5xl p-5'>
                Page not found!
            </h1>
            <p className=' font-semibold p-5'>
                Looks like an error has occured!
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 p-4 mt-2 rounded">
                <Link to='/home'>Go back to Homepage</Link>
            </button>
        </div>
    );
};

export default ErrorPage;