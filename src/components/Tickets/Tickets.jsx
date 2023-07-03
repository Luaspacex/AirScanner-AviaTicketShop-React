import React, { useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import Button from "../Button";
import oneStopFlight from "../../images/onestop.png";
import DirectionRoute from "../../pages/DirectionRoute";
import s from "./Tickets.module.scss";
import { onSubmitPress } from "../../pages/DirectionRoute/DirectionRoute";

const endpoint = "https://skyscanner44.p.rapidapi.com/search";
const linkpoint = process.env.REACT_APP_ENDPOINT || "";

function Tickets({
  logoUrl,
  marketingCarrier,
  departure,
  origin,
  durationInMinutes,
  arrival,
  destination,
  price = "",
  id,
  getUserData,
}) {
  const [userData, setUserData] = useState("");
  const [response, setResponse] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const adults = searchParams.get("adults");
  const date = searchParams.get("departureDate");
  const currency = searchParams.get("currency");
  const onSubmitPress = async () => {
    localStorage.setItem("ticketId", id);
    let flightDetails = {
      id: id,
      arrival: arrival,
      departure: departure,
      origin: origin,
      destination: destination,
      marketingCarrier: marketingCarrier,
      price: price,
      durationInMinutes: durationInMinutes,
      logoUrl: logoUrl,
    };

    let cart = getUserData.cart;
    if (cart.includes(id)) {
      return;
    }
    const requestUrl = await fetch(
      `${linkpoint}/users/${localStorage.getItem("userId")}`,
      {
        method: "PATCH",
        body: JSON.stringify({ cart: [...cart, flightDetails] }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setUserData((prev) => ({ ...prev, cart: [...cart, flightDetails] }));
    console.log(getUserData);
    const data = await requestUrl.json();
    return data;
  };
  return (
    <>
      <div className={s.ticket}>
        <div className={s.imageLogo}>
          <img src={logoUrl} alt="logo" className={s.airplaneLogo} />
          <p className={s.marketingCarrier}>{marketingCarrier}</p>
        </div>
        <div className={s.departure}>
          <h2 className={s.departureTime}>{departure}</h2>
          <h6 className={s.origin}>{origin}</h6>
        </div>
        <div className={s.stops}>
          <p>{durationInMinutes}</p>
          <img src={oneStopFlight} alt="one_stop" className={s.oneStop} />
        </div>
        <div className={s.arrival}>
          <h2 className={s.arrivalTime}>{arrival}</h2>
          <h6 className={s.destination}>{destination}</h6>
        </div>
        <h6 className={s.price}>{price}</h6>
        <Button className={s.selectButtons} onClick={onSubmitPress}>
          Select
        </Button>
      </div>
    </>
  );
}
export default Tickets;
