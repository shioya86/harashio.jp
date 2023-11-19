import * as React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import { Grid } from '@mui/material';
import Profile from './pages/Profile';
import Qualifications from './pages/Qualifications';
import Activities from './pages/Activities';
import ContentsLinkBox from "./components/ContentsLinkBox";

const styles = {
  headerDummy: {
    marginTop: "4em"
  }
}

const App = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Header />
      </Grid>

      <Grid item container style={styles.headerDummy}>

        <Grid sm={2} />

        <Grid xs={12} sm={8} sx={{gap: 0}}>
          <Grid container direction="column" spacing={2} >
            <Grid item>
              <Profile />
            </Grid>

            {/* リンク集 */}
            <Grid container direction="row">
              <ContentsLinkBox cardTitle="GitHub" url="https://github.com/shioya86/"/>
              <ContentsLinkBox cardTitle="X(Twitter)" url="https://twitter.com/shioya86/"/>
              <ContentsLinkBox cardTitle="blog" url="https://blog.harashio.jp/"/>
              <ContentsLinkBox cardTitle="AtCoder" url="https://atcoder.jp/users/shioya"/>
              <ContentsLinkBox cardTitle="Problems" url="https://kenkoooo.com/atcoder/#/user/shioya/"/>
              <ContentsLinkBox cardTitle="Instagram" url="https://instagram.com/harashio.jp/"/>
            </Grid>

            <Grid item>
              <Qualifications />
            </Grid>
            <Grid item>
              <Activities />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
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
