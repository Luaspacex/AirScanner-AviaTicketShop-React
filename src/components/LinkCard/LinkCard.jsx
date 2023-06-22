import React from "react";
import s from "./LinkCard.module.scss";


function LinkCard({ image, title }) {
    
    return (
          <>
          <div className={s.BpkCard}>
            <div className={s.BpkImage}>
              <img src={image} className={s.image} />
            </div>
            <div className={s.InternalLinkCard}>
              <div className={s.InternalLinkTitle}>{title}</div>
      
              <div className={s.VerticalLinks}><a href="#"  className={s.noDecoration}> Flights</a> <a href="#" className={s.noDecoration}>Hotels</a> <a href="#" className={s.noDecoration}>Car Hire</a></div>
            </div>
          </div>
          </>
  );
}
export default LinkCard;
