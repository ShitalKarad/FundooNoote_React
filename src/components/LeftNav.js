import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ReminderIcon from '@mui/icons-material/AccessAlarm'; 
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const LeftNav = ({ item }) => {
  const drawerWidth = 240; 

  const drawerStyles = {
    width: item ? drawerWidth : '60px', 
    flexShrink: 0,
    whiteSpace: 'nowrap',
    transition: 'width 0.3s', 
    marginTop:'70px',
    border:'none'
  };

  return (
    <Drawer
      variant="permanent"
      open={item}
      PaperProps={{ style: drawerStyles}}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <LightbulbOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ReminderIcon /> 
          </ListItemIcon>
          <ListItemText primary="Reminder" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ModeEditOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArchiveOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon /> 
          </ListItemIcon>
          <ListItemText primary="Bin" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftNav;
