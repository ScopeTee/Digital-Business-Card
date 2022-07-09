import React from "react";
import Headshot from "../images/Headshots.png"


function Card() {
    return(
        <div className="card mb-3 text-center container mt-2" >
            <img src={Headshot} className="card-img-top rounded mx-auto d-block img " alt="..." />
            <div className="card-body text-center">
                <h2 className="card-title head-name">Tayo-Subair Fuad</h2>
                <p className="card-text">Front-End Developer</p>
                <div className="py-3">
                    <a href="http://tayo-subair-fuad.netlify.app/">
                        <button type="button" className="btn btn-outline-secondary my-2 mx-3">Portfolio</button>
                    </a> 
                    <a href="https://drive.google.com/file/d/1tD5y3e0F8fMzCBO90C5s7WDejQjv8hb7/view?usp=sharing">
                    <button type="button" className="btn btn-outline-secondary my-2 mx-3">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card