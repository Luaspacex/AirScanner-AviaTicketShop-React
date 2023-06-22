import React from "react";
import logo from "../../images/Skyscanner-logo.png";
import userLogin from "../../images/userLogin.png";
import burgerMenu from "../../images/burgerMenu.png";
import { logOut } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./Header.module.scss";

function Header() {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOut());
  };

  return (<>
    <header className={s.wrapper}>
      <div className={s.headerInner}>
        <div className={s.logoBlock}>
          <img src={logo} alt="logo" className={s.companyLogo} />
        </div>

        <div className={s.authBlock}>
          <img src={userLogin} alt="user" className={s.userLogin} />
          {/* <p className={s.loginText}>Log in</p> */}
               <button onClick={onLogOut} className={s.logOut}>
              LogOut
            </button>
          <img src={burgerMenu} alt="menu" className={s.burgerMenu} />
        </div>
      </div>
    </header>

    </>
  );
}

export default Header;
