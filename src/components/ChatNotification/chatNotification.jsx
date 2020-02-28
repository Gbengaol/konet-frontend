import React from 'react'
import ProfilePictureSmall15 from '../../assets/images/profile/profile-small-15.jpg'
import Plane from '../../assets/images/icons/plane.png'
import Settings from '../../assets/images/icons/settings.png'
import Close from '../../assets/images/icons/close.png'

export default function ChatNotification() {
    return (
        <div>
            <div className="mobile-chat-box">
                <div className="live-chat-title">
                    
                    <div className="profile-thumb">
                        <a href="profile.html">
                            <figure className="profile-thumb-small profile-active">
                                <img src={ProfilePictureSmall15} alt="profile avatar" />
                            </figure>
                        </a>
                    </div>
                    
                    <div className="posted-author">
                        <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                        <span className="active-pro">active now</span>
                    </div>
                    <div className="live-chat-settings ml-auto">
                        <button className="chat-settings"><img src={Settings} alt="" /></button>
                        <button className="close-btn"><img src={Close} alt="" /></button>
                    </div>
                </div>
                <div className="message-list-inner">
                    <ul className="message-list custom-scroll">
                        <li className="text-friends">
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            <div className="message-time">10 minute ago</div>
                        </li>
                        <li className="text-author">
                            <p>Many desktop publishing packages and web page editors</p>
                            <div className="message-time">5 minute ago</div>
                        </li>
                        <li className="text-friends">
                            <p>packages and web page editors </p>
                            <div className="message-time">2 minute ago</div>
                        </li>
                        <li className="text-friends">
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                            <div className="message-time">10 minute ago</div>
                        </li>
                        <li className="text-author">
                            <p>Many desktop publishing packages and web page editors</p>
                            <div className="message-time">5 minute ago</div>
                        </li>
                        <li className="text-friends">
                            <p>packages and web page editors </p>
                            <div className="message-time">2 minute ago</div>
                        </li>
                    </ul>
                </div>
                <div className="chat-text-field mob-text-box">
                    <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                    <button className="chat-message-send" type="submit" value="submit">
                        <img src={Plane} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
