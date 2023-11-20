import {NavLink} from "react-router-dom";
import "../RoutesComponent/routes.css"
const ReactRoute = () => {
    return (
        <div>
            <div  >
                <nav className= "" >
                    <ul>
                        <li>
                            <NavLink className= "designAgency" to= "" >
                                Design <span className= "span" >AGENCY</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className= "navLink" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className= "navLink"  to= "/team">Team</NavLink>
                        </li>
                        <li>
                            <NavLink className= "navLink" to= "/service" >Service</NavLink>
                        </li>
                        <li>
                            <NavLink className= "navLink" to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink className= "navLink" to= "/testimonial" >Testimonials</NavLink>
                        </li>
                        <li>
                            <NavLink id= "login" className= "navLink" to= "/login" >Login</NavLink>
                        </li>
                        <li>
                            <NavLink id= "register" className= "navLink" to= "/register" >Register</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ReactRoute;

































