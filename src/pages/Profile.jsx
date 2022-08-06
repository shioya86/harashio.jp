import Title from "../components/Title";
import Box from '@mui/material/Box';

import { Typography } from "@material-ui/core";
const Profile = (props) => {
  const links = [
    {title: "GitHub", link: "https://github.com/shioyarare"},
    {title: "Blog", link: "https://blog.shioyarare.com"},
    {title: "Twitter", link: "https://twitter.com/shioya_net"},
    {title: "instagram", link: "#"},
    {title: "AtCoder", link: "https://atcoder.jp/users/shioya"},
  ].map( (e) => (
    <ul>
      <li> <a href={e.link}>{e.title}</a> </li>
    </ul>
  ));

  return (
    <div>
      <Title name={"Profile"}/>
      <div align="center">
        <p> shioya / 原 翔耶</p>
        <p>Shoya HARA</p>
      </div>
      <ul>
        <li> 8.1999 宮崎県 都城市生</li>
        <li> M1, 九州工業大学 情報創成工学科 在学中</li>
        <li> admin[at]sp.harashio.jp</li>
      </ul>
      <Typography paragraph>
        こんにちは
      </Typography>

      {links}
    </div>
  );
}

export default Profile;