import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            {/* Default component that wiil be displayed in all pages */}
            <Navbar></Navbar>
            {/* Creating outlet for the purpose of nested routing */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;