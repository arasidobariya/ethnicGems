import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import DarkButton from "../Styles/darkButton";
import { Link } from "react-router-dom";
import StyledNavLink from "../Styles/NavLink";
import eCommerceApi from "./ProductData";
import StyledLink from "../Styles/Link";

function Home() {
  const products = [
    {
      id: "p1",
      category: "Ethnic Dresses",
      path: "/categories/dresses",
      items: eCommerceApi.getProductData("dresses", true),
    },
    {
      id: "p2",
      category: "Ethnic Jewellery",
      path: "/categories/Jewellery",
      items: eCommerceApi.getProductData("Jewellery", true),
    },
  ];

  return (
    <Box sx={{ margin: 5 }}>
      <Card
        sx={{
          display: "flex",
          margin: 5,
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                component="div"
                variant="h3"
                textAlign={"center"}
                sx={{ fontFamily: "Roboto", margin: 5 }}
              >
                Ethnicity For You
              </Typography>
              <Typography
                component="div"
                variant="h5"
                textAlign={"center"}
                sx={{ fontFamily: "sans-serif" }}
              >
                "Explore your true style with this Ethnic Dress"
              </Typography>
            </CardContent>
            <Box sx={{ textAlign: "center", mt: 2, p: 1 }}>
              <DarkButton variant="contained">
                <StyledNavLink to="/categories/dresses">Shop now</StyledNavLink>
              </DarkButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              style={{ maxHeight: "450px" }}
              image="./images/BannerGirl.jpg"
              alt="Ethnic Dress"
            />
          </Grid>
        </Grid>
      </Card>

      {products.map((product) => {
        return (
          <Box>
            <Grid container>
              <Grid item xs={6} md={8}>
                <Typography variant="h5" textAlign={"left"} sx={{ ml: 5 }}>
                  {product.category}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Link to={product.path}>
                  <Typography
                    variant="body1"
                    textAlign={"right"}
                    alignItems="center"
                    sx={{ mr: 10 }}
                  >
                    Show All
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Box sx={{ margin: 5 }}>
              <Grid container spacing={5}>
                {product.items.map((item) => {
                  return (
                    <Grid
                      item
                      container
                      direction="column"
                      xs={12}
                      sm={6}
                      md={3}
                      key={item.id}
                      spacing={1}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Paper variant="outlined" sx={{ maxWidth: "500px" }}>
                        <Grid item>
                          <StyledLink to={"/products/" + item.id}>
                            <img
                              height="200px"
                              width="200px"
                              alt={item.title}
                              src={item.src}
                            ></img>
                          </StyledLink>
                        </Grid>
                        <Grid item sx={{ margin: 2 }}>
                          <StyledLink to={"/products/" + item.id}>
                            <Typography variant="h5">{item.title}</Typography>
                          </StyledLink>
                          <Typography variant="body2">{item.price}</Typography>
                        </Grid>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Home;
