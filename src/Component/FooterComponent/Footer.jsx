
import {FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import "./footer.css"
const Footer = () => {
    return (
        <div>
                <footer>
                    <div className= 'container' >
                        <div className= "footerData" >
                            <div className= "footerDataLeft" >
                                <h3 className= "Logo" >WEB LOGO</h3>
                                <p className= "text" >
                                    Some footer text about the <br/>
                                    Agency. Just a little description to <br/>
                                    help people understand you better
                                </p>
                                <div className= "icons" >
                                    <span className = " icon icon1 "  >< FaFacebookF/></span>
                                    <span className = " icon icon2 "  ><FaTwitter/></span>
                                    <span className = " icon icon3 "  ><FaLinkedinIn/></span>
                                    <span className = " icon icon4 "  ><FaInstagramSquare/></span>
                                </div>
                            </div>
                            <div className= "dataMiddle" >
                                <h3 className= "Links" >Quick Links</h3>

                                <ul className= "quickLink" >
                                    <li>
                                        <NavLink className= "fLink" to= "/service">Service</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className= "fLink" to= "/protfile" >Portfolio</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className= "fLink" to= "/protfile" >About Us </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className= "fLink" to="/protfile">Contact Us</NavLink>
                                    </li>
                                </ul>

                            </div>
                            <div className= "dataRight" >
                                <h3 className= "address">Address</h3>
                                <p className= "Design" >
                                    Design Agency Head Office. <br/>
                                    Airport Road <br/>
                                    United Arab Emirate
                                </p>
                            </div>
                        </div>
                        <div className= "Copyright" >
                            <p>Copyright Design Agency 2022</p>
                        </div>
                    </div>
                </footer>
        </div>
    );
};

export default Footer;