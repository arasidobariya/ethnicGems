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
function Home() {
  const products = [
    {
      id: "p1",
      category: "Ethnic Dresses",
      path: "/products/dresses",
      items: [
        {
          id: 1,
          src: "./image/Banner Girl.jpg",
          title: "Blue Dress",
          description: "Made with Pure Silk",
        },
        {
          id: 2,
          src: "./image/Banner Girl.jpg",
          title: "Green Dress",
          description: "Made with Pure Cotton",
        },
        {
          id: 3,
          src: "./image/Banner Girl.jpg",
          title: "Pista Dress",
          description: "Semi-Silk Fabric",
        },
        {
          id: 4,
          src: "./image/Banner Girl.jpg",
          title: "Pista Dress",
          description: "Made with Pure Silk",
        },
      ],
    },
    {
      id: "p2",
      category: "Ethnic Jewellery",
      path: "/products/Jewellery",
      items: [
        {
          id: 1,
          src: "./image/Banner Girl.jpg",
          title: "Blue Dress",
          description: "Made with Pure Silk",
        },
        {
          id: 2,
          src: "./image/Banner Girl.jpg",
          title: "Green Dress",
          description: "Made with Pure Cotton",
        },
        {
          id: 3,
          src: "./image/Banner Girl.jpg",
          title: "Pista Dress",
          description: "Semi-Silk Fabric",
        },
        {
          id: 4,
          src: "./image/Banner Girl.jpg",
          title: "Pista Dress",
          description: "Made with Pure Silk",
        },
      ],
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
                sx={{ fontFamily: "Lato" }}
              >
                "Explore your true style with this Ethnic Dress"
              </Typography>
            </CardContent>
            <Box sx={{ textAlign: "center", mt: 2, p: 1 }}>
              <DarkButton variant="contained">Shop now</DarkButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              style={{ maxHeight: "450px" }}
              image="./image/Banner Girl.jpg"
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
                          <img
                            height="200px"
                            width="200px"
                            alt={item.title}
                            src={item.src}
                          ></img>
                        </Grid>
                        <Grid item sx={{ margin: 2 }}>
                          <Typography variant="h5">{item.title}</Typography>
                          <Typography variant="body2">
                            {item.description}
                          </Typography>
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
