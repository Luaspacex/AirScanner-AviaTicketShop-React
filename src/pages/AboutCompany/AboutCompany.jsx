import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo from "../../images/airScannerColor.png";
import banner from "../../images/banner.png"
import s from "./AboutCompany.module.scss";
function AboutCompany() {
  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <img src={logo} alt="airScanner" className={s.logo} />
        <div className={s.textBlock}>
          <p>
            <b>AirScanner</b> has been changing the world of travel by empowering customers to go on journeys that move them.
            <br /> <br />
            Whether it’s getting to a bustling tourist hub such as Paris, France, or a relaxing town like Motril, Spain, our pioneering and practical platform helps travelers worldwide explore Europe, the United States and Canada.
            <br /> <br />
            We bring together more than 1,000 transportation providers across trains, buses, flights, ferries, cars, and airport transfers to make it easier for you to focus on what really matters: the journey. Choosing us means saving time and money while loving the journey you’re on.
            <br /> <br />
            When we&nbsp;started in&nbsp;2023, we&nbsp;set out
            to&nbsp;do&nbsp;things differently. We&nbsp;wanted to&nbsp;show
            travellers all flight options in&nbsp;one place, creating
            a&nbsp;simple alternative to&nbsp;the confusing sites that make
            travel feel like hard work. Fast forward to&nbsp;today and
            we&rsquo;re a&nbsp;global leader in&nbsp;travel, with more than 100
            million people across the world using our app and website every
            month. We&nbsp;pride ourselves on&nbsp;being transparent and
            unbiased, searching billions of&nbsp;prices for flights, hotels and
            car hire to&nbsp;help find the best deals available.
            <br /> <br />
            We&rsquo;re on&nbsp;a&nbsp;mission to&nbsp;help travellers plan and
            book their trip with ease and confidence. Whether it&rsquo;s using
            technology to&nbsp;make the complex simple or&nbsp;connecting
            travellers with trusted partners to&nbsp;provide honest and
            transparent solutions, we&rsquo;re determined to&nbsp;help everyone
            find the best offer for them.
            <br /> <br/>
          </p>
        </div>
        <div className={s.banner}>
        <figure className={s.fig}>
          <img src={banner} alt="banner" className={s.bannerImage} />
          <figcaption className={s.figcaption}>
            <h2 className={s.bannerWords}>
              Plan the ultimate <br></br> summer trip!{" "}
            </h2>
            <p className={s.bannerSecWords}>
              Find destination inspiration, tips and<br></br>{" "} money-saving hacks.
            </p>
      
          </figcaption>
        </figure>
      </div>
      </div>
      <Footer />
    </>
  );
}
export default AboutCompany;
