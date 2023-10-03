import { Container, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { IconButton, Typography } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { archiveNote } from '../../../services/noteServices';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { deleteNote } from '../../../services/noteServices';


function TakeNoteGrid({ item, isArchived ,id  ,noteGetData}) {
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
    return (
        <Container maxWidth='3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Paper style={{ border: '1px solid gray',  height: 'auto',width:'67%' ,marginLeft:'30px', marginBottom:'20px'}}>
                <Grid style={{ margin: '15px' , }}>
                    <Grid item style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>{item.title}</Typography>
                        <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
                            <PushPinOutlinedIcon style={{ fontSize: '20px' }} />
                        </Typography>


                    </Grid>
                    <Grid item >
                        <Typography style={{ paddingTop: '20px' }}>{item.description}</Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: 0 }}>
                        <Typography
                            style={{
                                visibility: iconVisibility ? 'visible' : 'hidden', paddingTop: '20px'
                            }}
                        >
                            <IconButton aria-label="Remainder" sx={{ paddingRight: '20px' }}>
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
        </Container>


    );
}

export default TakeNoteGrid;