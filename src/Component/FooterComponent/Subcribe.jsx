import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css"
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
const Subcribe = () => {
    return (
        <div>
            <div className= "container" >
                <div className= "SubcriberPage" >
                    <p className= 'SUBSCRIBE' >
                        SUBSCRIBE
                    </p>
                    <h1 className= "Latest" >
                        Subscribe To Get The Latest
                    </h1>
                    <h1 className= "Latest"  >News About Us</h1>
                    <p className="drop">
                        Please drop your email below to get daily update about what we do
                    </p>
                    <div className= "email" >
                        <input className= "input" type= "email" placeholder= "Enter Your Email Adress" />
                        <button className= "span" >Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subcribe;

























