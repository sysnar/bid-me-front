import { Outlet } from "react-router-dom";
import OfficeHeader from "./office/OfficeHeader";

function OfficeLayout() {
  return (
    <>
      <OfficeHeader>
        <Outlet />
      </OfficeHeader>
    </>
  );
}

export default OfficeLayout;
