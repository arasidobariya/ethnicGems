import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {" © "}
      EthnicGems
      {new Date().getFullYear()}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[800],
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={9}>
              <Copyright />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2">
                Fork this Project
                <Link
                  color="inherit"
                  href="https://github.com/arasidobariya/ethnicGems"
                >
                  Here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
