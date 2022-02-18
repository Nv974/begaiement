import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
    return (
        <ul
            class='nav align-items-center flex-sm-row flex-column 
                        text-sm-start text-center mb-4 ms-md-5 ms-3 md-gap-4 gap-3'
        >
            <li class='nav-item border-second mx-'>
                <NavLink
                    class='nav-link text-second px-1 text-uppercase '
                    to='#'
                >
                    mes favoris
                </NavLink>
            </li>
            <NavLink class='nav-link disabled px-1 text-uppercase ' to='#'>
                les contenus
            </NavLink>
            <li class='nav-item'>
                <NavLink class='nav-link disabled px-1 text-uppercase ' to='#'>
                    mes dernières écoutes
                </NavLink>
            </li>
        </ul>
    );
};

export default Tabs;
