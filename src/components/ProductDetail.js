import { Grid, Paper, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductDetail() {
  return (
    <Box sx={{ margin: 5 }}>
      <Box
        sx={{
          margin: 5,
          display: "flex",
        }}
      >
        <ArrowBackIcon sx={{ px: 1 }}></ArrowBackIcon>
        <Typography>Back to Shop</Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          margin: 5,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Paper>
              <img
                src="./image/Banner Girl.jpg"
                height="450px"
                width="100%"
                alt="chaniyacholi pic"
              />
            </Paper>
          </Grid>

          <Grid item xs={6}></Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
export default ProductDetail;
