import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

import Stack from "@mui/material/Stack";

import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import DarkButton from "../Styles/darkButton";

function AddToCart() {
  let quantities = Array.from(Array(10).fill(), (_, i) => i + 1);

  const data = [
    {
      id: 1,
      src: "../images/Jewellery11.jpg",
      title: "Abc",
      price: "$100",
      size: "M",
    },
    {
      id: 2,
      src: "../images/dress1.jpg",
      title: "xyz",
      price: "$120",
      size: "S",
    },
  ];
  return (
    <Container sx={{ mt: "30px" }}>
      <Grid container spacing={15}>
        <Grid item xs={12} sm={8}>
          <Typography gutterBottom variant="h4" sx={{ my: 3 }}>
            Your Bag
          </Typography>
          {data.map((item) => {
            return (
              <Card sx={{ mt: 2 }}>
                <Grid container>
                  <Box component="div" sx={{ flex: "0.4" }}>
                    <CardMedia
                      sx={{ width: "100" }}
                      component="img"
                      height="200"
                      image={item.src}
                      alt="image"
                    ></CardMedia>
                  </Box>
                  <Box component="div" sx={{ flex: "0.6" }}>
                    <CardContent>
                      <Stack
                        spacing={{ xs: 3, sm: 20 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          {item.title}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="div"
                        >
                          {item.price}
                        </Typography>
                      </Stack>
                      <Typography gutterBottom variant="body1" component="div">
                        Size: {item.size}
                      </Typography>

                      <Box sx={{ mt: 2, mb: 0 }}>
                        <FormControl sx={{ Width: 160 }}>
                          <InputLabel>Qty</InputLabel>
                          <Select label="quantities" value={quantities}>
                            {quantities.map((quantity) => {
                              return (
                                <MenuItem key={quantity} value={quantity}>
                                  {quantity}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Box>
                    </CardContent>
                  </Box>
                </Grid>
              </Card>
            );
          })}
        </Grid>

        <Grid item xs={12} sm={4}>
          <DarkButton
            fullWidth
            xs={12}
            variant="contained"
            size="large"
            sx={{ mt: 10, justifyContent: "left" }}
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
