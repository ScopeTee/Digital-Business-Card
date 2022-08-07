import React from "react";
import Twitter from "../images/icon-twitter.svg"
import Github from "../images/github-icon.png"
import Whatsapp from "../images/whatsapp-grey.png"
import Email from "../images/mail.png"
import LinkedIn from "../images/linkedin-grey.png"




function Socials () {
    return(
        <div className="text-start container px-5">
          <ul className="sm">
            <li> 
                <a href="https://twitter.com/scopetee_7/">
                <img src={Twitter} class="sm-icon" alt="" />
                </a>
            </li>
            <li> 
                <a href="http://wa.me/09054151119">
                <img src={Whatsapp} class="sm-icon" alt="" />
                </a>
            </li>
            <li> 
                <a href="mailto:tayosubairfuad@gmail.com">
                <img src={Email} class="sm-icon" alt="" />
                </a>
            </li>
            <li> 
                <a href="https://github.com/ScopeTee">
                <img src={Github} class="sm-icon" alt="" />
                </a>
            </li>
            <li> 
                <a href="http://www.linkedin.com/in/tayo-subair-fuad-04116522b">
                <img src={LinkedIn} class="sm-icon" alt="" />
                </a>
            </li>
          </ul>
          <hr />
        </div>
    )
}

export default Socials