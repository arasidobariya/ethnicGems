import { Grid, Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import StyledLink from "../Styles/Link";

import eCommerceApi from "./ProductData";

function ProductList() {
  const param = useParams();

  return (
    <Box sx={{ margin: 5 }}>
      <Grid container spacing={5}>
        {eCommerceApi.getProductData(param.category).map((item) => {
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
                  <Link to={"/products/" + item.id}>
                    <img
                      height="200px"
                      width="200px"
                      src={item.src}
                      alt={item.title}
                    ></img>
                  </Link>
                </Grid>
                <Grid item sx={{ margin: 2 }}>
                  <StyledLink to={"/products/" + item.id}>
                    <Typography variant="h5">{item.title}</Typography>{" "}
                  </StyledLink>
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
