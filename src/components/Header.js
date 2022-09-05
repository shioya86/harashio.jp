import { AppBar, Toolbar, Typography} from '@material-ui/core'
import React from 'react'

const styles = {
  
}
function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>ヘッダー</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;