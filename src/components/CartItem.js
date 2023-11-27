import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cartSlice";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import Stack from "@mui/material/Stack";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const CartItem = (props) => {
  const { title, quantity, total, price, id, src } = props.item;

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemToCart(id));
  };
  const addItemHandler = (id, price, title, src) => {
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
    <Card sx={{ mt: 2 }}>
      <Grid container>
        <Box component="div" sx={{ flex: "0.4" }} key={id}>
          <CardMedia
            sx={{ width: "50" }}
            component="img"
            height="200"
            src={src}
            alt="image"
          ></CardMedia>
        </Box>
        <Box component="div" sx={{ flex: "0.6" }}>
          <CardContent sx={{ p: 3 }}>
            <Stack
              spacing={{ xs: 5, md: 10 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ flex: 1 }}
              >
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ flex: 0.5 }}
              >
                ${total}
              </Typography>
            </Stack>
            <Typography gutterBottom variant="body1" component="div">
              Size: M
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <RemoveCircleIcon onClick={removeItemHandler} />
              <Typography variant="body2">{quantity}</Typography>
              <AddCircleIcon
                onClick={() => addItemHandler(id, price, title, src)}
              />
            </Stack>
          </CardContent>
        </Box>
      </Grid>
    </Card>
  );
};

export default CartItem;
