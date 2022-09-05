import { Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import Title from "../components/Title";
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    padding: 10,
    boxShadow: "none"
  }
}

function Profile() {
  return (
    <Card style={styles.card}>
      <Title name={"Profile"}/>
      <CardContent>
        <Typography>
          shioya / 原 翔耶
        </Typography>
        <Typography>
          こんにちは。プログラミングとか好きです。
        </Typography>
      </CardContent>

    </Card>
  );
}

export default Profile;