import { Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import Title from "../components/Title";
import Card from "@material-ui/core/Card";
import { Grid } from '@mui/material';
import MyTabs from '../components/MyProfileTabs';
import '../styles/index.css';
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
      <Typography style={{textAlign: "center", fontFamily: "'Zen Antique Soft', serif", fontSize: "20px"}}>shioya / 原 翔耶 Shoya HARA</Typography>
      <Typography style={{textAlign: "center"}}> shara[at]ml.harashio.jp</Typography>
      <Grid container alignItems="center" justify="center">
      <Grid item lg={3} xs={12} style={{textAlign: "center", paddingTop: "20px", paddingBottom: "20px"}}>
        <img src="./sample_profile.jpeg" layout="fill" style={{width: "180px", height: "180px"}} alt="Image" />
      </Grid>
      <Grid item lg={7} xs={12}>

        <MyTabs />
      </Grid>
      </Grid>
    </Card>
  );
}

export default Profile;