import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ProfilePictureSmall9 from '../../assets/images/profile/profile-small-9.jpg'
import ProfilePictureSmall35 from '../../assets/images/profile/profile-small-35.jpg'
import ProfilePictureSmall6 from '../../assets/images/profile/profile-small-6.jpg'
import ProfilePictureSmall34 from '../../assets/images/profile/profile-small-34.jpg'
import ProfilePictureSmall33 from '../../assets/images/profile/profile-small-33.jpg'
import ProfilePictureSmall30 from '../../assets/images/profile/profile-small-30.jpg'
import ProfilePictureSmall5 from '../../assets/images/profile/profile-small-5.jpg'
import ProfilePictureSmall29 from '../../assets/images/profile/profile-small-29.jpg'
import Heart from '../../assets/images/icons/heart.png'
import HeartColor from '../../assets/images/icons/heart-color.png'

export default function DashboardRightPanel() {
    return (
        <Fragment>
            <div className="col-lg-3 order-3">
                <aside className="widget-area">
                    
                    <div className="card widget-item">
                        <h4 className="widget-title">Recent Notifications</h4>
                        <div className="widget-body">
                            <ul className="like-page-list-wrapper">
                                <li className="unorder-list">
                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall9} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>
                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Any one can join with us if you want</Link></h3>
                                        <p className="list-subtitle">5 min ago</p>
                                    </div>
                                </li>
                                <li className="unorder-list">
                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall35} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>
                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Any one can join with us if you want</Link></h3>
                                        <p className="list-subtitle">10 min ago</p>
                                    </div>
                                </li>
                                <li className="unorder-list">
                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall5} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>
                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Any one can join with us if you want</Link></h3>
                                        <p className="list-subtitle">18 min ago</p>
                                    </div>
                                </li>
                                <li className="unorder-list">
                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall6} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>
                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Any one can join with us if you want</Link></h3>
                                        <p className="list-subtitle">25 min ago</p>
                                    </div>
                                </li>
                                <li className="unorder-list">                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall34} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>
                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Any one can join with us if you want</Link></h3>
                                        <p className="list-subtitle">39 min ago</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>                   
                    
                    <div className="card widget-item">
                        <h4 className="widget-title">Friends Zone</h4>
                        <div className="widget-body">
                            <ul className="like-page-list-wrapper">
                                <li className="unorder-list">
                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall33} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>
                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Ammeya Jakson</Link></h3>
                                        <p className="list-subtitle"><Link to="#">10 mutual</Link></p>
                                    </div>
                                    <button className="like-button">
                                        <img className="heart" src={Heart} alt="" />
                                        <img className="heart-color" src={HeartColor} alt="" />
                                    </button>
                                </li>
                                <li className="unorder-list">
                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall30} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>
                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Jashon Muri</Link></h3>
                                        <p className="list-subtitle"><Link to="#">2 mutual</Link></p>
                                    </div>
                                    <button className="like-button active">
                                        <img className="heart" src={Heart} alt="" />
                                        <img className="heart-color" src={HeartColor} alt="" />
                                    </button>
                                </li>
                                <li className="unorder-list">                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall5} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Rolin Theitar</Link></h3>
                                        <p className="list-subtitle"><Link to="#">drama</Link></p>
                                    </div>
                                    <button className="like-button">
                                        <img className="heart" src={Heart} alt="" />
                                        <img className="heart-color" src={HeartColor} alt="" />
                                    </button>
                                </li>
                                <li className="unorder-list">                                    
                                    <div className="profile-thumb">
                                        <Link to="#">
                                            <figure className="profile-thumb-small">
                                                <img src={ProfilePictureSmall29} alt="profile avatar" />
                                            </figure>
                                        </Link>
                                    </div>                                    

                                    <div className="unorder-list-info">
                                        <h3 className="list-title"><Link to="#">Active Mind</Link></h3>
                                        <p className="list-subtitle"><Link to="#">fitness</Link></p>
                                    </div>
                                    <button className="like-button">
                                        <img className="heart" src={Heart} alt="" />
                                        <img className="heart-color" src={HeartColor} alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </aside>
            </div>
        </Fragment>
    )
}
