import Box from "@mui/material/Box";

import { NavBar } from "@/components/navBar/NavBar.tsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box>
      <NavBar>
        <Outlet />
        {/*Notifications*/}
      </NavBar>
    </Box>
  );
};
