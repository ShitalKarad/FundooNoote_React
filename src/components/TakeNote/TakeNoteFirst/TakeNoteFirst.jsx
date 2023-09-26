import { Container, Paper, Typography, TextField, sm } from '@mui/material'
import React from 'react'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';



function TakeNoteFirst() {
    return (

        <Container maxWidth='sm' style={{ width: '100%', margin: '30px' }}>
            <Paper>
                <TextField
                    fullWidth
                    label="Take a note..."
                    id="takeNote"
                    InputProps={{

                        endAdornment: (
                            <InputAdornment position="end" maxWidth='sm' style={{display:'flex', rowGap:'20px', justifyContent:'flex-end'}}>
                                <CheckBoxOutlinedIcon />
                                <BrushOutlinedIcon />
                                <ImageOutlinedIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Paper>

        </Container>
    )
}

export default TakeNoteFirst