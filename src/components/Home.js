import {
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import DarkButton from "../Styles/darkButton";
function Home() {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          margin: 5,
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                component="div"
                variant="h3"
                textAlign={"center"}
                sx={{ fontFamily: "Roboto", margin: 5 }}
              >
                Ethnicity For You
              </Typography>
              <Typography
                component="div"
                variant="h5"
                textAlign={"center"}
                sx={{ fontFamily: "Lato" }}
              >
                "Explore your true style with this Ethnic Dress"
              </Typography>
            </CardContent>
            <Box sx={{ textAlign: "center", mt: 2, p: 1 }}>
              <DarkButton variant="contained">Shop now</DarkButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"

              
              height="400"
              image="./image/Banner Girl.jpg"
              alt="Ethnic Dress"
            />
          </Grid>
        </Grid>
      </Card>
      
    </div>
  );
}

export default Home;
