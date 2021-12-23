import { ReactChild } from "react";
import HomeFooter from "./home/HomeFooter";
import HomeHeader from "./home/HomeHeader";
import HomeMain from "./home/HomeMain";

function HomeLayout() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </HomeWrapper>
  );
}

interface WrapperProps {
  children: ReactChild | ReactChild[];
}
function HomeWrapper({ children }: WrapperProps) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}

export default HomeLayout;
