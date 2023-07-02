import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

import Input from "../Input";
import { auth, authUser, dismissError } from "../../store/userSlice";

import s from "./Authorization.module.scss";


function Authorization() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, isLoading } = useSelector((store) => store.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState({});
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
  useEffect(() => {
    if (error) {
      enqueueSnackbar({ message: error, variant: "error" });
      dispatch(dismissError())
    }
  }, [error]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      enqueueSnackbar({ message: "There is no E-mail", variant: "error" });
      return;
    }
    if (!password) {
      enqueueSnackbar({ message: "There is no Password", variant: "error" });
      return;
    }

    dispatch(authUser({ login: email, password })).then(() => {
      navigate("/")
      enqueueSnackbar({ message: "Greate job, You've authorized", variant: "success" });
    });
  };

  return (
    <form className={s.email_address} onSubmit={onSubmit}>
      <div className={s.inputs}>
        <Input
          value={email}
          onChange={onEmailChange}
          placeholder="Your E-mail"
          label="Email address"
        />
        <div className={s.passwordBlock}>
        <Input
          type={type}
          name="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Your Password"
          label="Password"
          onClick={handleToggle}
        />
         <Icon className={s.icon} icon={icon} size={25} onClick={handleToggle}/>
         </div>
      </div>
      <button type="submit" disabled={isLoading} className={s.authButton}>
        {isLoading ? "Loading..." : "Log In"}
      </button>
    </form>
  );
}

export default Authorization;
