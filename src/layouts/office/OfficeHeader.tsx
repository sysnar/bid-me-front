import { useState } from "react";
import {
  DesktopWrapper,
  MobileMenu,
  SidebarLogo,
  SidebarNavigation,
  SidebarWrapper,
} from "../../components/Sidebar";

function OfficeHeader() {
  const [isOpen, setSidebar] = useState(true);
  return (
    <SidebarWrapper>
      <MobileMenu setSidebar={setSidebar} />
      <DesktopWrapper isOpen={isOpen}>
        <SidebarLogo />
        <SidebarNavigation />
      </DesktopWrapper>

      {/* content */}
      <div className="p-10 text-2xl font-bold">content go es here</div>
    </SidebarWrapper>
  );
}

export default OfficeHeader;
