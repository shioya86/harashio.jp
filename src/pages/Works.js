import Title from "../components/Title";
import BodyCard from "../components/BodyCard";
import Grid from '@material-ui/core/Grid';
function Works() {
  return (
    <div>
      <Title name={"Works"}/>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <BodyCard 
            title="プログラムA"
            body="これはサンプルです。"
            link="https://google.com" />
        </Grid>
        <Grid item xs={4}>
          <BodyCard 
            title="プログラムB"
            body="これはサンプルです。"
            link="https://google.com" />
        </Grid>
        <Grid item xs={4}>
          <BodyCard 
            title="プログラムC"
            body="これはサンプルです。"
            link="https://google.com" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Works;