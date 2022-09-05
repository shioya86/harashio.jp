import { AppBar, Toolbar, Typography} from '@material-ui/core'
import { maxHeight } from '@mui/system';
import React from 'react'

const styles = {
  header: {
    position: "fixed",
    background: "rgba(255, 255, 255, 0.8)",
    color: "#000",
    maxHeight: "4em"
  }

}
function Header() {
  return (
    <AppBar position="static" style={styles.header}>
      <Toolbar>
        <Typography>Shioya's Portfolio</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;