import React, { useState } from "react";
import "./dropdown.css";
import chevrondown from "../../images/icons/chevrondown.png";

const Dropdown = () => {
    const [isActive, setActive] = useState(false);

  return (
    <div className="header__dropdown dropdown">
        <div className="dropdown-btn" onClick={() => setActive(!isActive)}> 
            <span className="dropdown-btn-text" >Русский</span>
            <img src={chevrondown} />
        </div>
        {isActive && (<ul className="dropdown-content">
            <li className="dropdown-item ">Русский</li>
            <li className="dropdown-item ">Английский</li>
            <li className="dropdown-item ">Китайский</li>
            <li className="dropdown-item ">Французский</li>
        </ul>)}
    </div>
  );
};

export default Dropdown;
