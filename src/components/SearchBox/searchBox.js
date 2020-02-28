import React from 'react'

export default function SearchBox() {
    return (
        <div className="mob-search-box">
            <form className="mob-search-inner">
                <input type="text" placeholder="Search Here" className="mob-search-field" />
                <button className="mob-search-btn"><i className="flaticon-search"></i></button>
            </form>
        </div>
    )
}
