
import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
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

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


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
    noteGetData();

  }
  let onchangeUnArchive = async () => {
    let data = {
      noteIdList: [id],
      isArchived: false
    }
    let res = await archiveNote(data);
    console.log(res);
    noteGetData();

  }

  let handleDelete = async () => {

    let data = {
      noteIdList: [id],
      isDeleted: true
    }
    let res = await deleteNote(data);
    console.log(res);
    noteGetData()

  }

  let handleDeletePemently = async () => {
    let data = {
      noteIdList: [id],
      isDeleted: true
    }
    let res = await PermenentDeleteNote(data);
    console.log(res);
    noteGetData()

  }
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
      margin: '10px', 
      marginLeft:'90px'

    }}>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
        maxWidth: '330px',
      }}>
        <Paper sx={{
          backgroundColor: item.color, // Set background color based on selectedColor prop
          // Add other card styles here
          border: '1px solid gray', width: '270px', height: 'auto',
        }}>
          <Grid container style={{ padding: '10px' }}>
            <Grid item style={{ display: 'flex', justifyContent: 'space-between', justifyContent: 'flex-end' }}>
              <Typography>{item.title}</Typography>
              <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
                <PushPinOutlinedIcon style={{ fontSize: '20px', marginLeft: '110px' }} />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '10px' }}>
            <Typography style={{ marginRight: '0px' }}>{item.description}</Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
              {
                !item.isDeleted ? (
                  <>
                  <IconButton aria-label="Reminder" >
                  <AddAlertOutlinedIcon style={{ fontSize: '20px' }} />
                </IconButton>

                <IconButton>
                  <PersonAddAltOutlinedIcon style={{ fontSize: '20px' }} />
                </IconButton>

                <IconButton onClick={() => handleColourChange(selectedColor)} >
                  <ColorPickerButton onSelectColor={handleColorSelect} />
                </IconButton>

                <IconButton >
                  <ImageOutlinedIcon style={{ fontSize: '20px' }} />
                </IconButton>

                {

                  !item.isArchived ? (<IconButton onClick={onchangeArchive} >
                    <ArchiveOutlinedIcon style={{ fontSize: '20px' }} />
                  </IconButton>) : (<IconButton onClick={onchangeUnArchive} >
                    <UnarchiveOutlinedIcon style={{ fontSize: '20px' }} />
                  </IconButton>)
                }               

                <IconButton onClick={handleDelete} >
                  <DeleteOutlineOutlinedIcon style={{ fontSize: '20px' }} />
                </IconButton>
                
                </> 
               ) : (
                  <>
                     <IconButton onClick={handleDeletePemently} sx={{ paddingRight: '10px' }}>
                  <DeleteForeverOutlinedIcon style={{ fontSize: '20px' }} />
                </IconButton>
                  </>)
              }

            </Typography>
          </Grid>
        </Paper>
      </div>
    </Grid>

  );
}

export default TakeNoteGrid;

// is trash then call permennt else handle dlete