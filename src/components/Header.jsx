import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';



function Header() {
    return (
        <header>
            <nav id="navbar">
                <div className='navbar_brand'>
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        alt="Logo"
                        className="brand_logo"></img>
                </div>
                <div className='navbar_nav_items'>
                    <div className="nav_item">
                        <div className="dropdown_container">
                            <FontAwesomeIcon icon={faGlobe} />          
                            <select className="lang_drop_down">
                                <option defaultValue value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                    </div>
                    <div className="nav_item">
                        <button className="signin_button" >Sign in</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;