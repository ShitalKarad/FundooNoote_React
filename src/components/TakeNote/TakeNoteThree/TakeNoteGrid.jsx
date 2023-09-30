
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


function TakeNoteGrid({ title, description, isArchived ,id  ,noteGetData}) {
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
  let handleDelete = async() =>{
    console.log('clicked');
    let data = {
      noteIdList: [id],
      isDeleted: true
    }
    let res = await deleteNote(data);
    console.log(res);
    noteGetData()

  }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Paper style={{ border: '1px solid gray', width: '330px', height: 'auto' }}>
        <Grid container spacing={2} style={{ padding: '15px' }}>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ paddingTop: '20px' }}>{description}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden', paddingTop: '20px' }}>
              <IconButton aria-label="Reminder" sx={{ paddingRight: '20px' }}>
                <AddAlertOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton sx={{ paddingRight: '20px' }}>
                <PersonAddAltOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton sx={{ paddingRight: '20px' }}>
                <ColorLensOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton sx={{ paddingRight: '20px' }}>
                <ImageOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton onClick={onchangeArchive} sx={{ paddingRight: '20px' }}>
                <ArchiveOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>

              <IconButton  onClick={handleDelete} sx={{ paddingRight: '20px' }}>
                <DeleteOutlineOutlinedIcon style={{ fontSize: '20px' }} />
              </IconButton>
             
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default TakeNoteGrid;