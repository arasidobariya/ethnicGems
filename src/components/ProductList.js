import { Grid, Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router";

import getProductData from "./ProductData";

function ProductList() {
  const param = useParams();

  const imageClickHandler = () => {};

  return (
    <Box sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        {getProductData(param.category).map((item) => {
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
                    src={item.src}
                    alt={item.title}
                    onClick={imageClickHandler}
                  ></img>
                </Grid>
                <Grid item sx={{ margin: 2 }}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body2">{item.price}</Typography>
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
