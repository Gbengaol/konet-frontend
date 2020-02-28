import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import './login.scss';
import BrandLogo from '../../assets/images/logo/logo.png'
import ProfilePicture1 from '../../assets/images/profile/profile-small-1.jpg'
import ProfileDropdown from '../ProfileDropdown/profileDropdown';
import MessageDropdown from '../MessageDropdown/messageDropdown';
import NotificationDropdown from '../NotificationDropdown/notificationDropdown';

export default function WebHeader({ toggleProfileDropdown, showProfileDropdown }) {
    const [state, setState] = useState({
        showMessageDropdown: false,
        showNotificationDropdown: false,
    })
    const toggleMessageDropdown = () => {
        setState({
            ...state,
            showMessageDropdown: !state.showMessageDropdown
        })
    }
    const toggleNotificationDropdown = () => {
        setState({
            ...state,
            showNotificationDropdown: !state.showNotificationDropdown
        })
    }
    return (
        <header>
            <div className="header-top sticky bg-white d-none d-lg-block">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            
                            <div className="header-top-navigation">
                                <nav>
                                    <ul>
                                        <li className="active"><Link to="/">Home</Link></li>
                                        <li className="msg-trigger"><Link to="#" onClick={toggleMessageDropdown} className="msg-trigger-btn">Messages</Link>
                                        {
                                            state.showMessageDropdown ? <MessageDropdown /> : null
                                        }
                                        </li>
                                        <li className="notification-trigger"><Link to="#" onClick={toggleNotificationDropdown} className="msg-trigger-btn">Notifications</Link>
                                            {
                                                state.showNotificationDropdown ? <NotificationDropdown /> : null
                                            }
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>

                        <div className="col-md-2">                        
                            <div className="brand-logo text-center">
                                <Link to="/">
                                    <img src={BrandLogo} alt="brand logo" />
                                </Link>
                            </div>
                            
                        </div>

                        <div className="col-md-5">
                            <div className="header-top-right d-flex align-items-center justify-content-end">                            
                                <div className="header-top-search">
                                    <form className="top-search-box">
                                        <input type="text" placeholder="Search" className="top-search-field" />
                                        <button className="top-search-btn"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>

                                <div className="profile-setting-box">
                                    <div className="profile-thumb-small">
                                        <span onClick={toggleProfileDropdown} className="profile-triger">
                                            <figure>
                                                <img src={ProfilePicture1} alt="Profile Avatar" />
                                            </figure>
                                        </span>
                                    </div>
                                    {
                                        showProfileDropdown?<ProfileDropdown />: null
                                    }                                
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
