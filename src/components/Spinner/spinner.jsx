import React from 'react';
import './spinner.scss'

export default function Spinner({ text }) {
    return (
        <span>
            { text }
            <span className="spinner-border spinner-border-sm ml-3" role="status" aria-hidden="true"></span>
        </span>
    )
}