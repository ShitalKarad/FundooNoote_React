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


function TakeNoteGrid({title,description}) {
    const [iconVisibility, setIconVisibility] = useState(false);

    const handleMouseEnter = () => {
        setIconVisibility(true);
    };

    const handleMouseLeave = () => {
        setIconVisibility(false);
    };

    return (
        <Container maxWidth='3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Paper style={{ border: '1px solid gray',  height: 'auto',width:'69%' ,marginLeft:'20px', marginBottom:'20px'}}>
                <Grid style={{ margin: '15px' , }}>
                    <Grid item style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>{title}</Typography>
                        <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
                            <PushPinOutlinedIcon style={{ fontSize: '20px' }} />
                        </Typography>


                    </Grid>
                    <Grid item >
                        <Typography style={{ paddingTop: '20px' }}>{description}</Typography>
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

                            <IconButton sx={{ paddingRight: '20px' }}>
                                <ArchiveOutlinedIcon style={{ fontSize: '20px' }} />
                            </IconButton>

                            <IconButton sx={{ paddingRight: '20px' }}>
                                <MoreVertOutlinedIcon style={{ fontSize: '20px' }} />
                            </IconButton>

                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>


    );
}

export default TakeNoteGrid;