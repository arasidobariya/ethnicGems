import { Grid, Box, Paper, Typography } from "@mui/material";


function ProductList() {

return(
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
            md={4}
            key={item.id}
            spacing={3}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Paper variant="outlined" sx={{ maxWidth: "500px" }}>
              <Grid item>
                <img
                  height="200px"
                  alt={item.title}
                  src={item.src}
                ></img>
              </Grid>
              <Grid item sx={{ margin: 2 }}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">
                  {item.description}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  </Box>
)
}
export default ProductList;
