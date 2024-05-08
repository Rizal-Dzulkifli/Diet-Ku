import React from "react";
import Navbar from './NavBar.jsx';
import Resep from './resepcard.jsx';
import Resept from './reseptop.jsx';



function LandingPage() {
    return (
        <div>
            <Navbar />
            <Resept />
            <Resep />
        </div>
    )
}

export default LandingPage;
