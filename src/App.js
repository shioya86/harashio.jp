import * as React from 'react';
import PropTypes from 'prop-types';
import {Container, Grid, Card, Avatar, Stack, Divider} from '@mui/material';
import ContentsLinkBox from "./components/ContentsLinkBox";
import Title from "./components/Title";
import {Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import QualificationDataGrid from "./components/QualificationDataGrid";
import HistoryTimeline from "./components/HistoryTimeline";
import ActivityStack from "./components/ActivityStack";

const linksContents = [
  { id: 1, title: "GitHub", url: "https://github.com/shioya86/" },
  { id: 2, title: "X(Twitter)", url: "https://twitter.com/shioya86/" },
  { id: 3, title: "blog", url: "https://blog.harashio.jp/" },
  { id: 4, title: "AtCoder", url: "https://atcoder.jp/users/shioya" },
  { id: 5, title: "Problems", url: "https://kenkoooo.com/atcoder/#/user/shioya/" },
  { id: 6, title: "Instagram", url: "https://instagram.com/harashio.jp/" },
]
// 来歴
const historyContents = [
  { id: 1, title: "都城工業高等専門学校 電気情報工学科 入学", date: "2015.4"},
  { id: 2, title: "都城工業高等専門学校 電気情報工学科 卒業", date: "2020.3"},
  { id: 3, title: "九州工業大学 情報工学部 情報・通信工学科 入学", date: "2020.4"},
  { id: 4, title: "九州工業大学 情報工学部 情報・通信工学科 卒業", date: "2022.3"},
  { id: 5, title: "九州工業大学大学院情報工学府 情報創成工学科 入学", date: "2022.4"},
];

// 活動
const activityContents = [
  {
    id: 1,
    title: "宮崎ミライ Hack Days 参加",
    type: "Hackathon",
    description: "宮崎の観光をテーマにしたハッカソン",
    url: "https://connpass.com/event/57371/",
    date: "2017.6",
    rewards: []
  },
  {
    id: 2,
    title: "全国高専プログラミングコンテスト 第28回 大島大会 参加",
    type: "Contest",
    description: "C++/OpenCVを用いたパズルソルバの開発",
    url: "https://www.procon.gr.jp/",
    date: "2017.10",
    rewards: []
  },
  {
    id: 3,
    title: "第2回 RESASアプリコンテスト 参加",
    type: "Contest",
    description: "JavaScript/RESAS APIを使った地方創成シミュレーションゲームの作成",
    url: "https://opendata.resas-portal.go.jp/contest2nd/index.html",
    date: "2017.10",
    rewards: ["優秀賞", "ソフトバンクテクノロジー賞"]
  },
  {
    id: 4,
    title: "都内クラウドインテグレーターにて短期インターンシップ 参加",
    type: "Work",
    description: "Azureを使ったBotサービスの開発",
    url: "",
    date: "2018.3",
    rewards: []
  },
  {
    id: 5,
    title: "都内水処理企業にて夏季インターンシップ 参加",
    type: "Work",
    description: "水処理システム設計および研修",
    url: "",
    date: "2018.9",
    rewards: []
  },
  {
    id: 6,
    title: "電子情報通信学会九州支部成績優秀賞 受賞",
    type: "Reward",
    description: "九州工業大学 学部",
    url: "",
    date: "2022.03",
    rewards: ["電子情報通信学会九州支部成績優秀賞"]
  },
  {
    id: 7,
    title: "福岡スタートアップ企業にて長期インターンシップ 参加",
    type: "Work",
    description: "AWS/Ruby on Rails/Reactを使ったWebアプリケーション開発",
    url: "",
    date: "2021-2022",
    rewards: []
  },
  {
    id: 8,
    title: "都内IT企業にて夏季インターンシップ 参加",
    type: "Work",
    description: "Java/Spring Bootを使ったバックエンドAPIの開発",
    url: "",
    date: "2022.08",
    rewards: []
  }
]

// 資格
const qualificationContents = [
  { id: 1, title: "ITパスポート", rank: "-", date: "2018"},
  { id: 2, title: "基本情報技術者資格", rank: "-", date: "2019"},
  { id: 3, title: "知的財産管理技能検定", rank: "三級", date: "2022"},
  { id: 4, title: "応用情報技術者資格", rank: "-", date: "2022"},
];

const App = () => {

  return (
    <Container maxWidth="sm" style={{ padding: "10em 0 5em 0" }}>
      {/* 紹介 */}
      <Card>
        <CardContent>
          <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ paddingBottom: "1em" }}
          >
            <Avatar
                src="https://www.blog.harashio.jp/wp-content/uploads/jZiHvbmc_400x400.jpg"
                sx={{ width: "80px", height: "80px" }}
            />
            <Avatar
                src="https://www.blog.harashio.jp/wp-content/uploads/jZiHvbmc_400x400.jpg"
                sx={{ width: "80px", height: "80px" }}
            />
          </Stack>
          <Typography style={{textAlign: "center", fontFamily: "'Zen Antique Soft', serif", fontSize: "20px"}}>
            shioya86 / 原 翔耶 Shoya HARA
          </Typography>
          <Typography style={{ textAlign: "center", paddingBottom: "1em" }}>
            shara[at]ml.harashio.jp
          </Typography>


          <Typography>
            福岡県で学生をしながらプログラミングで遊んでいる大学院生です。
            現在は、競プロをしたりTangleという分散台帳技術の活用に関する研究をしたりしています。
          </Typography>
        </CardContent>
      </Card>

      {/* リンク集 */}
      <Card>
        <CardContent>
          <Title name={"Links"} />

          <Grid container direction="row">
            {
              linksContents.map((elem) =>
                  <ContentsLinkBox
                      id={elem.id}
                      cardTitle={elem.title}
                      url={elem.url}
                  />
              )
            }
          </Grid>
        </CardContent>
      </Card>


      {/* 履歴 */}
      <Card>
        <CardContent>
          <Title name={"History"} />
          <HistoryTimeline data={historyContents}/>
        </CardContent>
      </Card>

      {/* 活動 */}
      <Card>
        <CardContent>
          <Title name={"Activities"} />
          <ActivityStack data={activityContents}/>
        </CardContent>
      </Card>

      {/* 資格 */}
      <Card>
        <CardContent>
          <Title name={"Qualifications"} />
          <QualificationDataGrid data={qualificationContents}/>
        </CardContent>
      </Card>
    </Container>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
