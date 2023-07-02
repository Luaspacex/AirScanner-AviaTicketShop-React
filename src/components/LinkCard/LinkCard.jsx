import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { cardsData } from "../../data/cardsData";
import s from "./LinkCard.module.scss";
// import { Link, useNavigate } from "react-router-dom";
  // title, place, period, price 
function LinkCard({ image, adults, origin, destination, date, currency, title, place, period, price 

}) {
  
  const navigate = useNavigate();
  const onButtonPress = async (e) => {
    e.preventDefault();
    navigate(
      `/direction?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`
    );
  };
  return (
    <>
      <div className={s.BpkCard}>

        {/* <div className={s.BpkImage}>
          <img src={image} className={s.image} />
        </div>
        <div className={s.InternalLinkCard}>
          <div className={s.InternalLinkTitle}>{title}</div>
          <div className={s.directionTitle}>{place}</div>
          <div className={s.dateTitle}>{period}</div>
          <div className={s.priceTitle}>
            {price}

            <button className={s.buttonSelect} 
        
            >Select</button>
          </div>
        </div> */}
          <form className={s.BpkImage} onSubmit={onButtonPress}>
          <img src={image} className={s.image} />
        <div className={s.InternalLinkCard}>
          <div className={s.info}>{origin} {" "} {destination} {" "} {date} {" "} {currency} {" "} {adults} </div>
          <div className={s.InternalLinkCard}>
          <div className={s.InternalLinkTitle}>{title}</div>
          <div className={s.directionTitle}>{place}</div>
          <div className={s.dateTitle}>{period}</div>
          <div className={s.priceTitle}>
            {price}

            <button className={s.buttonSelect} 
        
            >Select</button>
          </div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default LinkCard;
