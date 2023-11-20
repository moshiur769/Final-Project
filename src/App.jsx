import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import TeamPage from "./Pages/TeamPage.jsx";
import ServicePage from "./Pages/ServicePage.jsx";
import ProjectPage from "./Pages/ProjectPage.jsx";
import TestimonialPage from "./Pages/TestimonialPage.jsx";
import Login from "./Component/LoginLogout/Login.jsx";
import Logout from "./Component/LoginLogout/Logout.jsx";
import Error from "./Pages/Error.jsx";
import ReactRoute from "./Component/RoutesComponent/ReactRoute.jsx";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ReactRoute/>
                <Routes>
                    <Route path= "/" element={<HomePage/>} />
                    <Route path= "/team" element={<TeamPage/>} />
                    <Route path= "/service" element={<ServicePage/>} />
                    <Route path= "/projects" element={<ProjectPage/>} />
                    <Route path= "/testimonial" element={<TestimonialPage/>} />
                    <Route path= "/login" element={<Login/>} />
                    <Route path= "/register" element={<Logout/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;