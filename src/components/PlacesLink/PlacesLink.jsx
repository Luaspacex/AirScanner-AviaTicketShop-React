import React, { useState, useEffect } from "react";
import { cardsData } from "../../data/cardsData";
import s from "./PlacesLink.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function PlacesLink({ image, title }) {
  
  const [data, setData] = useState();

  // useEffect(() => {
  //   const getData = async () => {
  //     const apiKey =
  //       "08055d42b197991a23c1c937accab7c631deffc59e10db04c83327dc104833cc";
  //     const url = `http://localhost:8010/proxy/search.json?engine=google&q=Maldives+Destinations&api_key=${apiKey}`;
      
  //     try {
  //       const response = await axios.get(url);
  //       setData(response?.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   console.log(data);
  //   getData();
  // }, []);
  const navigate = useNavigate();
    const onButtonPress = async (e) => {
    e.preventDefault();
    navigate(
      `/result?title=${title}`
    );
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

            <button className={s.buttonSelect} 
            onClick={onButtonPress}
            
            >Read</button>
          </div>
        </div>
      </div> 
     
      
    </>
  );
}
export default PlacesLink;

// 5ae2e3f221c38a28845f05b6802a4d5251f64c5a1d7f9537a842cd36