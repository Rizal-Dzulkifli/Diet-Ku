import React from "react";
import Navbar from './NavBar.jsx';
import Blogt from './blogtop.jsx';
import Blogc from './blogcard.jsx';
import Blogcc from './blogcard2.jsx';



function LandingPage() {
    return (
        <div>
            <Navbar />
            <Blogt />
            <Blogc />
            <Blogcc />
        </div>
    )
}

export default LandingPage;
