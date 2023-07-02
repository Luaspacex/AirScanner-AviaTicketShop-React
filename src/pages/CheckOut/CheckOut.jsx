import React,{useState, useEffect,useRef} from "react";
import emailjs from "emailjs-com";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import Button from "../../components/Button";
import pay from "../../images/mastercard.png"
import cards from "../../images/carts.png"
import s from "./CheckOut.module.scss";


function CheckOut() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();
  const [card, setCard] = useState({
    cardno: '',
    cardtype: 'far fa-credit-card',
    expirydt: ''
  });

  const onChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/[^0-9]/g, '') // Remove non-numeric characters
      .slice(0, 16); // Limit input to 16 digits

    const isValidCard = isValidLuhn(formattedValue);

    setCard((prevCard) => ({
      ...prevCard,
      cardno: formattedValue,
      isValid: isValidCard
    }));
  };

  const isValidLuhn = (value) => {
    let sum = 0;
    let alternate = false;

    for (let i = value.length - 1; i >= 0; i--) {
      let digit = parseInt(value.charAt(i), 10);

      if (alternate) {
        digit *= 2;
        if (digit > 9) {
          digit = (digit % 10) + 1;
        }
      }

      sum += digit;
      alternate = !alternate;
    }

    return sum % 10 === 0 && sum > 0;
  };

  const cardnumber = (inputtxt) => {
    const cardno = inputtxt.split(' - ').join('');
    let cardtype1 = card.cardtype;

    const visa = /^(?:4[0-9]{2}?)$/;
    const mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
    const amexpRegEx = /^(?:3[47][0-9]{3})$/;
    const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;

    if (visa.test(cardno)) {
      cardtype1 = 'far fa fa-3x fa-cc-visa carddetail-cardtype';
    } else if (mastercardRegEx.test(cardno)) {
      cardtype1 = 'far fa fa-3x fa-cc-mastercard carddetail-cardtype';
    } else if (amexpRegEx.test(cardno)) {
      cardtype1 = 'far fa fa-3x fa-cc-amex carddetail-cardtype';
    } else if (discovRegEx.test(cardno)) {
      cardtype1 = 'far fa fa-3x fa-cc-discover carddetail-cardtype';
    }
    return cardtype1;
  };

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, '').substr(0, 16);
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(' - ') : value;
  };

  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, '').substring(0, 2) +
      (expdate.length > 2 ? '/' : '') +
      expdate.replace(/\//g, '').substring(2, 4);
    return expDateFormatter;
  };

  const onChangeExp = (e) => {
    setCard((prevCard) => ({
      ...prevCard,
      expirydt: e.target.value
    }));
  };

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_it1i2ac', 'template_puq4f2s', form.current, "CVM2fcDflm-brY0Ia")
        .then((result) => {
            console.log(result.text);
            setIsEmailSent(true);
            setTimeout(() => {
              // Navigate to "/success" path after a delay of 2 seconds
              setIsEmailSent(false);
              navigate("/success");
            }, 1000); // 2000 milliseconds = 2 seconds
        }, (error) => {
            console.log(error.text);
        });
    };
    // const sendOrder = (email, subject, message, total) => {
    //   const templateParams = {
    //     subject: subject,
    //     message: message,
    //     total: total,
    //     to_email: adore.space@mail,
    //   };
    // }
  
  return (
    <>
      <Header />
      <form
        className={s.passengerForm}
        ref={form} onSubmit={sendEmail}
        // onSubmit={onPassengerForm}
      >
        <div className={s.main}>
          <h2 className={s.info}>Passenger information:</h2>
          <div className={s.name_group}>
            <label> Name:</label>
            <Input type="text" name="passenger_name" placeholder="John" />
          </div>
          <div className={s.surname_group}>
            <label> Surname:</label>
            <Input type="text" name="passenger_surname" placeholder="Walker" />
          </div>
          <div className={s.email_group}>
            <label> Email:</label>
            <Input
              type="email"
              name="passenger_email"
              placeholder="john.walker@email.com"
            />
          </div>
          <div className={s.phone_group}>
            <label>Phone number:</label>
            <Input
              type="tel"
              name="passenger_phone"
              placeholder="498-348-3872"
            />
          </div>
          <div className={s.birthday_group}>
            <label>Birthday date:</label>
            <Input
              type="date"
              name="passenger_birthday"
              placeholder="year month date"
            />
          </div>
          <div className={s.passport_group}>
            <label>Passport Number:</label>
            <Input
              type="passport"
              name="passenger_passport"
              placeholder="N31195855"
            />
          </div>
          <div className={s.cardBlock}>
          <figure className={s.fig}>
            <figcaption className={s.figcaption}>
            <img src={cards} alt="card" className={s.card}/>
                <input type="text" placeholder="Holder of card"
                 className={s.holder} 
                 />
                <input type="text"  
                data-mask="0000 0000 0000 0000"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                value={cc_format(card.cardno)}
                onChange={onChange}
                className={s.numberCard}
                />    {card.isValid !== undefined && !card.isValid && <p className={s.luhnCheck}>Please enter a valid card number.</p>}

                <p className={s.valid}>VALID THRU</p>
                <input type="text"
                className={s.month}  
                name="expiry-data"
                placeholder="MM / YY"
                onChange={onChangeExp}
                value={expriy_format(card.expirydt)}
/>

                <img src={pay} alt="pay_method" className={s.payMethod} />
                <input type="password" name="cvc"  
                  data-mask="000"
                  placeholder="000"
                  maxLength="3"
                  pattern="[0-9][0-9][0-9]"
                className={s.cvc} 
                />
            </figcaption>
            </figure>
          </div>
        </div>

        <div className={s.priceBox}>
      <h2 className={s.priceTotal}>Total price:</h2>
      <h2 className={s.priceCurrency}>1190$</h2>
      </div>
        <div className={s.buttonBlock}>
           <button className={s.checkOutButton} type="submit" value="Send" >Check out</button>
        </div>
      </form>
    </>
  );
}
export default CheckOut;
