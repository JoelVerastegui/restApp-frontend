import React, { Fragment, useState, useEffect } from 'react';
import { primaryColor } from '../../Config/colors';

const { API_URI } = require('../../Config/config');

const axios = require('axios');
require('velocity-animate/velocity');

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        document.getElementsByName('username')[0].addEventListener('focusin', (e) => {
            if (!e.target.value.trim().length) {
                document.getElementById('username').velocity({ top: '0px', left: '0px', fontSize: '13px' }, { duration: '200' });
                // document.getElementById('username').velocity('stop');
                e.target.value = '';
            }
        })
        document.getElementsByName('username')[0].addEventListener('focusout', (e) => {
            if (!e.target.value.trim().length) {
                document.getElementById('username').velocity({ top: '35px', left: '10px', fontSize: '16px' }, { duration: '200' });
                // document.getElementById('username').velocity('stop');
                e.target.value = '';
            }
        })
        document.getElementsByName('password')[0].addEventListener('focusin', (e) => {
            if (!e.target.value.trim().length) {
                document.getElementById('password').velocity({ top: '0px', left: '0px', fontSize: '13px' }, { duration: '200' });
                // document.getElementById('password').velocity('stop');
                e.target.value = '';
            }
        })
        document.getElementsByName('password')[0].addEventListener('focusout', (e) => {
            if (!e.target.value.trim().length) {
                document.getElementById('password').velocity({ top: '35px', left: '10px', fontSize: '16px' }, { duration: '200' });
                // document.getElementById('password').velocity('stop');
                e.target.value = '';
            }
        })
    }, [])

    async function sendLogin() {
        const body = {
            nickname: username,
            password
        }
        const res = await axios.post(`${API_URI}/login`, body)
            .catch((err) => {
                setError(true);
                return console.log('Error: ', err);
            });

        if (res) {
            console.log(res);
        } else {
            console.log(res);
        }
    }

    return (
        <Fragment>
            <div className="w-100 h-100 d-flex position-fixed">
                <div className="w-75 h-100">
                    <img className="w-100 h-100" src={`https://picsum.photos/${Math.floor(window.innerWidth * 3 / 4)}/${window.innerHeight}`} alt="background" onError={(e) => { e.target.onError = null; e.target.src = './assets/default-background.jpg' }} />
                </div>
                <div className="w-25 h-100 d-flex align-items-center text-white" style={{ backgroundColor: primaryColor }}>
                    <div className="w-100 d-flex flex-column">
                        <div className="h-25 d-flex justify-content-center align-items-center">
                            <h2 className="h2">Login</h2>
                        </div>
                        <div className={!error ? 'd-none' : "px-5 my-2 text-danger"}>
                            <small>X Credenciales incorrectas</small>
                        </div>
                        <div className="h-25 px-5 mb-5 d-flex flex-column justify-content-center font-weight-light">
                            <label id="username" style={{ position: 'relative', top: '35px', left: '10px' }}>Username</label>
                            <div className="d-flex align-items-center border-bottom border-white mb-4">
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control text-white border-0 rounded-0"
                                    style={{ backgroundColor: 'transparent', zIndex: 1000, outline: 'none', width: '90%', boxShadow: 'none' }}
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }} />
                                <img src="./assets/filled/user-w.png" alt="user" width="20px" height="20px" />
                            </div>
                            <label id="password" style={{ position: 'relative', top: '35px', left: '10px' }}>Password</label>
                            <div className="d-flex align-items-center border-bottom border-white mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control text-white border-0 rounded-0"
                                    style={{ backgroundColor: 'transparent', zIndex: 1000, outline: 'none', width: '90%', boxShadow: 'none' }}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} />
                                    <img src="./assets/filled/key-w.png" alt="user" width="20px" height="20px" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <input type="button" className="btn btn-success" value="Acceder" onClick={() => { sendLogin() }} />
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Login;