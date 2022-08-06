import Title from "../components/Title";
import { Timeline, Event } from 'react-trivial-timeline';

// これを使っている → https://github.com/tverdohleb/react-trivial-timeline
// こっちも使えそう → https://codepen.io/viktorjs/pen/KQZYjo
function History() {
  return (
    <div>
      <Title name={"Activities"} />
      <Timeline lineColor="black">
        <Event interval="6.2017" title="宮崎ミライHack Days 参加">
          宮崎の観光をテーマにした<a href="https://connpass.com/event/57371/">ハッカソン</a>への参加
        </Event>
        <Event interval="10.2017" title="全国高専プログラミングコンテスト 第28回大島大会 参加">
          競技部門 / C++, OpenCVを使ったパズルのソルバアプリの開発
        </Event>
        <Event interval="1.2018" title="第2回 RESASアプリコンテスト 参加" subtitle="宮崎地方創成シミュレーションゲーム 輝け☆ミライの観光大使">
          優秀賞, ソフトバンクテクノロジー賞
        </Event>
        <Event interval="6.2019" title="CTF ビギナーズ for 高専生">
          Offensive Securityの基礎
        </Event>
        <Event interval="3.2022" title="電子情報通信学会九州支部成績優秀賞">
          九州工業大学 情報工学部 情報・通信工学科
        </Event>
      </Timeline>
    </div>
  );
}

export default History;