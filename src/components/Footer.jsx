import '../footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer className = "Footer">
            <p>Questions? Call 000-800-040-1843</p>
            <div className = "foot_list">
                <ul>
                    <li><a href ="#">FAQ</a></li>
                    <li><a href ="#">Privacy</a></li>
                    <li><a href ="#">Investor Relations</a></li>
                    <li><a href ="#">Speed Test</a></li>
                </ul>
                <ul>
                    <li><a href ="#">Help Centre</a></li>
                    <li><a href ="#">Jobs</a></li>
                    <li><a href ="#">Cookie Preferences</a></li>
                    <li><a href ="#">Legal Notices</a></li>
                </ul>
                <ul>
                    <li><a href ="#">Account</a></li>
                    <li><a href ="#">Ways to Watch</a></li>
                    <li><a href ="#">Corporate Information</a></li>
                    <li><a href ="#">Only on Netflix</a></li>
                </ul>
                <ul>
                    <li><a href ="#">Media Centre</a></li>
                    <li><a href ="#">Terms of Use</a></li>
                    <li><a href ="#">Privacy</a></li>
                    <li><a href ="#">Contact Us</a></li>
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
