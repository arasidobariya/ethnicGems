import { Typography, Grid, Container } from "@mui/material";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import DarkButton from "../Styles/darkButton";

import { useSelector } from "react-redux/es/hooks/useSelector";
import CartItem from "./CartItem";


function AddToCart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={15}>
        <Grid item xs={12} sm={10} md={8}>
          <Typography gutterBottom variant="h4">
            Your Bag
          </Typography>

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                src: item.src,
              }}
            />
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <DarkButton
            fullWidth
            xs={12}
            variant="contained"
            size="large"
            sx={{ justifyContent: "left" }}
            endIcon={<DoubleArrowIcon sx={{ ml: "5" }} />}
          >
            Checkout
          </DarkButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddToCart;
