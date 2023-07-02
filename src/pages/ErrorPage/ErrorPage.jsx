import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import errorImage from "../../images/error.png"
import s from "./ErrorPage.module.scss";
function ErrorPage() {
        // const handleSomeError = () => {
        //   // Handle the error
        //   // For example, using try-catch block
        //   try {
        //     // Code that may throw an error
        //   } catch (error) {
        //     setHasError(true); // Set the error state to true
        //   }
        // };
    return(
        <div className={s.container}>
        <img src={errorImage} alt="error" className={s.errorImage} />
        <h2 className={s.paymentText}>Error Processing Payment </h2>
        <h6 className={s.completeText}>Please check your security code, card <br />
        details and connection and try again. </h6>
        <Link to={`/`} relative="path">
        <button className={s.goButton}>Go to main page</button>
        </Link>
    </div>
    )
}
export default ErrorPage;