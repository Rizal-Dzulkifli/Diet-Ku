import React from "react";
import Navbar from './NavBar.jsx';
import Slide from './SlideTop.jsx';
import Topik from './Topik.jsx';

function LandingPage() {
    return (
        <div>
            <Navbar />
            {/* <Resep /> */}
            <Slide />
            <Topik />
   
        </div>
    )
}

export default LandingPage;
