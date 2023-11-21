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
import StyledBadge from "../Styles/Badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const category = [
    { id: "c1", title: "Dresses", path: "/categories/dresses" },
    { id: "c2", title: "Jewellery", path: "/categories/Jewellery" },
  ];
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const cartHandler = () => {
    navigate("/AddToCart");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky">
        <Toolbar>
          {!isSmallScreen && (
            <Grid container spacing={1}>
              <Grid item md={2.5}>
                <StyledNavLink to="/">
                  <Typography variant="h5" sx={{ fontFamily: "Roboto" }}>
                    Ethnic Gems
                  </Typography>
                </StyledNavLink>
              </Grid>
              <Grid item container md={9}>
                {category &&
                  category.map((item) => (
                    <Grid item md={1.25} key={item.id}>
                      <StyledNavLink to={item.path}>
                        <Typography variant="body1" mt={0.7}>
                          {item.title}
                        </Typography>
                      </StyledNavLink>
                    </Grid>
                  ))}
              </Grid>

              <Grid item md={0.5}>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cartQuantity} color="secondary">
                    <ShoppingCartIcon onClick={cartHandler} />
                  </StyledBadge>
                </IconButton>
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
              <Grid container>
                <Grid item xs={11}>
                  <StyledNavLink to="/">
                    <Typography variant="h5">Ethnic Gems</Typography>
                  </StyledNavLink>{" "}
                </Grid>
                <Grid item xs={1}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartQuantity} color="secondary">
                      <ShoppingCartIcon onClick={cartHandler} />
                    </StyledBadge>
                  </IconButton>
                </Grid>
              </Grid>
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
          {category &&
            category.map((item, index) => (
              <ListItem key={index}>
                <StyledNavLink to={item.path}>
                  <ListItemText primary={item.title} />
                </StyledNavLink>
              </ListItem>
            ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default Header;
