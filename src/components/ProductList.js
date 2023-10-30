import { Grid, Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router";

function ProductList() {
  const param = useParams();

  const items = [
    {
      id: 1,
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 2,
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 3,
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 4,
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 5,
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 6,
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 7,
      category: "Jewellery",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 8,
      category: "Jewellery",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 9,
      category: "Jewellery",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 10,
      category: "Jewellery",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 11,
      category: "Jewellery",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: 12,
      category: "Jewellery",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
  ];

  return (
    <Box sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        {items
          .filter((item) => item.category === param.id)
          .map((item) => {
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
                    <Typography variant="body2">{item.description}</Typography>
                  </Grid>

                  <Typography
                    sx={{
                      color: "white",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItem: "center",
                      backgroundColor: "black",
                      padding: "0.5rem",
                    }}
                  >
                    Add to Cart
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
export default ProductList;
