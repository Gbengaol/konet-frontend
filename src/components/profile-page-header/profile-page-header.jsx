import React, { Fragment } from 'react'
import ProfilePicture from "../../assets/images/profile/profile-1.jpg"
import ProfileBanner from "../../assets/images/banner/profile-banner.jpg"

export default function ProfilePageHeader() {
    return (
        <Fragment>
            <div class="profile-banner-large bg-img" style={{backgroundImage: `url(${ProfileBanner})`}}>
            </div>
            <div class="profile-menu-area bg-white">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-3">
                            <div class="profile-picture-box">
                                <figure class="profile-picture">
                                    <a href="profile.html">
                                        <img src={ProfilePicture} alt="profile picture" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 offset-lg-1">
                            <div class="profile-menu-wrapper">
                                <div class="main-menu-inner header-top-navigation">
                                    <nav>
                                        <ul class="main-menu">
                                            <li class="active"><a href="#">timeline</a></li>
                                            <li><a href="about.html">about</a></li>
                                            <li><a href="photos.html">photos</a></li>
                                            <li><a href="friends.html">friends</a></li>
                                            <li><a href="about.html">more</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 d-none d-md-block">
                            <div class="profile-edit-panel">
                                <button class="edit-btn">edit profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
