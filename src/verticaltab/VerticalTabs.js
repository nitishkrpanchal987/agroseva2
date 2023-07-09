import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import "./vt.css"
import { useList } from '../context/listContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [list] = useList();
  const theme = createTheme({
    typography: {
      // Tell Material UI what the font-size on the html element is.
      // htmlFontSize: 5,
    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
          style={{ width: '100%' }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
            style={{ width: '20%' }}
          >
            <Tab label="Product" {...a11yProps(0)} />
            <Tab label="Campaign" {...a11yProps(1)} />
            <Tab label="Profile" {...a11yProps(2)} />
          </Tabs>
          <div className="tp" style={{ width: '80%' }}>
            <TabPanel value={value} index={0}>
            {list?.product_description}
            </TabPanel>
            <TabPanel value={value} index={1} >
            {list?.campaign_description}
            </TabPanel>
            <TabPanel value={value} index={2}>
            "Hi, I'm {list['contact']?.name}, a {list['contact']?.age}-year-old farmer from {list['contact']['address']?.city}, {list['contact']['address']?.state}. I work on a farm where we grow list of crops and raise list of livestock. We've been farming here for number of years and we take pride in producing high-quality, sustainable food for our community. It's great to meet you. What brings you here today?
            </TabPanel>
          </div>
        </Box>
      </Typography>
    </ThemeProvider>
  );
}
