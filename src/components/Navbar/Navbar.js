import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import NavBarLinks from '../NavBarLinks/NavBarLinks';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Topics', path: '/home'},
        {id: 3, name: 'Statistics', path: '/statistics'},
        {id: 4, name: 'Blog', path: '/blog'}
    ]
    return (
        <nav className=' bg-purple-700 w-full'>
            
            {/* <span>{open ? 'open' : 'close'}</span> */}
            <div>
                <div className=' flex md:flex-row justify-between'>
                    <ul className={` p-3 bg-purple-700 md:flex w-full justify-end absolute md:static duration-500 ease-in ${!open ? 'top-6' : 'top-[-120px]'}`}>
                        {
                            routes.map(route => 
                                <NavBarLinks
                                    key = {route.id}
                                    route = {route}
                                ></NavBarLinks>
                            )
                        }
                    </ul>
                </div>
                <div onClick={()=>setOpen(!open)} className="h-8 w-8 md:hidden text-white">
                    {
                        !open ? <XMarkIcon/> : <Bars3Icon/> 
                    }
                </div>
            </div>
            <div className=' text-center text-white font-bold text-3xl p-3'>
                Quiz Champs
            </div>
        </nav>
    );
};

export default Navbar;