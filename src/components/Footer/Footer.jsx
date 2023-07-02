import React from "react";
import s from "./Footer.module.scss";

function Footer() {
 
  return (<>
    <footer className={s.wrapper}>
     <div className={s.blockName}>
        <a href="#" className={s.list}>About Company</a>
        <a href="#"className={s.list}>Trips</a>
        <a href="#"className={s.list}>Contacts</a>
        <a href="#"className={s.list}>Help</a>
        <a href="#"className={s.list}>Sightseeing</a>
        <a href="#"className={s.list}>Search ticket</a>
     </div>
     <div className={s.text}> 
        <p>Compare and book cheap flights from anywhere, to everywhere</p>
        <p>© Skyscanner Ltd 2023</p>
        </div>
    </footer>
    </>
  );
}

export default Footer;
