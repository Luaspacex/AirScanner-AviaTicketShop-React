import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import OneTicket from "../../components/OneTicket/OneTicket";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import image from "../../images/airastana.png";
import oneStopFlight from "../../images/onestop.png";
import DirectionRoute from "../DirectionRoute";
import s from "./SelectTicket.module.scss";
const linkpoint = process.env.REACT_APP_ENDPOINT || "";
function SelectTicket() {
  const [response, setResponse] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [id, setId] = useState("");
  const adults = searchParams.get("adults");
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const date = searchParams.get("departureDate");
  const currency = searchParams.get("currency");
  const [userLogin, setUserLogin] = useState("");
  const getUserLogin = async () => {
    const userRequest = await fetch(`${linkpoint}/users/${localStorage.getItem("userLogin")}`);
    const data = await userRequest.json();
    console.log(data);
    setUserLogin(data);

    console.log(data);
  };
  useEffect(() => {
    
    getUserLogin();

  }, []);
 
  return (
    <>
      <Header />
      <div className={s.space}></div>
      <div className={s.wrapper}>
      <OneTicket />
   
      <div className={s.buttonBlock}>
      <Link to={`/checkout`} relative="path">
      <button className={s.checkOutButton}>Check out</button>
      </Link>
 
 
      </div>
      </div>
      <div className={s.space}></div>
      <Footer />
    </>
  );
}
export default SelectTicket;
