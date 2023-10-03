
import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { archiveNote } from '../../../services/noteServices';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deleteNote } from '../../../services/noteServices';
import { IconButton, Typography } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { colourNote } from '../../../services/noteServices';
import ColorPickerButton from '../ColourSelection';
import { PermenentDeleteNote } from '../../../services/noteServices';
function TakeNoteGrid({ item, id, noteGetData }) {
  const [iconVisibility, setIconVisibility] = useState(false);

  const handleMouseEnter = () => {
    setIconVisibility(true);
  };

  const handleMouseLeave = () => {
    setIconVisibility(false);
  };


  let onchangeArchive = async () => {
    let data = {
      noteIdList: [id],
      isArchived: true
    }
    let res = await archiveNote(data);
    console.log(res);

  }
  let handleDelete = async () => {
    console.log('clicked');
    let data = {
      noteIdList: [id],
      isDeleted: true
    }
    let res = await deleteNote(data);
    console.log(res);
    noteGetData()

  }

  // let handleDeletePemently = async () => {
  //   console.log('clicked');
  //   let data = {
  //     noteIdList: [id],
  //     isDeleted: true
  //   }
  //   let res = await PermenentDeleteNote(data);
  //   console.log(res);
  //   noteGetData()

  // }
  const [addData, setaddData] = useState({
    title: '',
    description: '',
    isArchived: false,
    color: ""

  })

  let handleColourChange = async () => {
    let data = {
      noteIdList: [id],
      color: selectedColor
    }
    let response = await colourNote(data);
    console.log('API response:', response);
    noteGetData()

  }

  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setaddData({
      ...addData,
      color: color
    })
  };

  return (
    <Grid container sx={{
      margin: '15px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
      gridTemplateRows: 'auto auto', // Two rows with automatic height
       // Add some gap between grid items
    }}>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
        maxWidth: '330px',
      }}>
        <Paper sx={{
          backgroundColor: item.color, // Set background color based on selectedColor prop
          // Add other card styles here
          border: '1px solid gray', width: '330px', height: 'auto',
        }}>
          <Grid container spacing={2} style={{ padding: '15px' }}>
            <Grid item style={{ display: 'flex', justifyContent: 'space-between', justifyContent: 'flex-end' }}>
              <Typography>{item.title}</Typography>
              <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
                <PushPinOutlinedIcon style={{ fontSize: '20px', marginLeft: '190px' }} />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ padding: '20px', marginRight: '0px' }}>{item.description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden', paddingTop: '20px' }}>
              <IconButton aria-label="Reminder" sx={{ paddingRight: '20px' }}>
                <AddAlertOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton sx={{ paddingRight: '20px' }}>
                <PersonAddAltOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton onClick={() => handleColourChange(selectedColor)} sx={{ paddingRight: '20px' }}>
                <ColorPickerButton onSelectColor={handleColorSelect} style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton sx={{ paddingRight: '20px' }}>
                <ImageOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton onClick={onchangeArchive} sx={{ paddingRight: '20px' }}>
                <ArchiveOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton onClick={handleDelete} sx={{ paddingRight: '20px' }}>
                <DeleteOutlineOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

            </Typography>
          </Grid>
        </Paper>
      </div>
    </Grid>

  );
}

export default TakeNoteGrid;

// is trash then call permennt else handle dlete