import React from "react";


function Card() {
    return(
        <div className="card mb-3 text-center container" >
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h2 className="card-title">Tayo-Subair Fuad</h2>
                <p className="card-text">Front-End Developer</p>
                <small className="card-text">http://tayo-subair-fuad.netlify.app/</small>
                <div className="py-3">
                    <a href="http://tayo-subair-fuad.netlify.app/">
                        <button type="button" className="btn btn-outline-primary my-2 mx-3">Portfolio</button>
                    </a> 
                    {/* <a href="#"> */}
                    <button type="button" className="btn btn-outline-primary my-2 mx-3">Resume</button>
                    {/* </a> */}
                </div>
            </div>
        </div>
    )
}

export default Card