import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { logOut } from "../../store/userSlice";
// import {generateDiceBearAvataaars} from "./utils";
// import {getRandomOptions} from "./utils/bigheads";

import s from "./Navigation.module.scss";

// export const generateDiceBearAvataaars = (seed) => `https://avatars.dicebear.com/api/avataaars${seed}.svg`;
function Navigation({variant ="feed"}) {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut())
  }

  return (
    <div className={s.navigation}>

      <div className={s.profile}>
      <div className={s.loginText}>{user.login}</div>
      {user.image && <img src={user.image} className={s.imageUser} alt="" />}
      {/* <img src={generateDiceBearAvataaars(Math.random())} width="200" alt="avataars_avatar"/> */}
      </div>
      {/* <div className={s.navButtons}>
      <Link to="/" className={`${variant === "feed" ? s.navigation : ""}`}>
      <Button className={s.feed} >Feed
      </Button>
      </Link>
      <Button className={s.friends} >Friends</Button>
      </div> */}
      <button onClick={onLogOut} className={s.logOut}>LogOut</button>
    </div>
  );
}

export default Navigation;
