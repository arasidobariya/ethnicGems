import { Grid, Paper, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import DarkButton from "../Styles/darkButton";
import eCommerceApi from "./ProductData";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import StyledLink from "../Styles/Link";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";

function ProductDetail() {
  const param = useParams();
  const [size, setSize] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const item = eCommerceApi.getProductDetail(param.itemId);

  const addToCartHandler = (id, price, title, src) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
        src,
      })
    );
  };

  return (
    item && (
      <Box sx={{ margin: 5 }} variant="outlined">
        <Box
          sx={{
            margin: 2,
            display: "flex",
          }}
        >
          <ArrowBackIcon sx={{ px: 1 }}></ArrowBackIcon>
          <StyledLink>
            <Typography
              sx={{ fontWeight: "bold" }}
              onClick={() => navigate(-1)}
            >
              Back to Shop
            </Typography>
          </StyledLink>
        </Box>
        <Paper
          elevation={3}
          sx={{
            margin: 5,
            padding: 1,
          }}
        >
          {}
          <Grid container spacing={1}>
            <Grid item xs={12} md={5}>
              <img
                src={item.src}
                height="450px"
                width="100%"
                alt="chaniyacholi pic"
              />
            </Grid>

            <Grid item xs={12} md={7}>
              <Paper variant="outlined" sx={{ p: 5 }}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="body2" sx={{ my: 3 }}>
                  {item.description}
                </Typography>
                <Box>
                  <FormControl
                    sx={{ my: 1, minWidth: 100, maxWidth: 200 }}
                    size="small"
                  >
                    <InputLabel>Select Size</InputLabel>
                    <Select
                      value={size}
                      label="Select Size"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Small</MenuItem>
                      <MenuItem value={20}>Medium</MenuItem>
                      <MenuItem value={30}>Large</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Typography variant="h4" sx={{ my: 3 }}>
                  {item.price}
                </Typography>
                <DarkButton
                  sx={{ mt: 2 }}
                  onClick={() =>
                    addToCartHandler(item.id, item.price, item.title, item.src)
                  }
                >
                  Add to Cart
                </DarkButton>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    )
  );
}
export default ProductDetail;
