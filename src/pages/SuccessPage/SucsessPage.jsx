import React from "react";
import { Link } from "react-router-dom";
import successImage from "../../images/07.png"
import s from "./SuccessPage.module.scss";

function SuccessPage (){
    return(
        <div className={s.container}>
            <img src={successImage} alt="success" className={s.successImage} />
            <h2 className={s.paymentText}>Payment successful! </h2>
            <h6 className={s.completeText}>You have completed your payment. </h6>
            <h6 className={s.amount}>AMOUNT PAID</h6>
            <h4 className={s.price}>1190$</h4>
            <Link to={`/`} relative="path">
            <button className={s.goButton}>Go to main page</button>
            </Link>
        </div>
    )
}
export default SuccessPage;