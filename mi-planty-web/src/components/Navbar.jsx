import React, {useState} from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/system/Box'
import Logo from '../components/Logo'

export default function Navbar(props) {
  
  const styles = {
    backgroundColor : 'grey'
  }
  
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <>
      <Box sx={{backgroundColor : 'rgb(40,40,40)'}}>
        <Tabs
          value={value} 
          onChange={handleChange} 
          aria-label="icon label tabs example" 
          
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab disabled icon={<Logo />}/>
          <Tab label="Home" sx={{color : 'white'}} />
          <Tab label="Docs" sx={{color : 'white'}} />
          <Tab label="Contact" sx={{color : 'white'}} />
        </Tabs>
      </Box>
      {value == 1 && props.tab1}
      {value == 2 && props.tab2}
      {value == 3 && props.tab3}
    </>
  )
}
