import Title from "../components/Title";
import { Timeline, Event } from 'react-trivial-timeline';

// これを使っている → https://github.com/tverdohleb/react-trivial-timeline
// こっちも使えそう → https://codepen.io/viktorjs/pen/KQZYjo
function History() {
  const contents =  [
    {time: "6.2017", title: "宮崎ミライ Hack Days", body: "宮崎の観光をテーマにしたハッカソン"},
    {time: "10.2017", title: "全国高専プログラミングコンテスト 第28回大島大会 参加", body: "C++ / OpenCVを用いたパズルソルバの開発"},
    {time: "1.2018", title: "第2回 RESASアプリコンテスト 参加", 
      subtitle: "宮崎地方創成シミュレーションゲーム 輝け☆ミライの観光大使", body: "優秀賞, ソフトバンクテクノロジー賞"},
    {time: "6.2019", title: "CTF ビギナーズ for 高専生", body: "Offensive Securityの基礎"},
    {time: "3.2022", title: "電子情報通信学会九州支部成績優秀賞", body: "九州工業大学 情報工学部 情報・通信工学科"},

  ]

  const drawer =  (contents.map((e) => (
          <Event interval={e.time} title={e.title} subtitle={e?.subtitle}>
            {e.body}
          </Event>
        ))
  );

  return (
    <div>
      <Title name={"Activities"} />
      <Timeline lineColor="black">
        {drawer}
      </Timeline>
    </div>
  );
}

export default History;