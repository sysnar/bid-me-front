import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/exeption/NotFoundPage";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import OfficeLayout from "../layouts/OfficeLayout";
import OfficePage from "../pages/OfficePage";
import SearchPage from "../pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="search/:keyword" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/office" element={<OfficeLayout />}>
        <Route index element={<OfficePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
