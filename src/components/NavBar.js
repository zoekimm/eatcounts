import React, {useState} from "react"; 
//import { Links } from 'react-router-dom';

function NavBar() {
    
    const [click, setClick] = useState(false);
    const onClicked = () => setClick(!click);

    return(
        <div className = "nav-bar">
            <div className = "bar-container">
                <div className = "menu-icon" onClick = {onClicked}>
                </div>
            </div>
        </div>
    )
}

export default NavBar;