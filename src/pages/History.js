import Title from "../components/Title";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// これを使っている → https://github.com/tverdohleb/react-trivial-timeline
// こっちも使えそう → https://codepen.io/viktorjs/pen/KQZYjo
function History() {
  const rows =  [
    {date: "6.2017", name: "宮崎ミライ Hack Days", body: "宮崎の観光をテーマにしたハッカソン"},
    {date: "10.2017", name: "全国高専プログラミングコンテスト 第28回大島大会 参加", body: "C++ / OpenCVを用いたパズルソルバの開発"},
    {date: "1.2018", name: "第2回 RESASアプリコンテスト 参加", 
      subtitle: "宮崎地方創成シミュレーションゲーム 輝け☆ミライの観光大使", body: "優秀賞, ソフトバンクテクノロジー賞"},
    {date: "6.2019", name: "CTF ビギナーズ for 高専生", body: "Offensive Securityの基礎"},
    {date: "3.2022", name: "電子情報通信学会九州支部成績優秀賞", body: "九州工業大学 情報工学部 情報・通信工学科"},

  ]

  return (
    <div>
      <Title name={"Activities"} />
      <List sx={{ witdh: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        {
          rows.map( (e) => (
            <ListItem>
              <ListItemText primary={e.name} secondary={buildActivity(e.body, e.date)} />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
}

function buildActivity(body, date) {
  return <span>{body} <br /> {date} </span>;
}
export default History;