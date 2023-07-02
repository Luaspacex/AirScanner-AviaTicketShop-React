import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardsData } from "../../data/cardsData";
import { Link, useNavigate } from "react-router-dom";
import LinkCard from "../../components/LinkCard";
import s from "./Cards.module.scss";

function Cards() {
  const navigate = useNavigate();

  const dispatch = useDispatch();;

  // const [destination, setDestination] = useState("");
  // const [origin, setOrigin] = useState("");
  // const [date, setDate] = useState("");
  // const [currency, setCurrency] = useState("");
  // const [adults, setAdults] = useState("");
  // const [response, setResponse] = useState("");
  // const endpoint = "https://skyscanner44.p.rapidapi.com/search?";

  // const onAdultChange = (event) => {
  //   setAdults(event.target.value);
  // };
  // const onOriginChange = (event) => {
  //   setOrigin(event.target.value);
  // };
  // const onDestinationChange = (event) => {
  //   setDestination(event.target.value);
  // };
  // const onDateChange = (event) => {
  //   setDate(event.target.value);
  // };
  // const onCurrencyChange = (event) => {
  //   setCurrency(event.target.value);
  // };
  // const onResponseChange = (event) => {
  //   setResponse(event.target.value);
  // };


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
