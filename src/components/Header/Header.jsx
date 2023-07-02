import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/airScannerColor.png";
import userLogin from "../../images/userLogin1.png";
import burgerMenu from "../../images/burgerMenu1.png";
import cart from "../../images/cart.png"
import { logOut } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./Header.module.scss";

function Header() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOut());
  };

  return (<>
    <header className={s.wrapper}>
      <div className={s.headerInner}>
        <div className={s.logoBlock}>
          <Link to="/">
          <img src={logo} alt="logo" className={s.companyLogo} />
          </Link>
        </div>
        <div className={s.authBlock}>
          <img src={userLogin} alt="user" className={s.userLogin} />
            <p className={s.account}>{user.login}</p>
               {/* <button onClick={onLogOut} className={s.logOut}>
              LogOut
            </button> */}
             <Link to={`/passenger`} relative="path">
            <button className={s.cartBlock}><img src={cart} alt="cart" /></button> </Link>
            <img src={burgerMenu} alt="menu" className={s.burgerMenu} />
  
        </div>
      </div>
    </header>

    </>
  );
}

export default Header;
