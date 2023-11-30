import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FaceIcon from "@mui/icons-material/Face";

import DarkButton from "../Styles/darkButton";
function Guest() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <FaceIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Guest Checkout
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, mb: 2 }}>
          Proceed and setup your login later...
        </Typography>
        <DarkButton
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Continue as a Guest
        </DarkButton>
      </Box>
    </Container>
  );
}

export default Guest;
