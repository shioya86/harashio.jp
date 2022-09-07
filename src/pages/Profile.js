import { Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import Title from "../components/Title";
import Card from "@material-ui/core/Card";
import { Grid } from '@mui/material';
import MyTabs from '../components/MyProfileTabs';
const styles = {
  card: {
    padding: 10,
    boxShadow: "none"
  }
}

function Profile() {
  return (
    <Card style={styles.card}>
      <Title name={"Profile"} />
      <Grid container>
      <Grid item lg={3} xs={10} style={{textAlign: "center"}}>
        <img src="./sample_profile.jpeg" layout="fill" style={{width: "180px", height: "180px"}} alt="Image" />
      </Grid>
      <Grid item lg={6} xs={10}>
        <Typography style={{textAlign: "center"}}>shioya / 原翔耶 (Shoya HARA)</Typography>
        <MyTabs />
      </Grid>
      </Grid>
    </Card>
  );
}

export default Profile;