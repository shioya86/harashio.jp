import Title from "../components/Title";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from "@material-ui/core/Card";

const styles = {
  card: {
    padding: 10,
    boxShadow: "none"
  }
}

function Activities() {
  const rows =  [
    {date: "6.2017", title: "宮崎ミライ Hack Days 参加", subtitle: "", body: "宮崎の観光をテーマにしたハッカソン"},
    {date: "10.2017", title: "全国高専プログラミングコンテスト 第28回大島大会 参加", subtitle: "", body: "C++ / OpenCVを用いたパズルソルバの開発"},
    {date: "1.2018", title: "第2回 RESASアプリコンテスト 参加", 
      subtitle: "宮崎地方創成シミュレーションゲーム 輝け☆ミライの観光大使", body: "優秀賞, ソフトバンクテクノロジー賞"},
    {date: "6.2019", title: "CTF ビギナーズ for 高専生 参加", subtitle: "", body: "Offensive Securityの基礎"},
    {date: "3.2022", title: "電子情報通信学会九州支部成績優秀賞 受賞", subtitle: "", body: "九州工業大学 情報工学部 情報・通信工学科"},

  ]

  return (
    <Card style={styles.card} >
      <Title name={"Activities"} />
      <List sx={{ witdh: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        {
          rows.map( (e) => (
            <ListItem>
              <ListItemText primary={e.title} secondary={buildActivity(e.subtitle, e.body, e.date)} />
            </ListItem>
          ))
        }
      </List>
    </Card>
  );
}

function buildActivity(subtitle, body, date) {
  if (subtitle === "") return <span>{body} <br /> {date} </span>;
  return <span>{subtitle} <br /> {body} <br /> {date} </span>;
}
export default Activities;