import React from 'react';

const Blogs = () => {
    return (
        <div className='my-20'>
            <div className=' grid grid-cols-1 gap-2'>
                <div className=' border-8 border-orange-200 mx-10 p-4'>
                    <h1 className=' text-3xl font-bold'>
                        Blog: 3 Important Questions
                    </h1>
                </div>
                <div className=' border-2 border-orange-200 mx-10'>
                    <div className=' border border-emerald-200 p-2 m-2 grid grid-cols-1'>
                        <h1 className=' text-2xl font-bold text-left m-2'>
                            Q1. What is the purpose of React Router?
                        </h1>
                    </div>
                    <div className=' border border-emerald-200 p-2 m-2 grid grid-cols-1'>
                        <h1 className=' font-2xl font-bold text-left m-2'>
                            ReactJS Router is mainly used for developing Single Page Web Applications. 
                            React Router is used to define multiple routes in the application. 
                            When a user types a specific URL into the browser, and if this URL path matches any 'route' 
                            inside the router file, the user will be redirected to that particular route.
                        </h1>
                    </div>
                </div>
                <div className=' border-2 border-orange-200 mx-10'>
                    <div className=' border border-emerald-200 p-2 m-2 grid grid-cols-1'>
                        <h1 className=' text-2xl font-bold text-left m-2'>
                            Q2. What is context API?
                        </h1>
                    </div>
                    <div className=' border border-emerald-200 p-2 m-2 grid grid-cols-1'>
                        <h1 className=' font-2xl font-bold text-left m-2'>
                        The React Context API is a way for a React app to effectively produce global 
                        variables that can be passed around. 
                        This is the alternative to "prop drilling" or moving props from grandparent to child to 
                        parent, and so on. Context is also touted as an easier, 
                        lighter approach to state management using Redux.
                        </h1>
                    </div>
                </div><div className=' border-2 border-orange-200 mx-10'>
                    <div className=' border border-emerald-200 p-2 m-2 grid grid-cols-1'>
                        <h1 className=' text-2xl font-bold text-left m-2'>
                            Q3. What is the use of hook <span className=' text-red-500'>useRef()</span> ?
                        </h1>
                    </div>
                    <div className=' border border-emerald-200 p-2 m-2 grid grid-cols-1'>
                        <h1 className=' font-2xl font-bold text-left m-2'>
                        <span className=' text-red-500'>useRef()</span> returns a mutable ref object whose .current property is initialized to the 
                        passed argument (initialValue). 
                        The returned object will persist for the full lifetime of the component.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;