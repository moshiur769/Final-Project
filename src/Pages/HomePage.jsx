import React from 'react';
import Counter from "../Component/HomeComponent/Counter.jsx";
import Worklist from "../Component/HomeComponent/Worklist.jsx";
import Card from "../Component/HomeComponent/Card.jsx";
import FeatureProduct from "../Component/HomeComponent/FeatureProduct.jsx";
import Subcribe from "../Component/FooterComponent/Subcribe.jsx";
import Footer from "../Component/FooterComponent/Footer.jsx";

const HomePage = () => {
    return (
        <div>
            <Counter/>
            <Worklist/>
            <Card/>
            <FeatureProduct/>
            <Subcribe/>
            <Footer/>
        </div>
    );
};

export default HomePage;