import React, { Fragment } from 'react'
import HeaderComponent from '../../components/HeaderComponent/headerComponent'
import ShareAPostComponent from '../../components/ShareAPost/ShareAPost.component'
import ProfilePageHeader from '../../components/profile-page-header/profile-page-header';

export default function ProfilePage() {
    const photo = '';
    const sharePost = '';
    const onChange = '';
    const postState = {
        sendingPost: '', 
        newPost: ''
    }
    return (
        <Fragment>
            <HeaderComponent />
            
            <main>
                <div class="main-wrapper">
                    <ProfilePageHeader />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <ShareAPostComponent 
                                    photo={photo} 
                                    sharePost={sharePost}
                                    onChange={onChange}
                                    postState={postState}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
