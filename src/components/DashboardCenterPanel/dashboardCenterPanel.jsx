import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import ProfilePictureSmall9 from '../../assets/images/profile/profile-small-9.jpg'
import Heart from '../../assets/images/icons/heart.png'
import shortid from 'shortid'
import { DashboardContext } from '../../pages/Dashboard/dashboard'
import ShareAPostComponent from '../ShareAPost/ShareAPost.component'

export default function DashboardCenterPanel() {
    const  {profileInfo: { photo }, posts, sharePost, onChange, postState} = useContext(DashboardContext);
    return (
        <Fragment>
            <div className="col-lg-6 order-1 order-lg-2">   

            <ShareAPostComponent 
                photo={photo} 
                sharePost={sharePost}
                onChange={onChange}
                postState={postState}
            />                     
            {/* <div className="card">
                
                <div className="post-title d-flex align-items-center">
                    
                    <div className="profile-thumb">
                        <Link to="#">
                            <figure className="profile-thumb-middle">
                                <img src={ProfilePictureSmall1} alt="profile avatar" />
                            </figure>
                        </Link>
                    </div>
                    

                    <div className="posted-author">
                        <h6 className="author"><Link to="/profile">merry watson</Link></h6>
                        <span className="post-time">20 min ago</span>
                    </div>

                    <div className="post-settings-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="post-settings arrow-shape">
                            <ul>
                                <li><button>copy link to adda</button></li>
                                <li><button>edit post</button></li>
                                <li><button>embed adda</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="post-content">
                    <p className="post-desc">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                        in their infancy.
                    </p>
                    <div className="post-thumb-gallery">
                        <figure className="post-thumb img-popup">
                            <a href={PostPictureLarge1}>
                                <img src={PostPicture1} alt="post avatar" />
                            </a>
                        </figure>
                    </div>
                    <div className="post-meta">
                        <button className="post-meta-like">
                            <i className="bi bi-heart-beat"></i>
                            <span>You and 201 people like this</span>
                            <strong>201</strong>
                        </button>
                        <ul className="comment-share-meta">
                            <li>
                                <button className="post-comment">
                                    <i className="bi bi-chat-bubble"></i>
                                    <span>41</span>
                                </button>
                            </li>
                            <li>
                                <button className="post-share">
                                    <i className="bi bi-share"></i>
                                    <span>07</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {
                posts.map((post, i) => {
                    const { likes, image, comments, dateCreated, _id, caption, user } = post;
                    // user: { photo, firstName, lastName, _id }
                    return (
                        <div className="card" key={shortid.generate()}>                            
                            <div className="post-title d-flex align-items-center">                                
                                <div className="profile-thumb">
                                    <Link to="#">
                                        <figure className="profile-thumb-middle">
                                            <img src={ProfilePictureSmall9} alt="profile avatar" />
                                        </figure>
                                    </Link>
                                </div>
                                

                                <div className="posted-author">
                                    <h6 className="author"><Link to="/profile">{user.firstName} {user.lastName}</Link></h6>
                                    <span className="post-time">{dateCreated}</span>
                                </div>

                                <div className="post-settings-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <div className="post-settings arrow-shape">
                                        <ul>
                                            <li><button>copy link to adda</button></li>
                                            <li><button>edit post</button></li>
                                            <li><button>embed adda</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="post-content">
                                <p className="post-desc pb-0">
                                    {caption}
                                </p>
                                <div className="post-meta">
                                    <button className="post-meta-like">
                                        <i className="bi bi-heart-beat"></i>
                                        <strong>{likes}</strong>
                                    </button>
                                    <ul className="comment-share-meta">
                                        <li>
                                            <img src={Heart} alt="Like" />
                                        </li>
                                        <li>
                                            <button className="post-comment">
                                                <i className="bi bi-chat-bubble"></i>
                                                <span>{comments}</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    )
                })
            }                   

            {/* <div className="card">                            
                <div className="post-title d-flex align-items-center">                                
                    <div className="profile-thumb">
                        <Link to="#">
                            <figure className="profile-thumb-middle">
                                <img src={ProfilePictureSmall29} alt="profile avatar" />
                            </figure>
                        </Link>
                    </div>
                    

                    <div className="posted-author">
                        <h6 className="author"><Link to="/profile">william henry</Link></h6>
                        <span className="post-time">35 min ago</span>
                    </div>

                    <div className="post-settings-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="post-settings arrow-shape">
                            <ul>
                                <li><button>copy link to adda</button></li>
                                <li><button>edit post</button></li>
                                <li><button>embed adda</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="post-content">
                    <p className="post-desc">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                        in their infancy.
                    </p>
                    <div className="plyr__video-embed plyr-youtube">
                        <iframe src="https://www.youtube.com/embed/WeA7edXsU40" title="post video" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="post-meta">
                        <button className="post-meta-like">
                            <i className="bi bi-heart-beat"></i>
                            <span>You and 112 people like this</span>
                            <strong>112</strong>
                        </button>
                        <ul className="comment-share-meta">
                            <li>
                                <button className="post-comment">
                                    <i className="bi bi-chat-bubble"></i>
                                    <span>36</span>
                                </button>
                            </li>
                            <li>
                                <button className="post-share">
                                    <i className="bi bi-share"></i>
                                    <span>08</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
            

            
            {/* <div className="card">                            
                <div className="post-title d-flex align-items-center">
                    
                    <div className="profile-thumb">
                        <Link to="#">
                            <figure className="profile-thumb-middle">
                                <img src={ProfilePictureSmall37} alt="profile avatar" />
                            </figure>
                        </Link>
                    </div>
                    
                    <div className="posted-author">
                        <h6 className="author"><Link to="/profile">Kate Palson</Link></h6>
                        <span className="post-time">35 min ago</span>
                    </div>

                    <div className="post-settings-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="post-settings arrow-shape">
                            <ul>
                                <li><button>copy link to adda</button></li>
                                <li><button>edit post</button></li>
                                <li><button>embed adda</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="post-content">
                    <p className="post-desc">
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will uncover many web sites still
                        in their infancy.
                    </p>
                    <div className="post-thumb-gallery img-gallery">
                        <div className="row no-gutters">
                            <div className="col-8">
                                <figure className="post-thumb">
                                    <Link className="gallery-selector" to={PostPictureLarge2}>
                                        <img src={PostPicture2} alt="post avatar" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                        <figure className="post-thumb">
                                            <Link className="gallery-selector" to={PostPictureLarge3}>
                                                <img src={PostPicture3} alt="post avatar" />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="col-12">
                                        <figure className="post-thumb">
                                            <Link className="gallery-selector" to={PostPictureLarge4}>
                                                <img src={PostPicture4} alt="post avatar" />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="col-12">
                                        <figure className="post-thumb">
                                            <Link className="gallery-selector" to={PostPictureLarge5}>
                                                <img src={PostPicture5} alt="post avatar" />
                                            </Link>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-meta">
                        <button className="post-meta-like">
                            <i className="bi bi-heart-beat"></i>
                            <span>You and 70 people like this</span>
                            <strong>70</strong>
                        </button>
                        <ul className="comment-share-meta">
                            <li>
                                <button className="post-comment">
                                    <i className="bi bi-chat-bubble"></i>
                                    <span>28</span>
                                </button>
                            </li>
                            <li>
                                <button className="post-share">
                                    <i className="bi bi-share"></i>
                                    <span>12</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>                           */}
        </div>

                        
        </Fragment>
    )
}
