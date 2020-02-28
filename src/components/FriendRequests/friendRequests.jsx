import React from 'react'
import ProfilePicture1 from '../../assets/images/profile/profile-midle-1.jpg'
import ProfilePicture2 from '../../assets/images/profile/profile-midle-2.jpg'
import ProfilePicture3 from '../../assets/images/profile/profile-midle-3.jpg'

export default function FriendRequests() {
    return (
        <div>
            <ul className="frnd-request-list">
                <li>
                    <div className="frnd-request-member">
                        <figure className="request-thumb">
                            <a href="profile.html">
                                <img src={ProfilePicture1} alt="proflie author" />
                            </a>
                        </figure>
                        <div className="frnd-content">
                            <h6 className="author"><a href="profile.html">merry watson</a></h6>
                            <p className="author-subtitle">Works at HasTech</p>
                            <div className="request-btn-inner">
                                <button className="frnd-btn">confirm</button>
                                <button className="frnd-btn delete">delete</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="frnd-request-member">
                        <figure className="request-thumb">
                            <a href="profile.html">
                                <img src={ProfilePicture2} alt="proflie author" />
                            </a>
                        </figure>
                        <div className="frnd-content">
                            <h6 className="author"><a href="profile.html">merry watson</a></h6>
                            <p className="author-subtitle">Works at HasTech</p>
                            <div className="request-btn-inner">
                                <button className="frnd-btn">confirm</button>
                                <button className="frnd-btn delete">delete</button>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="frnd-request-member">
                        <figure className="request-thumb">
                            <a href="profile.html">
                                <img src={ProfilePicture3} alt="proflie author" />
                            </a>
                        </figure>
                        <div className="frnd-content">
                            <h6 className="author"><a href="profile.html">merry watson</a></h6>
                            <p className="author-subtitle">Works at HasTech</p>
                            <div className="request-btn-inner">
                                <button className="frnd-btn">confirm</button>
                                <button className="frnd-btn delete">delete</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
