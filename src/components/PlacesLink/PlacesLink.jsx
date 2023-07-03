import React, { useState, useEffect } from "react";
import { cardsData } from "../../data/cardsData";
import s from "./PlacesLink.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function PlacesLink({ image, title }) {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const onButtonPress = async (e) => {
    e.preventDefault();
    navigate(`/result?title=${title}`);
  };
  return (
    <>
      <div className={s.BpkCard}>
        <div className={s.BpkImage}>
          <img src={image} className={s.image} />
        </div>
        <div className={s.InternalLinkCard}>
          <div className={s.InternalLinkTitle}>{title}</div>
          <div className={s.priceTitle}>
            <button className={s.buttonSelect} onClick={onButtonPress}>
              Read
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PlacesLink;
