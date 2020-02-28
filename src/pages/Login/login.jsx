import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.scss';
import Spinner from '../../components/Spinner/spinner';
import { loginUrl } from '../../utils/urls';
import axios from 'axios';
import {showAlert} from '../../components/alerts/alert';
import BrandLogo from '../../assets/images/logo/logo.png'
import Register from '../../components/Register/Register';

export default function Login() {
    const history = useHistory()
    const [state, setState] = useState({
        email: '',
        password: '',
        fetchingData: false
    })
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();            
        
        const { email, password } = state;
        let reqBody = {
            email,
            password
        }
        
        try{
            setState({
                ...state,
                fetchingData: true
            })

            const res = await axios({
                method: 'POST',
                url: loginUrl,
                data: reqBody
            })
            if(res.data.status === 'success'){
                setState({
                    ...state,
                    fetchingData: false
                })
                const { token, data: { user : {_id} } } = res.data;
                localStorage.setItem('userDetails', JSON.stringify({
                    authToken: token,
                    id: _id
                }))  
                // showAlert('success', res.data.data.user.name)
                await history.push('/')
            }
        } catch(err) {
            setState({
                ...state,
                fetchingData: false
            })
            showAlert('danger', err.response.data.message)
        }
    }

    const { fetchingData } = state;
    return (
        <main>
        <div className="main-wrapper pb-0 mb-0">
            <div className="timeline-wrapper">
                <div className="timeline-header">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters align-items-center">
                            <div className="col-lg-6">
                                <div className="timeline-logo-area d-flex align-items-center">
                                    <div className="timeline-logo">
                                        <a href="index.html">
                                            <img src={BrandLogo} alt="timeline logo" />
                                        </a>
                                    </div>
                                    <div className="timeline-tagline">
                                        <h6 className="tagline">It’s helps you to connect and share with the people in your life</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form onSubmit={onSubmit} className="login-area">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-sm">
                                            {/* <label htmlFor="validationServer01">Email</label> */}
                                            <input type="email" className={`form-control ${state.email.length >= 5 ? 'is-valid' : 'is-invalid'}`} name="email" onChange={onChange} id="validationServer01" required />
                                        </div>
                                        <div className="col-12 col-sm">
                                            {/* <label htmlFor="validationServer02">Password</label> */}
                                            <input type="password" className={`form-control ${state.password.length >= 5 ? 'is-valid' : 'is-invalid'}`} name="password" onChange={onChange} id="validationServer02" required />
                                        </div>
                                        <button className="btn login-btn" type="submit" disabled={fetchingData}>
                                            {
                                                fetchingData ?
                                                <Spinner text="Logging in..." />  :
                                                'Login'
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline-page-wrapper">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="timeline-bg-content bg-img">
                                    <h3 className="timeline-bg-title">Let’s see what’s happening to you and your world. Welcome to Konet.</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
                                <Register />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
