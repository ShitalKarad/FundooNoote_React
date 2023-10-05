import React, { useState } from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { Container, Paper, TextField, Typography, IconButton } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { addNote } from '../../../services/noteServices';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ColorPickerButton from '../ColourSelection';



function TakeNoteTwo({ noteGetData ,setToggle}) {

    const [selectedColor, setSelectedColor] = useState('#ffffff');

    const handleColorSelect = (color) => {
        console.log("colour", color);
        setSelectedColor(color);
        setaddData({
            ...addData,
            color: color
        })
    };

    const [addData, setaddData] = useState({
        title: '',
        description: '',
        isArchived: false,
        color: ""

    })

    const handleChange = (e) => {
        setaddData({
            ...addData,
            [e.target.id]: e.target.value
        })
    }



    const addNoteHandle = async () => {
if (!addData.title || !addData.description) {
    return setToggle(false);
}
        let res = await addNote(addData);
        console.log(res);
        noteGetData();
        setToggle(false)
    }

    const handleArchive = () => {
        setaddData({
            ...addData,
            isArchived: true,

        })

    }
    return (
        <Container maxWidth='sm' style={{ width: '100%', margin: '30px' ,   }}>
            <Paper elevation={5} sx={{ p: 1, backgroundColor: selectedColor }}
            // Set background color based on selectedColor prop

            >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: 'none' }}>
                   
                    <TextField
                        id='title' value={addData.title} variant="standard" placeholder='Title' onChange={handleChange} fullWidth sx={{ outline: 'none', ':&hover': { border: 'none' } }}

                        InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                                <InputAdornment position="end" maxWidth='sm' style={{ border: 'none', display: 'flex', justifyContent: 'flex-end' }}>
                                    <PushPinOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}

                    />
                   
                </div>

                <TextareaAutosize
                    id='description'
                    value={addData.description}
                    onChange={handleChange}
                    placeholder='Take a note...'
                    minRows={1} // You can adjust this value as needed
                    maxRows={10} // You can adjust this value as needed
                   
                    style={{
                        fontFamily: "Roboto, Arial, sans-serif",
                        fontSize: ".875rem",
                        fontWeight: 400,
                        color: "black",
                        lineHeight: "1.25rem",
                        resize: 'none',
                        width: '100%',
                        border: 'none',
                        // marginTop:'20px',
                        outline: 'none', ':&hover': { border: 'none' } ,
                        backgroundColor: selectedColor

                    }}
                />


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography >
                        <IconButton aria-label="Remainder" sx={'small'}>
                            <AddAlertOutlinedIcon sx={{ fontSize: '20px' }} />
                        </IconButton>

                        <IconButton sx={'small'}>
                            <PersonAddAltOutlinedIcon sx={{ fontSize: '20px' }} />
                        </IconButton>

                        <IconButton >
                            <ColorPickerButton onSelectColor={handleColorSelect} sx={{ fontSize: '20px' }} />
                        </IconButton>

                        <IconButton>
                            <ImageOutlinedIcon sx={{ fontSize: '20px' }} />
                        </IconButton>

                        <IconButton onClick={handleArchive} >
                            <ArchiveOutlinedIcon sx={{ fontSize: '20px' }} />
                        </IconButton>

                        <IconButton>
                            <MoreVertOutlinedIcon sx={{ fontSize: '20px' }} />
                        </IconButton>

                        <IconButton>
                            <UndoOutlinedIcon sx={{ fontSize: '20px' }} />
                        </IconButton>

                        <IconButton>
                            <RedoOutlinedIcon sx={{ fontSize: '20px' }} />
                        </IconButton>

                    </Typography>
                    <Typography>
                        <button onClick={addNoteHandle} style={{ border: 'none', fontSize: '16 px', background: 'none', paddingTop: '20px' }}>Close</button>
                    </Typography>
                </div>
            </Paper>

        </Container>
    )
}

export default TakeNoteTwo