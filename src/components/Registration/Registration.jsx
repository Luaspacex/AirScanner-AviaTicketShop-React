import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import Input from "../Input";
import { authUser, regUser, dismissError } from "../../store/userSlice";
import countryData from "../../data/countryData.json"
import bcrypt from "bcryptjs"
import s from "./Registration.module.scss";

function Registration() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { error } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [contactNoPrefix, setContactNoPrefix] = useState("");
  // const [confirm, setConfirm] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // const onConfirmChange = (event) => {
  //   setConfirm(event.target.value);
  // };
  const handleSignUp = async (event) => {
    event.preventDefault();
    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }

    // validate phone number
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(contactNo)) {
      alert("Invalid phone number");
      return;
    }

    // hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    dispatch(regUser({login:email,password,contactNo,cart:[]})).then(()=> {
      navigate("/")
      enqueueSnackbar({ message: "You've been registered successfully", variant: "success" })
    });
  };

  const handleSelectChange = (event) => {
    const selectedCountry = event.target.value;
    const selectedCountryData = countryData.find(
      (country) => country.code === selectedCountry
    );
    setContactNoPrefix(selectedCountryData.code);
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar({ message: error, variant: "error" });
      dispatch(dismissError());
    }
  }, [error]);

  // const onSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!email) {
  //     enqueueSnackbar({ message: "There is no E-mail", variant: "error" });
  //     return;
  //   }
  //   if (!password) {
  //     enqueueSnackbar({ message: "There is no Password", variant: "error" });
  //     return;
  //   }
  //   dispatch(regUser({ login: email, password }));
  // };

  return (
    <form className={s.email_address} onSubmit={handleSignUp}>
      <div className={s.inputs}>
        <Input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="First Name"
        />
        
        <Input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Last Name"
        />

        <Input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-mail address"
        />
        <Input
          // type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
          title="Must contain at least one  number and one uppercase and lowercase letter one special character, and at least 8 or more characters"
        />
         <div className={s.contact_no_container}>
            <select
              id="contactNoPrefix"
              className={s.contactNoPrefix}
              name="phone_prefix"
              required
              onChange={handleSelectChange}
            >
              <option value="+7" className={s.number}>🇰🇿 +7</option>
              {countryData.map((country) => (
                <option key={country.name} value={country.code}>
                  {country.flag}
                  {country.code}
                </option>
              ))}
            </select>
            <input
              className={s.contactNo}
              type="text"
              id="contactNo"
              required
              value={contactNo}
              placeholder="Contact Number"
              onChange={(event) => setContactNo(event.target.value)}
            />
          </div>
        {/* <Input
          value={confirm}
          onChange={onConfirmChange}
          placeholder="Try password"
        /> */}
      </div>
      <button type="submit" className={s.regButton}>Sign Up</button>
    </form>
  );
}

export default Registration;
