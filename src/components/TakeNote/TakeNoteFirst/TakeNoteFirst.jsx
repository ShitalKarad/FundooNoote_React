import { Container, Paper, TextField, IconButton } from '@mui/material'
import React from 'react'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function TakeNoteFirst() {
    return (

        <Container maxWidth='sm' style={{ width: '100%', margin: '30px' }}>
            <Paper sx={{ p: 3 }}>
                <TextField
                    variant="standard" placeholder='Take a note...' fullWidth sx={{ outline: 'none', ':&hover': { border: 'none' } }}


                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (

                            <InputAdornment position="end" maxWidth='sm' style={{ display: 'flex', rowGap: '20px', justifyContent: 'flex-end' }}>

                                <IconButton>
                                    <CheckBoxOutlinedIcon sx={'small'} />
                                </IconButton>
                                <IconButton>
                                    <BrushOutlinedIcon sx={'small'} />
                                </IconButton>
                                <IconButton>
                                    <ImageOutlinedIcon sx={'small'} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}

                />
            </Paper>

        </Container>
    )
}

export default TakeNoteFirst