
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
import ColorPickerButton from '../ColourSelection';
import { deleteNote } from '../../../services/noteServices';
import { colourNote } from '../../../services/noteServices';
import DeleteForeverOutlined from '@mui/icons-material/DeleteForeverOutlined';
import { PermenentDeleteNote } from '../../../services/noteServices';

function TakeNoteThreeList({ item, id, noteGetData,filterData}) {


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
        console.log(response);
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
        <Container  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        sx={{alignItems:'center',justifyContent:'center', width:'100%'}}
        >
            <Paper style={{
                border: '1px solid gray', height: 'auto', width: '50%'
                , marginBottom: '20px', backgroundColor: item.color,
            }}>
                <Grid style={{ margin: '10px', }}>
                    <Grid item style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>{item.title}</Typography>
                        <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
                            <PushPinOutlinedIcon style={{ fontSize: '20px' }} />
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography style={{ paddingTop: '10px' }}>{item.description}</Typography>
                    </Grid>
                    <Grid item >
                        <Typography style={{
                            visibility: iconVisibility ? 'visible' : 'hidden', paddingTop: '10px'
                        }}>

                            {
                                item.isDeleted ? (<IconButton onClick={handleDeletePemently} sx={{ paddingRight: '20px' }}>
                                    <DeleteOutlineOutlinedIcon style={{ fontSize: '20px' }} />
                                </IconButton>) : (

                                    <>

                                        <IconButton aria-label="Remainder" sx={{ paddingRight: '20px' }}>
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
                                    </>
                                )
                            }

                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container >


    );
}


export default TakeNoteThreeList