import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsData } from "../../data/cardsData";
import { Link, useNavigate } from "react-router-dom";
import PlacesLink from "../../components/PlacesLink/PlacesLink";
import s from "./Places.module.scss";

function Places() {
  const navigate = useNavigate();

  const dispatch = useDispatch();;

  return (
    <>
      <div className={s.cardsContainer}>
        {cardsData.map((elem) => (
          <PlacesLink
            className={s.linkCard}
            key={elem.id}
            image={elem.image}
            title={elem.title}
          />
        ))}
      </div>
    </>
  );
}
export default Places;
