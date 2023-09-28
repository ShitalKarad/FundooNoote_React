import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { IconButton, Typography } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';


function TakeNoteGrid(getdata) {
    const [iconVisibility, setIconVisibility] = useState(false);

    const handleMouseEnter = () => {
        setIconVisibility(true);
    };

    const handleMouseLeave = () => {
        setIconVisibility(false);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} maxWidth='sm'>
            <Paper style={{ border: '1px solid gray', width: '330px', height: 'auto' }}>
                <Grid style={{ margin: '15px' }}>
                    <Grid item style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Title</Typography>
                        <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
                            <PushPinOutlinedIcon style={{ fontSize: '20px' }} />
                        </Typography>

                    </Grid>
                    <Grid item >
                        <Typography style={{ paddingTop: '20px' }}>Description</Typography>
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
        </div>
    );
}

export default TakeNoteGrid;
