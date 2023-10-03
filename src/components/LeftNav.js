// import React, { useState } from 'react';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// import ReminderIcon from '@mui/icons-material/AccessAlarm';
// import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
// import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// const LeftNav = ({ item, primary }) => {
//   const drawerWidth = 240;

//   const drawerStyles = {
//     width: item ? drawerWidth : '60px',
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     transition: 'width 0.3s',
//     marginTop: '70px',
//     border: 'none'
//   };


//   const [isNoteClicked, setIsNoteClicked] = useState(false);
//   const [isReminderClicked, setIsReminderClicked] = useState(false);
//   const [isEditClicked, setIsEditClicked] = useState(false);
//   const [isArchiveClicked, setIsArchiveClicked] = useState(false);
//   const [isBinClicked, setIsBinClicked] = useState(false);

//   const handleNoteClick = () => {
//     setIsNoteClicked(!isNoteClicked);
//   };

//   const handleReminderClick = () => {
//     setIsReminderClicked(!isReminderClicked);
//   };

//   const handleEditClick = () => {
//     setIsEditClicked(!isEditClicked);
//   };

//   const handleArchiveClick = () => {
//     setIsArchiveClicked(!isArchiveClicked);
//   };

//   const handleBinClick = () => {
//     setIsBinClicked(!isBinClicked);
//   };

//   const [isHovered, setIsHovered] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       open={item}
//       PaperProps={{ style: drawerStyles }}
//     >
//         <List>
//         <ListItem onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onClick={handleClick}
//           style={{
//             borderRadius: '20px',
//             background: isClicked ? '#feefc3' : isHovered ? '#f3f3f3' : 'transparent',
//             width: '100%',
//           }}>
//           <ListItemIcon>
//             <LightbulbOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary='Notes' />
//         </ListItem>

//         <ListItem
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onClick={handleClick}
//           style={{
//             borderRadius: '20px',
//             background: isClicked ? '#feefc3' : isHovered ? '#f3f3f3' : 'transparent',
//             width: '100%',
//           }}
//         >
//           <ListItemIcon>
//             <ReminderIcon />
//           </ListItemIcon>
//           <ListItemText primary="Reminder" />
//         </ListItem>

//         <ListItem onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onClick={handleClick}
//           style={{
//             borderRadius: '20px',
//             background: isClicked ? '#feefc3' : isHovered ? '#f3f3f3' : 'transparent',
//             width: '100%',
//           }}>
//           <ListItemIcon>
//             <ModeEditOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Edit" />
//         </ListItem>

//         <ListItem onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onClick={handleClick}
//           style={{
//             borderRadius: '20px',
//             background: isClicked ? '#feefc3' : isHovered ? '#f3f3f3' : 'transparent',
//             width: '100%',
//           }}>
//           <ListItemIcon>
//             <ArchiveOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Archive" />
//         </ListItem>

//         <ListItem onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           onClick={handleClick}
//           style={{
//             borderRadius: '20px',
//             background: isClicked ? '#feefc3' : isHovered ? '#f3f3f3' : 'transparent',
//             width: '100%',
//           }}>
//           <ListItemIcon>
//             <DeleteOutlineOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText primary="Bin" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default LeftNav;



import React, { useState } from 'react';
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

const LeftNav = ({ item, primary ,SetTypeOfNotes}) => {
  const drawerWidth = 270;

  const drawerStyles = {
    width: item ? drawerWidth : '60px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    transition: 'width 0.3s',
    marginTop: '70px',
    border: 'none'
  };

  
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setClickedItem(itemName);
    SetTypeOfNotes(itemName)
  };

  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (itemName) => {
    setIsHovered(itemName);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };




  return (
    <Drawer
      variant="permanent"
      open={item}
      PaperProps={{ style: drawerStyles }}
    >
      <List>
        <ListItem
          onClick={() => handleItemClick('Notes' ) }
          onMouseEnter={() => handleMouseEnter('Notes')}
          onMouseLeave={handleMouseLeave}
          style={{
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            background:
              clickedItem === 'Notes'
                ? '#feefc3'
                : isHovered === 'Notes'
                ? '#f3f3f3'
                : 'transparent',
            width: '100%',
          }}
        >
          <ListItemIcon>
            <LightbulbOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Notes' />
        </ListItem>

        <ListItem
          onClick={() => handleItemClick('Reminder')}
          onMouseEnter={() => handleMouseEnter('Reminder')}
          onMouseLeave={handleMouseLeave}
          style={{
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            background:
              clickedItem === 'Reminder'
                ? '#feefc3'
                : isHovered === 'Reminder'
                ? '#f3f3f3'
                : 'transparent',
            width: '100%',
          }}
        >
          <ListItemIcon>
            <ReminderIcon />
          </ListItemIcon>
          <ListItemText primary="Reminder" />
        </ListItem>

        <ListItem
          onClick={() => handleItemClick('Edit')}
          onMouseEnter={() => handleMouseEnter('Edit')}
          onMouseLeave={handleMouseLeave}
          style={{
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            background:
              clickedItem === 'Edit'
                ? '#feefc3'
                : isHovered === 'Edit'
                ? '#f3f3f3'
                : 'transparent',
            width: '100%',
          }}
        >
          <ListItemIcon>
             <ModeEditOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </ListItem>


        <ListItem
          onClick={() => handleItemClick('Archive')}
          onMouseEnter={() => handleMouseEnter('Archive')}
          onMouseLeave={handleMouseLeave}
          style={{
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            background:
              clickedItem === 'Archive'
                ? '#feefc3'
                : isHovered === 'Archive'
                ? '#f3f3f3'
                : 'transparent',
            width: '100%',
          }}
        >
          <ListItemIcon>
          <ArchiveOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItem>

        <ListItem
          onClick={() => handleItemClick('Bin')}
          onMouseEnter={() => handleMouseEnter('Bin')}
          onMouseLeave={handleMouseLeave}
          style={{
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            background:
              clickedItem === 'Bin'
                ? '#feefc3'
                : isHovered === 'Bin'
                ? '#f3f3f3'
                : 'transparent',
            width: '100%',
          }}
        >
          <ListItemIcon>
          <DeleteOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Bin" />
        </ListItem>

        {/* Repeat the pattern for other list items */}
      </List>
    </Drawer>
  );
};

export default LeftNav;
