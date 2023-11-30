import { Grid } from "@mui/material";
import SignIn from "./Signin";
import Guest from "./Guest";

function CheckoutMain() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <SignIn />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Guest />
      </Grid>
    </Grid>
  );
}

export default CheckoutMain;
