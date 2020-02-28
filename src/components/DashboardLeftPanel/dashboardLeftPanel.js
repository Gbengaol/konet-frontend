import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
// import Heart from '../../assets/images/icons/heart.png'
// import HeartColor from '../../assets/images/icons/heart-color.png'
import Spinner from '../Spinner/spinner'
import { DashboardContext } from '../../pages/Dashboard/dashboard'


export default function DashboardLeftPanel() {
    const { profileInfo: { photo, firstName, lastName, email, bio}, fetchingData } = useContext(DashboardContext);
    return (
        <Fragment>
            <div className="col-lg-3 order-2 order-lg-1">
                <aside className="widget-area">
                    {
                        fetchingData ? 
                        <Spinner />
                        :
                        <div className="card card-profile widget-item p-0">
                            <div className="profile-banner">
                                <figure className="profile-banner-small">
                                    <Link to="/profile">
                                        <img src={photo} alt="profile avatar" />
                                    </Link>
                                    <Link to="/profile" className="profile-thumb-2">
                                        <img src={photo} alt="profile avatar" />
                                    </Link>
                                </figure>
                                <div className="profile-desc text-center">
                                    <h6 className="email"><Link to="/profile">{email}</Link></h6>
                                </div>
                                <div className="profile-desc text-center">
                                    <h6 className="name"><Link to="/profile">{firstName} {lastName}</Link></h6>
                                    <p>{bio}</p>
                                </div>
                            </div>
                        </div>                   
                    }
                </aside>
            </div>
        </Fragment>
    )
}
