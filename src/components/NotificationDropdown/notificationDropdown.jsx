import React from 'react';
import ProfilePicture3 from '../../assets/images/profile/profile-small-3.jpg'
import ProfilePicture4 from '../../assets/images/profile/profile-small-4.jpg'
import ProfilePicture6 from '../../assets/images/profile/profile-small-6.jpg'

export default function NotificationDropdown() {
    return (
        <div className="message-dropdown" id="b">
            <div className="dropdown-title">
                <p className="recent-msg">Notification</p>
                <button>
                    <i className="flaticon-settings"></i>
                </button>
            </div>
            <ul className="dropdown-msg-list">
                <li className="msg-list-item d-flex justify-content-between">
                    
                    <div className="profile-thumb">
                        <figure className="profile-thumb-middle">
                            <img src={ProfilePicture3} alt="Profile Avatar" />
                        </figure>
                    </div>
                    

                    
                    <div className="msg-content notification-content">
                        <a href="profile.html">Robert Faul</a>,
                        <a href="profile.html">william jhon</a>
                        <p>and 35 other people reacted to your photo</p>
                    </div>
                    

                    
                    <div className="msg-time">
                        <p>25 Apr 2019</p>
                    </div>
                    
                </li>
                <li className="msg-list-item d-flex justify-content-between">
                    
                    <div className="profile-thumb">
                        <figure className="profile-thumb-middle">
                            <img src={ProfilePicture4} alt="Profile Avatar" />
                        </figure>
                    </div>
                    

                    
                    <div className="msg-content notification-content">
                        <a href="profile.html">Robert mushkil</a>,
                        <a href="profile.html">Terry jhon</a>
                        <p>and 20 other people reacted to your photo</p>
                    </div>
                    

                    
                    <div className="msg-time">
                        <p>20 May 2019</p>
                    </div>
                    
                </li>
                <li className="msg-list-item d-flex justify-content-between">
                    
                    <div className="profile-thumb">
                        <figure className="profile-thumb-middle">
                            <img src={ProfilePicture6} alt="Profile Avatar" />
                        </figure>
                    </div>
                    

                    
                    <div className="msg-content notification-content">
                        <a href="profile.html">Horijon Mbala</a>,
                        <a href="profile.html">Bashu jhon</a>
                        <p>and 55 other people reacted to your post</p>
                    </div>
                    

                    
                    <div className="msg-time">
                        <p>15 Jan 2019</p>
                    </div>
                    
                </li>
            </ul>
            <div className="msg-dropdown-footer">
                <button>See all in messenger</button>
                <button>Mark All as Read</button>
            </div>
        </div>
    )
}
