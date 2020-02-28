import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function ShareAPostComponent({ photo, sharePost, onChange, postState }) {
    const { sendingPost, newPost } = postState;
    return (
        <Fragment>
            <div className="card card-small">
                <div className="share-box-inner">
                    <div className="profile-thumb">
                        <Link to="#">
                            <figure className="profile-thumb-middle">
                                <img src={photo} alt="profile avatar" />
                            </figure>
                        </Link>
                    </div>                             
                    
                    <div className="share-content-box w-100">
                        <form className="share-text-box" onSubmit={sharePost}>
                            <textarea 
                                name="newPost" 
                                value={newPost}
                                className="share-text-field"
                                onChange={onChange} 
                                placeholder="Say Something"
                            ></textarea>
                            <button 
                                className="btn-share" 
                                type="submit"
                                disabled={!newPost.length || sendingPost}
                            >
                                Share
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
