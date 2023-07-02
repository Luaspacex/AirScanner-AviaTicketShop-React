import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import AuthorizationPage from "./pages/AuthorizationPage";
import MainPage from "./pages/MainPage"
import DirectionRoute from "./pages/DirectionRoute";
import SelectTicket from "./pages/SelectTicket";
import CheckOut from "./pages/CheckOut/CheckOut";
import SightseeingPage from "./pages/SightseeingPage";
import AboutCompany from "./pages/AboutCompany"
import Contacts from "./pages/Contacts"
import SuccessPage from "./pages/SuccessPage/SucsessPage";
import ErrorPage from "./pages/ErrorPage"
import GoogleAnswer from "./pages/GoogleAnswer"
// import FeedPage from "./pages/FeedPage";
// import PostPage from "./pages/PostPage/PostPage";
// import PostCreator from "./pages/PostCreator/PostCreator"
// import SettingPage from "./pages/SettingPage/SettingsPage"
function Router() {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        {!user && (
          <>
            <Route path="/*" element={<AuthorizationPage />} />
            <Route
              path="/registration"
              element={<AuthorizationPage variant="registration" />}
            />
          </>
        )}
        {user && (
          <Route path="/*" element={<MainLayout />}>
            <Route index element={<MainPage/>}  />
            {/* <Route path="/direction" index element={<DirectionRoute/>} /> */}
          </Route>
        )}
            {user && (
          <Route path="/direction" element={<MainLayout />}>
            <Route index element={<DirectionRoute/>}  />
            {/* <Route path="/direction" index element={<DirectionRoute/>} /> */}
          </Route>
        )}
           {user && (
          <Route path="/passenger" element={<SelectTicket/>}>
            <Route index element={<DirectionRoute/>}  />

          </Route>
        )}
          {user && (
          <Route path="/checkout" element={<CheckOut/>}>
            <Route index element={<SelectTicket/>}  />
          </Route>
        )}

      {user && (
          <Route path="/success" element={<SuccessPage/>}>
            <Route index element={<CheckOut/>}  />
          </Route>
        )}
        {user && (
          <Route path="/*" element={<MainPage/>}>
            <Route index element={<SuccessPage/>}  />
          </Route>
        )}

          {user && (
          <Route path="/company" element={<AboutCompany/>}>
            <Route index element={<MainPage/>}  />
          </Route>
        )}
           {user && (
          <Route path="/contacts" element={<Contacts/>}>
            <Route index element={<MainPage/>}  />
          </Route>
        )}
         {user && (
          <Route path="/sightseeing" element={<SightseeingPage/>}>
            <Route index element={<MainPage/>}  />
          </Route>
        )}
           {user && (
          <Route path="/result" element={<GoogleAnswer/>}>
            <Route index element={<SightseeingPage/>}  />
          </Route>
        )}
       {/* {user && (
          <Route path="/passenger" element={<FormTicket/>}>
            <Route index element={<DirectionRoute/>}  />

          </Route>
        )} */}

        {/* {user && (
          <Route path="/posts/:id" element={<MainLayout />}>
            <Route index element={<PostPage />} />
          </Route>
        )} */}
         {/* {user && (
          <Route path="/posts/createPosts" element={<MainLayout />}>
            <Route index element={<PostCreator />} />
          </Route>
        )} */}
         {/* {user && (
          <Route path="/user/settings" element={<MainLayout />}>
            <Route index element={<SettingPage />} />
          </Route>
        )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
