import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import NoteIcon from '@mui/icons-material/Note'; // Note Icon
import ReminderIcon from '@mui/icons-material/AccessAlarm'; // Reminder Icon
import EditIcon from '@mui/icons-material/Edit'; // Edit Icon
import LabelIcon from '@mui/icons-material/Label'; // Label Icon
import ArchiveIcon from '@mui/icons-material/Archive'; // Archive Icon
import BinIcon from '@mui/icons-material/Delete'; // Bin Icon

  const LeftNav = ({item}) => {
    
  return (
    <Drawer variant="permanent" anchor="left " > 
      <List sx={{width:item? '100%':'60px'}}>
        {/* Notes */}
        <ListItem >
          <ListItemIcon>
            <NoteIcon /> {/* Icon for Notes */}
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>

        {/* Reminder */}
        <ListItem >
          <ListItemIcon>
            <ReminderIcon /> {/* Icon for Reminder */}
          </ListItemIcon>
          <ListItemText primary="Reminder" />
        </ListItem>

        {/* Edit */}
        <ListItem >
          <ListItemIcon>
            <EditIcon /> {/* Icon for Edit */}
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </ListItem>

        {/* Label */}
        <ListItem >
          <ListItemIcon>
            <LabelIcon /> {/* Icon for Label */}
          </ListItemIcon>
          <ListItemText primary="Label" />
        </ListItem>

        {/* Archive */}
        <ListItem >
          <ListItemIcon>
            <ArchiveIcon /> {/* Icon for Archive */}
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItem>

        {/* Bin */}
        <ListItem >
          <ListItemIcon>
            <BinIcon /> {/* Icon for Bin */}
          </ListItemIcon>
          <ListItemText primary="Bin" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftNav;
