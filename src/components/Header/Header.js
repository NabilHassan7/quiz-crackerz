import React from 'react';
import headerImage from '../../assets/header-image.jpg';

const Header = () => {
    return (
        <div className='my-20'>
            <div class=" mx-10 grid overflow-hidden md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-2 gap-2">
                <div class="box md:col-start-1 md:col-end-3 border rounded-lg">
                    <img className=' object-cover' src={headerImage} alt="headerImage" />
                </div>
                <div class="  flex flex-col justify-center items-center md:col-start-3 md:col-end-5 text-black border border-purple-700 rounded-lg">
                    <div className=' flex flex-col justify-center items-center text-purple-400 italic'>
                        <div className=''>
                            <div className=' text-center font-bold p-3 text-3xl xl:text-6xl'>
                                Test
                            </div>
                            <div className=' text-center font-bold p-3 text-3xl xl:text-6xl'>
                                Your
                            </div>
                            <div className=' text-center font-bold p-3 text-3xl xl:text-6xl'>
                                Knowledge
                            </div>
                            <div className=' text-center font-bold p-3 text-3xl xl:text-6xl'>
                                Today!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;