import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import CustomAppBar from "./components/CustomAppBar";
import AppLogoImage from "./assets/SEED-Logo.png";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: 1,
        height: 1,
      }}
    >
      {/* Left Elements */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          maxWidth: "20rem",
          minWidth: "15rem",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          sx={{
            objectFit: "contain",
            objectPosition: "center",
            bgcolor: "primary.light",
            height: "5rem",
          }}
          src={AppLogoImage}
          alt=""
        />
        <SideMenu />
      </Box>

      {/* Right Elements */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 7,
          bgcolor: "background.paper",
        }}
      >
        <CustomAppBar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
