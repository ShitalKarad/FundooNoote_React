import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import NoteIcon from '@mui/icons-material/Note'; 
import ReminderIcon from '@mui/icons-material/AccessAlarm'; 
import EditIcon from '@mui/icons-material/Edit'; 
import LabelIcon from '@mui/icons-material/Label'; 
import ArchiveIcon from '@mui/icons-material/Archive'; 
import BinIcon from '@mui/icons-material/Delete'; 

const LeftNav = ({ item }) => {
  const drawerWidth = 240; 

  const drawerStyles = {
    width: item ? drawerWidth : '60px', 
    flexShrink: 0,
    whiteSpace: 'nowrap',
    transition: 'width 0.3s', 
    marginTop:'70px'
  };

  return (
    <Drawer
      variant="permanent"
      open={item}
      PaperProps={{ style: drawerStyles }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <NoteIcon /> 
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
            <EditIcon /> 
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LabelIcon /> 
          </ListItemIcon>
          <ListItemText primary="Label" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ArchiveIcon /> 
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <BinIcon /> 
          </ListItemIcon>
          <ListItemText primary="Bin" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftNav;
