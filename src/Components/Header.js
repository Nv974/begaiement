import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import brand from '../assets/images/branding.png';
import user from '../assets/images/user.png';

//icons
import activity from '../assets/images/icons/activity.png';
import gallery from '../assets/images/icons/gallery.png';
import patients from '../assets/images/icons/patients.png';
import profile from '../assets/images/icons/profile.png';

const Header = () => {
    const [collapse, setCollapsed] = useState(true);

    const handleCollapse = () => setCollapsed(!collapse);

    const { pathname } = useLocation();

    return (
        <header>
            <nav className='navbar navbar-dark text-white p-2 '>
                <div className='container-fluid row'>
                    {pathname === '/private' && (
                        <div className='col-2'>
                            <button
                                className='navbar-toggler'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#navbarCollapse'
                                aria-controls='navbarCollapse'
                                aria-expanded={!collapse ? true : false}
                                aria-label='Toggle navigation'
                                onClick={handleCollapse}
                            >
                                <span className='navbar-toggler-icon'></span>
                            </button>
                        </div>
                    )}
                    <div
                        className={
                            pathname !== '/private'
                                ? ''
                                : 'col-8 d-flex justify-content-center'
                        }
                    >
                        <div
                            className={
                                pathname !== '/private'
                                    ? 'navbar-brand ms-5'
                                    : 'navbar-brand '
                            }
                        >
                            <img src={brand} alt='logo' className='p-0' />
                        </div>
                    </div>
                    {pathname === '/private' && (
                        <div className='col-2'>
                            <NavLink
                                to='#'
                                className='d-flex align-items-center gap-4  d-flex justify-content-end text-white text-decoration-none'
                            >
                                <img src={user} alt='utilisateur' />
                                Lemaitre A.
                            </NavLink>
                        </div>
                    )}

                    {pathname === '/private' && (
                        <div
                            className={`${
                                collapse ? 'collapse' : ''
                            } navbar-collapse`}
                            id='navbarCollapse'
                        >
                            <ul className='navbar-nav flex-md-row justify-content-center gap-md-5 gap-3  my-4'>
                                <li className='nav-item'>
                                    <NavLink
                                        exact={true}
                                        className='nav-link d-flex align-items-center gap-3 justify-content-center '
                                        to='/'
                                    >
                                        <img
                                            src={activity}
                                            alt='tableau de bord'
                                            className='mb-1'
                                            style={{ opacity: 0.5 }}
                                        />
                                        Tableau de bord
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        exact={true}
                                        className='nav-link d-flex align-items-center gap-3 justify-content-center '
                                        to='/'
                                    >
                                        <img
                                            src={patients}
                                            alt='patients'
                                            className='mb-1 '
                                            style={{ opacity: 0.5 }}
                                        />
                                        Mes patients
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        exact={true}
                                        className='nav-link d-flex align-items-center gap-3 justify-content-center'
                                        to='/private'
                                    >
                                        <img
                                            src={gallery}
                                            alt='gallery'
                                            className='mb-1'
                                        />
                                        Galerie de contenus
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        exact={true}
                                        className='nav-link d-flex align-items-center gap-3  justify-content-center'
                                        to='/'
                                    >
                                        <img
                                            src={profile}
                                            alt='profile'
                                            className='mb-1'
                                            style={{ opacity: 0.5 }}
                                        />
                                        Mon compte
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
