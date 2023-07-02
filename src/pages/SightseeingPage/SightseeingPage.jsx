import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Places from "../Places/Places";
import s from "./SightseeingPage.module.scss"
 function SightseeingPage(){
    return(
        <>
        <Header />
            <Places/>
        <Footer/>
        </>
    )
 }
 export default SightseeingPage;