import React from 'react'
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

function TakeNoteTwo() {
    return (
        <Container maxWidth='sm' style={{ width: '100%', margin: '30px' }}>
            <Paper elevation={5} sx={{ p: 3 }}>
                <TextField
                    variant="standard" placeholder='Title' fullWidth sx={{ outline: 'none', ':&hover': { border: 'none' } }}

                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                            <InputAdornment position="end" maxWidth='sm' style={{ border: 'none', display: 'flex', rowGap: '20px', justifyContent: 'flex-end' }}>
                                <PushPinOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
               
                />
                <TextField
                    variant="standard" placeholder='Take a note...'  fullWidth sx={{ 
                     py: '20px', outline: 'none', ':&hover': { border: 'none' } }}
                    InputProps={{ disableUnderline: true,style:{ fontFamily: "Roboto,Arial,sans-serif",
                    fontSize: ".875rem",
                    fontWeight: 400 ,color: "black",lineHeight: "1.25rem"}} }
                />
                <Typography >
                    <IconButton aria-label="Remainder" sx={'small'}>
                        <AddAlertOutlinedIcon />
                    </IconButton>

                    <IconButton sx={'small'}>
                        <PersonAddAltOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <ColorLensOutlinedIcon sx={'small'} />
                    </IconButton>

                    <IconButton>
                        <ImageOutlinedIcon  sx={'small'}/>
                    </IconButton>

                    <IconButton>
                        <ArchiveOutlinedIcon  sx={'small'}/>
                    </IconButton>

                    <IconButton>
                        <MoreVertOutlinedIcon sx={'small'} />
                    </IconButton>

                    <IconButton>
                        <UndoOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <RedoOutlinedIcon />
                    </IconButton>
                    
                    <button style={{border:'none'}}>Close</button>
                </Typography>
            </Paper>

        </Container>
    )
}

export default TakeNoteTwo