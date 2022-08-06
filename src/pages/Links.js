import Title from "../components/Title";
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Grid from "@material-ui/core/Grid";
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { FaGithub, FaTwitter, FaBookOpen } from "react-icons/fa"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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

function Links() {
  const links = [
    {name: "github", link: "https://github.com/shioyarare"},
    {name: "twitter", link: "https://twitter.com/shioya_net"},
    {name: "blog", link: "https://blog.shioyarare.com"},
    {name: "atcoder", link: "https://atcoder.jp/users/shioya"}
  ];

  return (
    <>
      <Title name="Links" />
      {
        links.map( (e) => (
          <ListItem>
              <ListItemButton href={e.link}>
                <ListItemText primary={e.name} secondary={e.link} />
              </ListItemButton>
          </ListItem>
        ))
      }
    </>
  );
}

export default Links;