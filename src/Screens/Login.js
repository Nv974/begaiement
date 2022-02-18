import React, { lazy } from 'react';
import loginBg from '../assets/images/login.png';

const Layout = lazy(() => import('../Components/Layout'));

const Login = () => {
    return (
        <Layout title='Connexion'>
            <div className='row vh-100 m-0'>
                <div className='col-xl-7 col-md-6 my-auto'>
                    <div className='container'>
                        <form className='form-signin'>
                            <h1 className='h3 mb-3 fw-normal'>Connexion</h1>
                            <p>
                                Vous avez déja un compte ?
                                <span className='text-decoration-underline mx-1 text-second'>
                                    Inscription
                                </span>
                            </p>
                            <label
                                htmlFor='inputEmail'
                                className='visually-hidden'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                id='inputEmail'
                                className='form-control custom-input'
                                placeholder='Email'
                                required=''
                                autoFocus=''
                            />
                            <label
                                htmlFor='inputPassword'
                                className='visually-hidden'
                            >
                                Mot de passe
                            </label>
                            <input
                                type='password'
                                id='inputPassword'
                                className='form-control custom-input mt-3'
                                placeholder='Mot de passe'
                                required=''
                            />

                            <small
                                className='fw-bold'
                                style={{
                                    fontSize: 12,
                                    ligneHeight: 20,
                                }}
                            >
                                Bégaiement s'engage à respecter vos données. En
                                continuant votre inscription, vous acceptez nos
                                conditions générales.
                            </small>

                            <button
                                className='w-100 btn btn-purple text-white mt-3 p-2 '
                                type='submit'
                            >
                                Accéder à mon espace
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    className='col-xl-5 col-md-6'
                    style={{
                        backgroundImage: `url(${loginBg})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
            </div>
        </Layout>
    );
};

export default Login;
