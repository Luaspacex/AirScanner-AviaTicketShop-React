import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import image from "../../images/airastana.png";
import oneStopFlight from "../../images/onestop.png";
import DirectionRoute from "../DirectionRoute";
import s from "./SelectTicket.module.scss";
function SelectTicket() {
  const [response, setResponse] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState("");
  const adults = searchParams.get("adults");
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const date = searchParams.get("departureDate");
  const currency = searchParams.get("currency");

  //   const endpoint =
  // `${endpoint}?adults=${adults}&origin=${origin}&destination=${destination}&departureDate=${date}&currency=${currency}`;
  //   useEffect(()=> {
  //       const getData = async () => {
  //           try {
  //               const response = await fetch(
  //                 `${response}?id${id}`,
  //                 {
  //                   method: "GET",
  //                   headers: {
  //                     "X-RapidAPI-Key":
  //                       "567555ec4cmsh0061ec1aa26d0d8p1e9c52jsn292daed32b69",
  //                     "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
  //                     "Content-Type": "application/json",
  //                   },
  //                 }
  //               );
  //               const data = await response.json();
  //               setResponse(data.itineraries.buckets);
  //               // console.log(data.itineraries.buckets);
  //             } catch (error) {
  //               return error;
  //             }
  //       }
  //       getData()
  //    },[response])
  //   console.log(response);
  return (
    <>
      <Header />
      <div className={s.ticket}>
        <div className={s.imageLogo}>
          <img src={image} alt="air_astana" className={s.airAstanaLogo} />
          <p className={s.imageInnerText}>Air Astana </p>
        </div>
        <div className={s.departure}>
          <h2 className={s.departureTime}>2023.09.08  <br /> 06:35</h2>
          <h6>Almaty</h6>
        </div>
        <div className={s.stops}>
          <p>6h 30m</p>
          <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
        </div>
        <div className={s.arrival}>
          <h2 className={s.arrivalTime}> 2023.09.08  <br /> 06:35</h2>
          <h6 className={s.arrivalTime}>Istanbul</h6>
        </div>
        <h6 className={s.price}>T 101 653</h6>
        <div className={s.quantityGroup}>
        <button className={s.plus}>+</button>
        <input type="number" className={s.inputQuantity} placeholder="1"/>
        <button className={s.minus}>-</button>
        </div>
      </div>
      
      <div className={s.ticket}>
        <div className={s.imageLogo}>
          <img src={image} alt="air_astana" className={s.airAstanaLogo} />
          <p className={s.imageInnerText}>Air Astana </p>
        </div>
        <div className={s.departure}>
          <h2 className={s.departureTime}>2023.09.08 <br /> 06:35</h2>
          <h6>Almaty</h6>
        </div>
        <div className={s.stops}>
          <p>6h 30m</p>
          <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
        </div>
        <div className={s.arrival}>
          <h2 className={s.arrivalTime}> 2023.09.08  <br /> 06:35</h2>
          <h6 className={s.arrivalTime}>Istanbul</h6>
        </div>
        <h6 className={s.price}>T 101 653</h6>
        <div className={s.quantityGroup}>
        <button className={s.plus}>+</button>
        <input type="number" className={s.inputQuantity} placeholder="1" />
        <button className={s.minus}>-</button>
        </div>
      </div>
      <div className={s.priceBox}>
      <h2 className={s.priceTotal}>Total price:</h2>
      <h2 className={s.priceCurrency}>1190$</h2>
      </div>

      <div className={s.buttonBlock}>
      <Link to={`/checkout`} relative="path">
      <button className={s.checkOutButton}>Check out</button>
      </Link>
      </div>
      <div className={s.space}></div>
      <Footer />
    </>
  );
}
export default SelectTicket;
