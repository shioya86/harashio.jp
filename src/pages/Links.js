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

function Links() {
  const links = (
    <Grid container rowSpacing={5} columnSpacing={5} alignItems="center" justify="center">
      <Grid item xs={6}>
        <Button
          variant="outlined"
          color="primary"
          href="https://github.com/shioyarare"
          style={styles.button}
          >
          <FaGithub size={20}/> Github
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="outlined"
          color="primary"
          href="https://twitter.com/shioya_net"
          style={styles.button}
          >
          <FaTwitter size={20}/> Twitter
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button
          variant="outlined"
          color="primary"
          href="https://blog.shioyarare.com"
          style={styles.button}
          >
          <FaBookOpen size={20}/> Blog
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Button
          variant="outlined"
          color="primary"
          href="https://atcoder.jp/users/shioya"
          style={styles.button}
          >
          <GiHorseHead size={20}/> AtCoder
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Title name="Links" />
      {links}
    </>
  );
}

export default Links;