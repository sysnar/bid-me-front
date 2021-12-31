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
import { AuthProvider, RequireAuth } from "../utils/auth";
import { UserPage } from "../pages/UserPage";
import { BidPage } from "../pages/BidPage";
import { KeywordPage } from "../pages/KeywordPage";
import { BookmarkPage } from "../pages/BookmarkPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="search/:keyword" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          path="/office"
          element={
            <RequireAuth>
              <OfficeLayout />
            </RequireAuth>
          }
        >
          <Route index element={<OfficePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="bid" element={<BidPage />} />
          <Route path="search/:keyword" element={<SearchPage />} />
          <Route path="keyword" element={<KeywordPage />} />
          <Route path="bookmark" element={<BookmarkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
