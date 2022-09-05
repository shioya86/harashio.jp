import * as React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import { Grid } from '@mui/material';
import Profile from './pages/Profile';
import Qualifications from './pages/Qualifications';
import Activities from './pages/Activities';
import Works from './pages/Works';
import Links from './pages/Links';

const styles = {
  headerDummy: {
    marginTop: "4em"
  }
}

const App = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
            <Grid item>
              <Qualifications />
            </Grid>
            <Grid item>
              <Activities />
            </Grid>
            <Grid item>
              <Links />
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>

        <Grid sm={2} />

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
