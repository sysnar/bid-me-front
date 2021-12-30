import { useState } from "react";
import {
  DesktopWrapper,
  MobileMenu,
  SidebarLogo,
  SidebarNavigation,
  SidebarWrapper,
} from "../../components/Sidebar";
import { WrapperProps } from "../../utils/wrapper.interface";

function OfficeHeader({ children }: WrapperProps) {
  const [isOpen, setSidebar] = useState(true);
  return (
    <SidebarWrapper>
      <MobileMenu setSidebar={setSidebar} />
      <DesktopWrapper isOpen={isOpen}>
        <SidebarLogo />
        <SidebarNavigation />
      </DesktopWrapper>

      {/* content */}
      <div className="w-full h-full min-h-screen">{children}</div>
    </SidebarWrapper>
  );
}

export default OfficeHeader;
