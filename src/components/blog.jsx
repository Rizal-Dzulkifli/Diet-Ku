import React from "react";
import Navbar from './NavBar.jsx';
import Blogt from './blogtop.jsx';
import Blogc from './blogcard.jsx';



function LandingPage() {
    return (
        <div>
            <Navbar />
            <Blogt />
            <Blogc />
        </div>
    )
}

export default LandingPage;
