import React from "react";
import { cardsData } from "../../data/cardsData";
import LinkCard from "../../components/LinkCard";
// import  "./styles.css";
import s from "./Cards.module.scss"

function Cards() {
  
  return (
      
    <div className={s.cardsContainer}>
        {cardsData.map((elem) => (
          <LinkCard
            id={elem.id}
            image={elem.image}
            title={elem.title}
            key={elem.id}
          />
        ))}
      </div>
  );
}
export default Cards;