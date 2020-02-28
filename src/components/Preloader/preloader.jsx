import React from 'react';
import './preloader.scss'

export default function Preloader() {
    return (
        <div className="preloader-container">
            <div className="spinner-border preloader" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
