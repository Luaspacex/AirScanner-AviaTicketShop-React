import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import AuthorizationPage from "./pages/AuthorizationPage";
import MainPage from "./pages/MainPage"
import DirectionRoute from "./pages/DirectionRoute";
import FormTicket from "./pages/FormTicket/FormTicket";
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
