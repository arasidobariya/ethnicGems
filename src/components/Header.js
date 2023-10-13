import * as React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Drawer,
  ListItemText,
  List,
  ListItem,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import StyledNavLink from "../Styles/NavLink";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const items = ["Home", "Dresses", "Jwellery"];
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky">
        <Toolbar>
          {!isSmallScreen && (
            <Grid container spacing={1}>
              <Grid item md={2.5}>
                <StyledNavLink to="/">
                  <Typography variant="h5">Ethnic Gems</Typography>
                </StyledNavLink>
              </Grid>
              <Grid item md={1.25}>
                <StyledNavLink
                  to="/"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "inherit",
                  })}
                >
                  <Typography variant="body1" textalign={"center"} mt={0.7}>
                    Home
                  </Typography>
                </StyledNavLink>
              </Grid>
              <Grid item md={1.25}>
                <Typography variant="body1" textalign={"center"} mt={0.7}>
                  Dresses
                </Typography>
              </Grid>

              <Grid item md={1.25}>
                <Typography variant="body1" textalign={"center"} mt={0.7}>
                  Jewellery
                </Typography>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={1} mt={0.7}>
                <ShoppingCartIcon size="large" textalign={"center"} />
              </Grid>
            </Grid>
          )}

          {isSmallScreen && (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <StyledNavLink to="/">
                <Typography variant="h5">Ethnic Gems</Typography>
              </StyledNavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {items &&
            items.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default Header;
