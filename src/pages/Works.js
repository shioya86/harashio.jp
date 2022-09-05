import Title from "../components/Title";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import WorkContent from "../components/WorkContent";

const styles = {
  card: {
    padding: 10,
    boxShadow: "none"
  }
}

function Works() {
  const rows = [
    {title: "プログラムA", body: "これはサンプルです。", link: "https://google.com"},
    //{title: "プログラムB", body: "これはサンプルです。", link: "https://google.com"},
  ];
  return (
    <Card style={styles.card}>
      <Title name={"Works"}/>
      <Grid container spacing={2}>
        {
          rows.map( (e) => (
            <Grid item xs={4}>
              <WorkContent 
                title={e.title}
                body={e.body}
                link={e.link}
                />
            </Grid>
          ))
        }
      </Grid>
    </Card>
  );
}

export default Works;