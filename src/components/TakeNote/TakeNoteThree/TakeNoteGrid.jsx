import { Grid, Paper ,Input } from '@mui/material';
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
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import { colourNote } from '../../../services/noteServices';
import ColorPickerButton from '../ColourSelection';
import { PermenentDeleteNote } from '../../../services/noteServices';
import { updateNotes } from '../../../services/noteServices';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';


import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


function TakeNoteGrid({ item, id, noteGetData }) {

  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const [iconVisibility, setIconVisibility] = useState(false);

  const [addData, setaddData] = useState({
    title: '',
    description: '',
    isArchived: false,
    color: ""

  })

  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(item.title);

  const [editedDescription, setEditedDescription] = useState(item.description);

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

  let restoreTrashNote = async () => {
    let data = {
      noteIdList: [id],
      isDeleted: false
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


  let handleColourChange = async () => {
    let data = {
      noteIdList: [id],
      color: selectedColor
    }
    let response = await colourNote(data);
    console.log(response);
    noteGetData()

  }

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setaddData({
      ...addData,
      color: color
    })
  };

   
  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const enterEditMode = () => {
    setIsEditing(true);
  };

  const exitEditMode = () => {
    setIsEditing(false);
  };


  const updateNote = async () => {
    const updatedData = {
      noteId:[id],
      title: editedTitle,
      description: editedDescription,
    };
    const response = await updateNotes(id, updatedData);
    console.log(response);
    noteGetData();
   setIsEditing(false);
  };

  return (
    <Grid container 
      sx={{

        margin: '10px',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '80px',
      }}>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
        maxWidth: '250px',
      }}>
        <Paper sx={{
          backgroundColor: item.color,
          border: '1px solid gray',
          width: '270px',
          height: 'auto',
          marginLeft: '0px', // Center the note horizontally

          alignContent: 'center',
          justifyContent: 'center'
        }}>
          <Grid container style={{ padding: '10px' }}>
            <Grid item style={{ display: 'flex', justifyContent: 'space-between', justifyContent: 'flex-end' }}>
              {isEditing ? (
                <Input value={editedTitle} onChange={handleTitleChange} fullWidth />
              ) : (
                <Typography>{item.title}</Typography>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '10px' }}>
            {isEditing ? (
              <Input
                value={editedDescription}
                onChange={handleDescriptionChange}
                fullWidth
                multiline
                rows={4}
              />
            ) : (
              <Typography style={{ marginRight: '0px' }}>{item.description}</Typography>
            )}
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

                    <IconButton   onClick={enterEditMode}>
                      <ModeEditOutlinedIcon style={{ fontSize: '20px' }} />
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

                    <IconButton onClick={restoreTrashNote}>
                      <RestoreFromTrashOutlinedIcon />
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