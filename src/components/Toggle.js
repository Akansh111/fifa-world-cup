import React from 'react';
import Switch from "react-switch";

export default function Toggle(props) {
    const {theme, handleToggle} = props;
    return (
        <div className="toggle-theme">
        <span className="dark-theme">Dark Theme</span>
        <Switch
            checked={theme === 'light' ? true : false}
            onChange={handleToggle}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="material-switch"
        />
        <span className="light-theme">Light Theme</span>
    </div>
    )
}
