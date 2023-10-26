import { Grid, Box, Paper, Typography } from "@mui/material";
import DarkButton from "../Styles/darkButton";

function ProductList() {
  const items = [
    {
      id: Math.random.toString(),
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: Math.random.toString(),
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: Math.random.toString(),
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: Math.random.toString(),
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: Math.random.toString(),
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
    {
      id: Math.random.toString(),
      category: "dresses",
      src: "./image/Banner Girl.jpg",
      title: "Blue Dress",
      description: "Made with Pure Silk",
    },
  ];

  return (
    <Box sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        {items.map((item) => {
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
                  <img height="200px" width="200px" alt={item.title} src={item.src}></img>
                </Grid>
                <Grid item sx={{ margin: 2 }}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Grid>
              </Paper>
              <DarkButton>Add to Cart</DarkButton>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
export default ProductList;
