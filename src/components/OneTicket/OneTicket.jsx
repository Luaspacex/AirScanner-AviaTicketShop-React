import React, { useState,useEffect } from "react";

import Tickets from "../Tickets/Tickets";
import s from "./OneTicket.module.scss";

const linkpoint = process.env.REACT_APP_ENDPOINT || "";

export function OneTicket(){
  const [cartData, setCartData] = useState("");
  
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const response = await fetch(`${linkpoint}/users/${localStorage.getItem("userId")}`);
    const data = await response.json();
    console.log(data);
    setCartData(data);
    console.log(cartData);
  };

  localStorage.setItem('sample-data', JSON.stringify(cartData?.cart));

  return (
    
    <div className={s.category}>
                   { cartData?.cart?.map((ticket) => (
                    <Tickets 
                        id={ticket.id}
                        key={ticket.id}
                        className={s.ticket}
                        price={ticket.price}
                        destination={ticket.destination}
                        origin={ticket.origin}
                        durationInMinutes={ticket.durationInMinutes}
                        departure={ticket.departure}
                        logoUrl={ticket.logoUrl}
                        marketingCarrier={ticket.marketingCarrier}
                        arrival={ticket.arrival}
                        withButton={false}
                        />
                    ))}
                    </div>
                )
}

export default OneTicket;
