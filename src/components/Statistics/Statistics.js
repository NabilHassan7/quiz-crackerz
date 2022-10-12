import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    // Loading the passed data
    const stats = useLoaderData();
    
    return (
        <div className='mt-20'>
            <div>
                <h1 className=' text-orange-400 font-semibold text-1xl mb-10'>
                    The following chart shows the number of questions in each category:
                </h1>
            </div>
            <div style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer width="99%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={stats.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;