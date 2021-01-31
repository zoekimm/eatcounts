import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    const [click, setClick] = useState(false);
    const onClicked = () => setClick(!click);

    return (
        <nav className = "navbar">
            <div className = "bar-container">
                <Link to = "/" className = "nav-logo">
                    EatCounts <i className = "fas fa-typo3" />
                </Link>
                <div className = "menu" onClick = {onClicked}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className = "nav-itmes">
                        <Link 
                        to = "/" 
                        className = "nav-links"
                         onClick = {onClicked}
                        >
                        Home 
                        </Link>
                    </li>
                    <li className = "nav-itmes">
                        <Link 
                        to = "/" 
                        className = "nav-links"
                         onClick = {onClicked}
                        >
                        About
                        </Link>
                    </li>
                    <li className = "nav-itmes">
                        <Link 
                        to = "/RecipePage" 
                        className = "nav-links" 
                        onClick = {onClicked}
                        >
                        Recipe 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;