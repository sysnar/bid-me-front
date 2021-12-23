import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/exeption/NotFoundPage";
import Office from "./user/UserRouter";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="/office" element={<Office />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
