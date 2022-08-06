import Title from "../components/Title";
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { FaGithub, FaTwitter, FaBookOpen } from "react-icons/fa"

import { GiHorseHead } from "react-icons/gi"
import { Typography } from "@material-ui/core";

const styles = {
  stack: {
    width: "100%",
    maxWidth: 100,
  },

  button: {
    width: '80%',
    height: 50,
    margin: 10,
  }
}
function Profile() {


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
    </div>
  );
}

export default Profile;