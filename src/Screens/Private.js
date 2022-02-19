import React, { lazy } from 'react';

import Tabs from '../Components/Tabs';
import Favorites from '../Components/Favorites';

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
                {/* Navigation */}
                <Tabs />
                {/* Mes favoris */}
                <Favorites />
            </div>
        </Layout>
    );
};

export default Private;
