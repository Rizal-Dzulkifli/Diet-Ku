import React from "react";
import Navbar from './NavBar.jsx';
import Slide from './SlideTop.jsx';
import Topik from './Topik.jsx';
import Bmi from './Bmi.jsx';


function LandingPage() {
    return (
        <div>
            <Navbar />
            <Slide />
            <Topik />
            <Bmi />
        </div>
    )
}

export default LandingPage;
