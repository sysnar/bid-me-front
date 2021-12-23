import { ReactChild } from "react";
import { Outlet } from "react-router-dom";
import { WrapperProps } from "../utils/wrapper.interface";
import HomeFooter from "./home/HomeFooter";
import HomeHeader from "./home/HomeHeader";

function HomeLayout() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <HomeFooter />
    </HomeWrapper>
  );
}

function HomeWrapper({ children }: WrapperProps) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}

function MainWrapper({ children }: WrapperProps) {
  return <div className="flex flex-1 flex-col">{children}</div>;
}

export default HomeLayout;
