import React from 'react';
import './errorPage.scss';
import { useHistory, Link } from 'react-router-dom';

export default function ErrorPage() {
    const history = useHistory()
    return (
        <div className="errorWrapper">
            <div className="box">
                <p>Sorry this page broke. The fault is mine, not yours.</p>
                <p><span role="img" aria-label="emoji">😢😢😢</span></p>
                <p><Link to="#" onClick={() => history.goBack()}>Please try again!</Link></p>
            </div>
        </div>
    )
}
