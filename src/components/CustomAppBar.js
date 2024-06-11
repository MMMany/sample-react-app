import React from "react";
import { Box, Avatar, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function CustomAppBar() {
  const CustomButton = styled(Button)(({ theme }) =>
    theme.unstable_sx({
      // m: "1ch",
      mx: '8px',
    })
  );

  const handleClicked = React.useCallback(() => {
    console.debug("Clicked!");
  }, []);

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
        <CustomButton onClick={handleClicked}>Logout</CustomButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CustomButton onClick={handleClicked}>Settings</CustomButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <CustomButton onClick={handleClicked}>Support</CustomButton>
      </Box>
    </Box>
  );
}
