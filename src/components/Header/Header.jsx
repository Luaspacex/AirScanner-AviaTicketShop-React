import React,{useState} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../images/airScannerColor.png";
import userLogin from "../../images/userLogin1.png";
import burgerMenu from "../../images/burgerMenu1.png";
import cart from "../../images/cart.png"
import { logOut } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./Header.module.scss";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
          <Link to="/settings">
            <p className={s.account}>{user.login}</p>
            </Link>
             <Link to={`/passenger`} relative="path">
            <button className={s.cartBlock}><img src={cart} alt="cart" /></button> </Link>
            <button className={s.burgerButton} onClick={toggleMenu}>
            <img src={burgerMenu} alt="menu" className={s.burgerMenu} />
            {showMenu && (
                <div className={s.burgerBlock}>
                  <div className={s.menuItems} >
                  <li>
                    <a href="/sightseeing">🔵 Sightseeing</a>
                  </li>
                  <li>
                    <a href="/company">🔵 About Company</a>
                  </li>
                  <li>
                    <a href="/contacts">🔵 Contacts </a>
                  </li>
                </div>
                </div>
              )}
    </button>
        </div>
      </div>
    </header>

    </>
  );
}

export default Header;
