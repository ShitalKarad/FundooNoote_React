import React, { useState } from 'react';
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
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip'; 
import Box from '@mui/material/Box'; 
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu'; 
import { useNavigate } from 'react-router';
import toast from "react-hot-toast"




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const Header = ({ setItem, setGrid }) => {
  function menuToggle() {
    setItem(prev => !prev)
  }

  const [isClicked, setIsClicked] = useState(
    false
  );

  const handleSearchClick = () => {
    setIsClicked(true);
  };


  const settings = [ 'Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  
  const navigate = useNavigate()

  let poupProfile = () =>{
    localStorage.removeItem('token');
    // toast(
    //   () =>{
    //     <p>log out successfully ..!</p>
    //   }
    // );
    navigate("/login")
  }

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <IconButton edge="start" color="black" aria-label="menu" onClick={menuToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, display: 'flex', height: '40px' }}>
          <img class="gb_Hc gb_Hd" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x " alt="" aria-hidden="true" role="presentation" />
          <h3 style={{ color: "black", marginTop: '0px', marginLeft: '12px' }}>Keep</h3>
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon style={{ color: 'black' }} />
          </SearchIconWrapper>
          <box
            onClick={handleSearchClick}
            style={{
              width: '700px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '8px',
              marginRight: '100px',
              backgroundColor: isClicked ? 'white' : '#f3f3f3',
              borderRadius: '10px',
              boxShadow: isClicked ? '0px 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
              transition: 'background-color 0.3s, box-shadow 0.3s', // Add a transition for smooth effect

            }}

          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ color: 'black', flex: 1 }}
            />
            <IconButton
              style={{ padding: 4 }} // Adjust padding as needed
              onClick={() => {
                // Add your logic to clear the search input here
              }}
            >
              <ClearIcon style={{ color: 'black', marginRight: '10px' }} />
            </IconButton>
          </box>
        </Search>

        <IconButton edge="start" color="black" >
          <RefreshIcon style={{ marginRight: '15px' }} />
        </IconButton>
        <IconButton color="black" onClick={setGrid}>
          <GridViewOutlinedIcon style={{ marginRight: '15px' }} />
        </IconButton>
        <IconButton color="black">
          <SettingsOutlinedIcon style={{ marginRight: '30px' }} />
        </IconButton>
        <IconButton color="black">
          <AppsIcon />
        </IconButton>


        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleIcon />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem  key={setting} onClick={handleCloseUserMenu}>
                <Typography onClick={poupProfile}
                 textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* <IconButton color="black">
         
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;