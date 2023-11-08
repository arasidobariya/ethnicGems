import { Grid, Paper, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import DarkButton from "../Styles/darkButton";

function ProductDetail() {
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <Box sx={{ margin: 5 }} variant="outlined">
      <Box
        sx={{
          margin: 5,
          display: "flex",
        }}
      >
        <ArrowBackIcon sx={{ px: 1 }}></ArrowBackIcon>
        <Typography sx={{ fontWeight: "bold" }}>Back to Shop</Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          margin: 5,
          padding: 1,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <img
              src="./image/Banner Girl.jpg"
              height="450px"
              width="100%"
              alt="chaniyacholi pic"
            />
          </Grid>

          <Grid item xs={7}>
            <Paper variant="outlined" sx={{ p: 5 }}>
              <Typography variant="h4">Title</Typography>
              <Typography variant="body2" sx={{ my: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat similique dicta nulla praesentium deserunt. Corporis
                repellendus deleniti dolores eligendi. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat placeat similique
                dicta nulla praesentium deserunt. Corporis repellendus deleniti
                dolores eligendi.
              </Typography>
              <Box>
                <FormControl sx={{ my: 1, minWidth: 200 }} size="small">
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
                $100
              </Typography>
              <DarkButton sx={{ mt: 2 }}>Add to Cart</DarkButton>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
export default ProductDetail;
