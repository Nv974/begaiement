import React from 'react';
import play from '../assets/images/icons/play.png';

const Video = ({ video }) => {
    return (
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
    );
};

export default Video;
