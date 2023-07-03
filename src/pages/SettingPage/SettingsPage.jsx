
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSnackbar } from "notistack";
// // import { Link } from "react-router-dom";
// import Input from "../../components/Input";
// import Button from "../../components/Button";
// import { logOut } from "../../store/userSlice";
// import {changeUser} from "../../store/userSlice";

// import { settingsUser } from "../../store/userSlice";

// import s from "./SettingsPage.module.scss"
// function SettingsPage(){
//   const dispatch = useDispatch();
//   const { enqueueSnackbar } = useSnackbar();
//   const onLogOut = () => {
//     dispatch(logOut())
//   }
//   const onChangeUser= () => {
//     dispatch(changeUser())
//   }


//   const { error } = useSelector((store) => store.user);

//   const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   const onEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   // const onPasswordChange = (event) => {
//   //   setPassword(event.target.value);
//   // };

//   // useEffect(() => {
//   //   if (error) {
//   //     enqueueSnackbar({ message: error, variant: "error" });
//   //     dispatch(dismissError());
//   //   }
//   // }, [error]);

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     if (!email) {
//       enqueueSnackbar({ message: "There is no E-mail", variant: "error" });
//       return;
//     }
//     // if (!password) {
//     //   enqueueSnackbar({ message: "There is no Password", variant: "error" });
//     //   return;
//     // }

//     dispatch(settingsUser({ login: email }));
//   };


//     return(
//         <div className={s.wrapper}>
//       <div className={s.settings_block}>
//         <div className={s.settings_main}>
//           {/* <Link
//             to="/settings"
//           >
//             Settings
//           </Link> */}
   
//           <Input className={s.email} placeholder="Your E-mail"
//           label="Email address"/>
//           {/* <Input className={s.name} placeholder="Your E-mail"
//           label="Email address" value={name} onClick={onChangeUser}/> */}
//            {/* <Input className={s.avatar} placeholder="Your avatar"
//           label="Avatar"/>
//                  <Input className={s.name} placeholder="Your name"
//           label="Name"/>
//                  <Input className={s.description} placeholder="Your description"
//           label="Description"/> */}
//           <Button onClick={onChangeUser} className={s.saveButton}>Save</Button>
//           <Button onClick={onLogOut} className={s.logOut}>LogOut</Button>
//         </div>
//         {/* {<Settings/>} */}
//       </div>
//     </div>
//     )
// }
// export default SettingsPage;

import React,{useState} from "react";
import Header from "../../components/Header";
import { useDispatch,useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { changeUser } from "../../store/userSlice";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import s from "./SettingsPage.module.scss";



function SettingPage() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const { error } = useSelector((store) => store.user);

    const [email, setEmail] = useState("");
    const[userName,setUserName] = useState("");
    const[avatar,setAvatar]= useState("");
    const[description,setDescription]=useState("");

    const [users, setUsers] = useState({});

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const onUserNameChange = (event) => {
        setUserName(event.target.value);
    };
    const onAvatarChange = (event) => {
        setAvatar(event.target.value);
    };
    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        dispatch(changeUser({ login: email, userName,avatar,description }));
    };
    const handleUserChange = () => {
      const id = 1; 
      const login = "";
      const username = "new-username";
      const avatar = "new-avatar-url";
      const description = "new-description";
    
      dispatch(changeUser({ id, login, username, avatar, description }));
    }
  return (
    <>
    <Header/>
    <form className={s.email_address} onSubmit={onSubmit}>
      <div className={s.inputs}>
        <div className={s.twoInputs}>
        <input
        value={email} 
        onChange={onEmailChange} 
        placeholder="Email Address"
        label="Email Address" 
        className={s.input}
        />
        <button type="submit" className={s.saveBtn} onClick={handleUserChange}>Save
      </button>
      </div>
      <div className={s.twoInputs}>
        <input
          value={avatar}
          onChange={onAvatarChange}
          placeholder="Profile Image"
          label="Avatar"
          className={s.input}
        />
        <button type="submit" className={s.saveBtn}>Save
      </button>
      </div>
      <div className={s.twoInputs}>
        <input
          value={userName}
          onChange={onUserNameChange}
          placeholder="UserName"
          label="Name"
          className={s.input}
        />
        <button type="submit" className={s.saveBtn}>Save
      </button>
      </div>
      <div className={s.twoInputs}>
      <textarea
          value={description}
          onChange={onDescriptionChange}
          placeholder="Description"
          label="Description"
          className={s.input}
        />
      <button type="submit" className={s.saveBtn}>
        Save
      </button>
      </div>
      <button className={s.logOut}>Logout</button>
      </div>
    </form>

    <Footer/>
    </>
  );
}
export default SettingPage;
