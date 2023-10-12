import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Badge, IconButton, autocompleteClasses } from "@mui/material";

function Header() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={12} md={2.5}>
              <Typography variant="h5" textAlign={"center"}>
                Ethnic Gems
              </Typography>
            </Grid>
            <Grid item xs={6} md={1.5}>
              <Typography variant="body1" textAlign={"center"} mt={0.7}>
                Dresses
              </Typography>
            </Grid>
            <Grid item xs={6} md={1.5}>
              <Typography variant="body1" textAlign={"center"} mt={0.7}>
                Jewellery
              </Typography>
            </Grid>
            <Grid item xs={12} md={3.5}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid item xs={6} md={2}></Grid>
            <Grid item xs={6} md={1} mt={0.7}>
              <ShoppingCartIcon size="large" textAlign={"center"} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
