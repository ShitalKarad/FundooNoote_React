import { Container, Paper, TextField, IconButton } from '@mui/material'
import React from 'react'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function TakeNoteFirst({toggleNote}) {
    return (

        <Container  maxWidth='sm' style={{ width: '100%', margin: '30px',  }}
    sx={{alignItems:'center',justifyContent:'center' , paddingLeft:'17px',marginLeft:'15px' }}
        onClick={toggleNote}  >

            <Paper elevation={5} sx={{ p: 1,  }} >
                <TextField
                    variant="standard" placeholder='Take a note...' fullWidth sx={{ outline: 'none', ':&hover': { border: 'none' } }}

                    InputProps={{
                        disableUnderline: true,
                        endAdornment: (

                            <InputAdornment position="end" >

                                <IconButton>
                                    <CheckBoxOutlinedIcon  />
                                </IconButton>
                                <IconButton>
                                    <BrushOutlinedIcon  />
                                </IconButton>
                                <IconButton>
                                    <ImageOutlinedIcon  />
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