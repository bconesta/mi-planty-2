import React, {useState} from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/system/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import Logo from '../components/Logo'
import MenuIcon from '@mui/icons-material/Menu';
import Github from '../img/github.svg'
import zIndex from '@mui/material/styles/zIndex'

export default function Navbar(props) {
  
  const styles = {
    tab : {
      color : 'white'
    },
    git : {
      position : 'absolute',
      right : '3vh',
      top : '2vh'
    },
    gitlogo : {
      height : '28px',
      filter : 'invert(100%)'
    },
    login : {
      position : 'absolute',
      right : '9vh',
      top : '1.6vh'
    },
    logomobile : {

    },
    menulogo : {
      position : 'absolute',
      top : '1vh',
      right : '1vh'
    },
    menudesplegado : {
      backgroundColor : 'black',
      height : '100px',
      width : '100px'
    },
    cover : {
      width : '100%',
      height : '100%',
      backgroundColor : 'rgba(0,0,0,0.5)',
      position : 'absolute',
      zIndex : '-1',
      top : '0'
    },
    tabsContainerMobile : {
      backgroundColor : 'rgb(40,40,40)',
      position : 'absolute',
      width : '100%',
      animation : 'desplegar 0.5s ease',
      zIndex : '0'
    },
    gitMobile : {
      display : 'block',
      margin : '2vh'
    },
    gitlogoMobile : {
      height : '3vh',
      filter : 'invert(100%)'
    },
    loginMobile : {
      margin : '0 0 2vh 0'
    },
  }
  
  const [value, setValue] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleResize = () => {
    setWidth(window.innerWidth);
    if(window.innerWidth < 600){
      setTabMargen((window.innerWidth-360)*0.5);
    }
    else{setMenu(false)}
  }
  
  window.addEventListener('resize', handleResize);


  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  } 

  const [tabMargen, setTabMargen] = useState((window.innerWidth-360)/2);

  return (
    <>
      {
        //Si la pantalla tiene un ancho mayor a 600px, la navbar exportada va a ser esta 
      }
      {width >= 600 && 
      <Box sx={{backgroundColor : 'rgb(40,40,40)'}}>
        <Tabs
          value={value} 
          onChange={handleChange} 
          aria-label="icon label tabs example" 
          
          textColor="primary"
          indicatorColor="primary"
        >
          <Logo style={{height : '48px', margin : '9px'}} />
          <Tab label="Home" sx={styles.tab} />
          <Tab label="Docs" sx={styles.tab} />
          <Tab label="Contact" sx={styles.tab} />
          <a href="https://github.com/bconesta/mi-planty-2" rel="noreferrer" target="_blank" style={styles.git}>
            <img src={Github} alt="" style={styles.gitlogo} />
          </a>
          <Button sx={styles.login} variant="outlined">Log in</Button>
        </Tabs>
      </Box>
      }

      {
        //Si es menor a 600px, se exporta esta navbar adapatada a mobile: 
      }
      {width < 600 && 
      <div style={{backgroundColor : 'rgb(40,40,40)', textAlign : 'center', width : '100%', zIndex : '1', position : 'relative'}}>
        <Logo style={{height : '48px', margin : '9px'}} />
        <IconButton sx={styles.menulogo} onClick={toggleMenu}>
          <MenuIcon fontSize='large' sx={{color : 'white'}}></MenuIcon>
        </IconButton>
      </div>
      }
      {menu &&
      <> 
      <div style={styles.tabsContainerMobile}>
        <Tabs
          sx={{marginLeft : width>=360 ? tabMargen/8 : 0}}
          value={value} 
          onChange={handleChange} 
          aria-label="icon label tabs example" 
          orientation="vertical"
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <div></div>
          <Tab label="Home" sx={styles.tab} />
          <Tab label="Docs" sx={styles.tab} />
          <Tab label="Contact" sx={styles.tab} />
          
        </Tabs>
        <div style={{width : '100%', textAlign : 'center'}}>
            <a href="https://github.com/bconesta/mi-planty-2" rel="noreferrer" target="_blank" style={styles.gitMobile}>
              <img src={Github} alt="" style={styles.gitlogoMobile} />
            </a>
            <Button sx={styles.loginMobile} variant="outlined">Log in</Button>
        </div>
      </div>
      <div style={styles.cover}></div>
      </>
      }

      {value === 1 && props.tab1}
      {value === 2 && props.tab2}
      {value === 3 && props.tab3}
    </>
  )
}
