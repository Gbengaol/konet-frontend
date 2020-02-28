import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileDropdown() {
    return (
        <div className="profile-dropdown">
            <div className="profile-head">
                <h5 className="name"><Link to="#">Madison Howard</Link></h5>
                <Link className="mail" to="#">mailnam@mail.com</Link>
            </div>
            <div className="profile-body">
                <ul>
                    <li><a href="profile.html"><i className="flaticon-user"></i>Profile</a></li>
                    <li><Link to="#"><i className="flaticon-message"></i>Inbox</Link></li>
                    <li><Link to="#"><i className="flaticon-document"></i>Activity</Link></li>
                </ul>
                <ul>
                    <li><Link to="#"><i className="flaticon-settings"></i>Setting</Link></li>
                    <li><Link to="/login"><i className="flaticon-unlock"></i>Sign out</Link></li>
                </ul>
            </div>
        </div>
    )
}
