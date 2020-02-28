import React from 'react';
import ProfilePicture3 from '../../assets/images/profile/profile-small-3.jpg'
import ProfilePicture4 from '../../assets/images/profile/profile-small-4.jpg'
import ProfilePicture5 from '../../assets/images/profile/profile-small-5.jpg'

export default function MessageDropdown() {
    return (
        <div className="message-dropdown" id="a">
            <div className="dropdown-title">
                <p className="recent-msg">recent message</p>
                <div className="message-btn-group">
                    <button>New group</button>
                    <button>New Message</button>
                </div>
            </div>
            <ul className="dropdown-msg-list">
                <li className="msg-list-item d-flex justify-content-between">
                    
                    <div className="profile-thumb">
                        <figure className="profile-thumb-middle">
                            <img src={ProfilePicture3} alt="Profile Avatar" />
                        </figure>
                    </div>
                    

                    
                    <div className="msg-content">
                        <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
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
                    

                    <div className="msg-content">
                        <h6 className="author"><a href="profile.html">Jhon Doe</a></h6>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                    </div>
                    

                    
                    <div className="msg-time">
                        <p>15 May 2019</p>
                    </div>
                    
                </li>
                <li className="msg-list-item d-flex justify-content-between">
                    
                    <div className="profile-thumb">
                        <figure className="profile-thumb-middle">
                            <img src={ProfilePicture5} alt="Profile Avatar" />
                        </figure>
                    </div>
                    

                    
                    <div className="msg-content">
                        <h6 className="author"><a href="profile.html">Jon Wileyam</a></h6>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                    </div>
                    

                    
                    <div className="msg-time">
                        <p>20 Jun 2019</p>
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
