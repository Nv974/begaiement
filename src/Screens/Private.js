import React, { lazy } from 'react';
import categories from '../datas/categories';
import play from '../assets/images/icons/play.png';
import { NavLink } from 'react-router-dom';

const Layout = lazy(() => import('../Components/Layout'));

const Private = () => {
    return (
        <Layout title='Private'>
            <div className='container'>
                <h1 className='text-sm-start text-center ms-md-5 ms-3  '>
                    Vidéos et podcasts
                </h1>
                <div className='mb-5 text-sm-start text-secondary text-center mb-4 ms-md-5 ms-3 '>
                    Consultez notre galerie de contenus média et suggérez-le à
                    vos patients
                </div>
                <ul class='nav align-items-center flex-sm-row flex-column text-sm-start text-center mb-4 ms-md-5 ms-3 md-gap-4 gap-3'>
                    <li class='nav-item border-second mx-'>
                        <NavLink
                            class='nav-link text-second px-1 text-uppercase '
                            to='#'
                        >
                            mes favoris
                        </NavLink>
                    </li>
                    <NavLink
                        class='nav-link disabled px-1 text-uppercase '
                        to='#'
                    >
                        les contenus
                    </NavLink>
                    <li class='nav-item'>
                        <NavLink
                            class='nav-link disabled px-1 text-uppercase '
                            to='#'
                        >
                            mes dernières écoutes
                        </NavLink>
                    </li>
                </ul>
                {categories.map((category) => (
                    <div key={category.categoryId} className=' my-5 '>
                        <div className='container g-0 row gy-4 '>
                            <div className='col-12'>
                                <h4 className='text-sm-start text-center mb-4 ms-md-5 ms-3'>
                                    {category.title}
                                </h4>
                            </div>

                            {category.videos.map((video) => (
                                <div className=' col-sm-6 col-lg-4  col-xl-3 p-0'>
                                    <div className='card custom-card mx-auto'>
                                        <div className='card-img-top'>
                                            <div className='video-ctn mx-auto mt-4 position-relative'>
                                                <img
                                                    src={play}
                                                    alt='play'
                                                    className='position-absolute bottom-0 m-3 '
                                                />
                                            </div>
                                        </div>
                                        <div className='card-body p-0 ms-4 d-flex flex-column justify-content-center '>
                                            {video.title} <br />
                                            <small>
                                                Crée par
                                                <span className='ms-1 text-main text-decoration-underline '>
                                                    {video.author}
                                                </span>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Private;
