import '../footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer className = "Footer">
            <p>Questions? Call 000-800-040-1843</p>
            <div className = "foot_list">
                <ul>
                    <li><a>FAQ</a></li>
                    <li><a>Investor Relations</a></li>
                    <li><a>Privacy</a></li>
                    <li><a>Speed Test</a></li>
                </ul>
                <ul>
                    <li><a>Help Centre</a></li>
                    <li><a>Jobs</a></li>
                    <li><a>Cookie Preferences</a></li>
                    <li><a>Legal Notices</a></li>
                </ul>
                <ul>
                    <li><a>Account</a></li>
                    <li><a>Ways to Watch</a></li>
                    <li><a>Corporate Information</a></li>
                    <li><a>Only on Netflix</a></li>
                </ul>
                <ul>
                    <li><a>Media Centre</a></li>
                    <li><a>Terms of Use</a></li>
                    <li><a>Privacy</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
            <div className="foot_dropdown_container">
                <FontAwesomeIcon icon={faGlobe} />
                <select className="lang_drop_down">
                    <option defaultValue value="english">English</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>
            <p className="foot_end">Netflix India Designed By @ <em>Nitin Gupta</em></p>
        </footer>
    );

}

export default Footer;
