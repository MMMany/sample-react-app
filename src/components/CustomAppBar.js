import React from "react";
import { Box, Avatar, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";

export default function CustomAppBar() {
  const CustomButton = styled(Button)({
    // color: "white",
    // backgroundColor: theme.palette.primary.main,
    margin: "1ch",
  });

  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.default",
        height: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          m: 2,
          // bgcolor: "green",
        }}
      >
        <Avatar />
        <CustomButton>Logout</CustomButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CustomButton>Settings</CustomButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CustomButton>Support</CustomButton>
      </Box>
    </Box>
  );
}
