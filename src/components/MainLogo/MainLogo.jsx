import React from "react";
import logoBlock from "../../images/airplanelogo.png"
import app from "../../images/applepay.png";
import phoneApp from "../../images/apps.png"
import s from "./MainLogo.module.scss"
function MainLogo(){
    return(
        <div className={s.logoContainer}>
            <figure className={s.fig}>
            <img src={logoBlock} alt="" className={s.image} />
          <figcaption className={s.figcaption}>
            <h2 className={s.bannerWords}>
            The Air Scanner Makes <br></br> Travel Planning Easy {" "}
            </h2>
            <p className={s.bannerSecWords}>
            We’ll get you where you want to go. From live train updates to<br></br>{" "}
            mobile tickets, our innovative app is the ideal way to plan and <br></br>{" "}
            keep track of your travel. 
            </p>
            <img src={app} alt="" className={s.imageCard} />
            <img src={phoneApp} alt="" className={s.phoneApp}/>
          </figcaption>
        </figure>
        </div>
    )
}
export default MainLogo;