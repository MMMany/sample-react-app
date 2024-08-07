import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import CustomAppBar from "./components/CustomAppBar";

import {RouterProvider} from 'react-router-dom';
import {CssBaseline, StyledEngineProvider} from '@mui/material';

import router from 'routes';
import NavigationScroll from 'layout/NavigationScroll';

// import CssBaseline from "@mui/material/CssBaseline";
// import { BrowserRouter } from "react-router-dom";
// import { createCustomTheme } from "./style";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import MainRouter from "./routes/MainRoutes";
// import useMediaQuery from "@mui/material/useMediaQuery";

// {/* <React.StrictMode>
//   <CustomThemeProvider>
//     <CssBaseline />
//     <BrowserRouter>
//       <MainRouter />
//     </BrowserRouter>
//   </CustomThemeProvider>
// </React.StrictMode> */}

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <NavigationScroll>
        <RouterProvider router={router} />
      </NavigationScroll>
    </StyledEngineProvider>
  )
}

// function App() {
//   return (
//     <Box
//       sx={(theme) => ({
//         display: "flex",
//         flexDirection: "row",
//         width: 1,
//         border: 1,
//         borderColor: "red",
//         height: 1,
//         mx: "auto",
//         maxWidth: theme.breakpoints.values.lg,
//       })}
//     >
//       {/* Left Elements */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           flex: 1,
//           maxWidth: "20rem",
//           minWidth: "15rem",
//           zIndex: 1,
//         }}
//       >
//         <Box
//           component="img"
//           sx={{
//             objectFit: "contain",
//             objectPosition: "center",
//             bgcolor: "primary.light",
//             height: "5rem",
//           }}
//           src={"/images/SEED-Logo.png"}
//           alt=""
//         />
//         <SideMenu />
//       </Box>

//       {/* Right Elements */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           flex: 7,
//           bgcolor: "background.paper",
//         }}
//       >
//         <CustomAppBar />
//         <Outlet />
//       </Box>
//     </Box>
//   );
// }

export default App;
