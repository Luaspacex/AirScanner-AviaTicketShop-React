import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsData } from "../../data/cardsData";
import { Link, useNavigate } from "react-router-dom";
import LinkCard from "../../components/LinkCard";
import s from "./Cards.module.scss";

function Cards() {
  const navigate = useNavigate();
  const dispatch = useDispatch();;
  return (
    <>
      <div className={s.cardsContainer}>
        {cardsData.map((elem) => (
          <LinkCard
            id={elem.id}
            className={s.linkCard}
            key={elem.id}
            image={elem.image}
            title={elem.title}
            place={elem.place}
            period={elem.period}
            price={elem.price}
            adults={elem.adults}
            origin={elem.origin}
            destination={elem.destination}
            date={elem.date}
            currency={elem.currency}
          />
      
        ))}
      </div>
    </>
  );
}
export default Cards;
