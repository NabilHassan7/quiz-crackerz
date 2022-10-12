import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLinks = ({route}) => {
    return (
        <div>
            <li className='mr-12 text-white font-semibold hover:text-orange-400'>
                <Link to={route.path}>{route.name}</Link>
            </li>
        </div>
    );
};

export default NavBarLinks;