import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/exeption/NotFoundPage";
import Home from "../layouts/home/HomeMain";
import Office from "./user/UserRouter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/office" element={<Office />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
