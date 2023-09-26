import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh'; 
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[300], 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = ({setItem}) => {
  function menuToggle() {
    setItem(prev=> !prev)
  }
  return (
    <AppBar position="sticky" sx={{backgroundColor:'white'}}>
      <Toolbar>
        <IconButton edge="start" color="black" aria-label="menu" onClick={menuToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 ,display:'flex',height:'40px'}}>
        <img class="gb_Hc gb_Hd" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation"/>
         <h3 style={{color: "black",marginTop:'0px',marginLeft:'12px'}}>Keep</h3> 
        </Typography>
        <Search style={{marginRight:'200px' , width:'700px', height:'44px',  }}>
          <SearchIconWrapper >
            <StyledInputBase/>
            <SearchIcon style={{color: "black", marginRight:'12px'}} />
            <h3 style={{color: "black"}}>Search</h3>
          </SearchIconWrapper>
        </Search>
        <IconButton edge="start" color="black" >
          <RefreshIcon /> 
        </IconButton>
        <IconButton color="black">
        <GridViewOutlinedIcon />
        </IconButton>
        <IconButton color="black">
          <SettingsOutlinedIcon /> 
        </IconButton>
        <IconButton color="black">
          <AppsIcon /> 
        </IconButton>
        <IconButton color="black">
          <AccountCircleIcon /> 
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
