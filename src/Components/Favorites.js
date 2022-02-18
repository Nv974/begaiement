import React from 'react';
import categories from '../datas/categories';
import Video from './Video';

const Favorites = () => {
    return (
        <div>
            {categories.map((category) => (
                <div key={category.categoryId} className=' my-5 '>
                    <div className='container g-0 row gy-4 '>
                        <div className='col-12'>
                            <h4 className='text-sm-start text-center mb-4 ms-md-5 ms-3'>
                                {category.title}
                            </h4>
                        </div>

                        {category.videos.map((video) => (
                            <Video key={video.videoId} video={video} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Favorites;
