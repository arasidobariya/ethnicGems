import { Card, Box, CardContent, Typography, CardMedia } from "@mui/material";
import DarkButton from "../Styles/darkButton";

function Home() {
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          margin: 5,
          backgroundColor: "rgb(245, 242, 242)",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h3"
              textAlign={"center"}
              sx={{ fontFamily: "Roboto", margin: 8 }}
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
          <DarkButton variant="contained">Shop now</DarkButton>
        </Box>
        <Box sx={{ flex: 1.1 }}>
          <CardMedia
            component="img"
            height="400"
            image="./image/Banner Girl.jpg"
            alt="Live from space album cover"
          />
        </Box>
      </Card>
    </div>
  );
}

export default Home;
