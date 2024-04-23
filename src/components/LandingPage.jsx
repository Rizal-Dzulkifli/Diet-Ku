import React from "react";
import image from '../assets/Logo Dietku.png';
import TabLandingPage from "./TabLandingPage";

function LandingPage() {
    return (
        <section className="content m-4" >
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-6 pb-3 d-flex justify-content-center align-items-center "style={{ height: "" }}>
                        <img src={image} alt="Logo Dietku" style={{ width: "75%" }} />
                    </div>
                    <div className="col-md-6" >
                        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px", color: "#4AB6C5" }}>
                            <b>Selamat Datang</b>
                        </h1>
                        <TabLandingPage />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;
