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
        <nav className='bg-purple-200 w-full'>
            
            {/* <span>{open ? 'open' : 'close'}</span> */}
            <div>
                <div className=' flex md:flex-row justify-between'>
                    <ul className={`bg-purple-200 md:flex w-full justify-end absolute md:static duration-500 ease-in ${!open ? 'top-6' : 'top-[-120px]'}`}>
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
                <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
                    {
                        !open ? <XMarkIcon/> : <Bars3Icon/> 
                    }
                </div>
            </div>
            <div className=' text-left h-10'>
                Hello
            </div>
        </nav>
    );
};

export default Navbar;