import React, { useState } from 'react';
import MobileHeader from '../../components/MobileHeader/mobileHeader';
import WebHeader from '../../components/WebHeader/webHeader';
export default function HeaderComponent() {
    const [state, setState] = useState({
        showProfileDropdown: false
    })
    const toggleProfileDropdown = () => {
        setState({
            ...state,
            showProfileDropdown: !state.showProfileDropdown
        })
    }
    return (
        <div>
            <WebHeader 
                toggleProfileDropdown={toggleProfileDropdown}
                showProfileDropdown={state.showProfileDropdown}
            />

            {/* Mobile Header */}
            <MobileHeader 
                toggleProfileDropdown={toggleProfileDropdown}
                showProfileDropdown={state.showProfileDropdown}
            />
        </div>
    )
}
