import React, { useState } from 'react';
import BrandLogo from '../../assets/images/logo/logo-white.png'
import ProfilePictureSmall1 from '../../assets/images/profile/profile-small-1.jpg'
import ProfileDropdown from '../ProfileDropdown/profileDropdown';
import FriendRequests from '../FriendRequests/friendRequests';
import ChatNotification from '../ChatNotification/chatNotification';
import SearchBox from '../SearchBox/searchBox';



export default function MobileHeader({ toggleProfileDropdown, showProfileDropdown }) {
    const [state, setState] = useState({
        showFriendRequests: false,
        showChatNotification: false,
        showSearchBox: false
    })
    const toggleShowFriendRequests = () => {
        setState({
            ...state,
            showFriendRequests: !state.showFriendRequests
        })
    }
    const toggleShowChatNotification = () => {
        setState({
            ...state,
            showChatNotification: !state.showChatNotification
        })
    }
    const toggleShowSearchBox = () => {
        setState({
            ...state,
            showSearchBox: !state.showSearchBox
        })
    }
    return (
        <header>
            <div className="mobile-header-wrapper sticky d-block d-lg-none">
                <div className="mobile-header position-relative ">
                    <div className="mobile-logo">
                        <a href="index.html">
                            <img src={BrandLogo} alt="logo" />
                        </a>
                    </div>
                    <div className="mobile-menu w-100">
                        <ul>
                            <li>
                                <button onClick={toggleShowFriendRequests} className="notification request-trigger"><i className="flaticon-users"></i>
                                    <span>03</span>
                                </button>
                                {
                                    state.showFriendRequests ? <FriendRequests /> : null
                                }                                
                            </li>
                            <li>
                                <button className="notification"><i className="flaticon-notification"></i>
                                    <span>03</span>
                                </button>
                            </li>
                            <li>
                                <button onClick={toggleShowChatNotification} className="chat-trigger notification"><i className="flaticon-chats"></i>
                                    <span>04</span>
                                </button>
                                {
                                    state.showChatNotification ? <ChatNotification /> : null
                                }
                            </li>
                            <li>
                                <button className="search-trigger" onClick={toggleShowSearchBox}>
                                    <i className="search-icon flaticon-search"></i>
                                    <i className="close-icon flaticon-cross-out"></i>
                                </button>
                                {
                                    state.showSearchBox ? <SearchBox /> : null
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-header-profile">                    
                        <div className="profile-thumb profile-setting-box">
                            <span onClick={toggleProfileDropdown} className="profile-triger">
                                <figure className="profile-thumb-middle">
                                    <img src={ProfilePictureSmall1} alt="Profile Avatar" />
                                </figure>
                            </span>
                            <div className="text-left">
                                {
                                    showProfileDropdown?<ProfileDropdown />: null
                                } 
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}
