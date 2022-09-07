import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="About Me" {...a11yProps(0)} />
          <Tab label="Hobby" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <Typography style={{margin: "0px", minHeight: "180px"}}>
          1999.8.16 宮崎県生、霧島酒造(株)の本社があることで有名な都城市に住み地方創成をテーマとしながらハッカソンやアプリ開発などを行なっていました。 <br />
          現在は福岡県、九州工業大学の川原研究室に在籍し無線ネットワークへのDLT活用の研究をする傍ら、アプリ開発のアルバイトをしています。 <br />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography style={{margin: "0px", minHeight: "180px"}}>
          旅行・BBQ
        </Typography>
      </TabPanel>
    </Box>
  );
}
