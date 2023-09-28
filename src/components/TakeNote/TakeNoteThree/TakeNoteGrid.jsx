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

function TakeNoteGrid({ title, description }) {
  const [iconVisibility, setIconVisibility] = useState(false);

  const handleMouseEnter = () => {
    setIconVisibility(true);
  };

  const handleMouseLeave = () => {
    setIconVisibility(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ maxWidth: '330px', margin: '15px', display: 'inline-block' }}>
      <Paper style={{ border: '1px solid gray', width: '100%', height: 'auto' }}>
        <Grid style={{ padding: '15px' }}>
          <Typography>{title}</Typography>
          <Typography style={{ visibility: iconVisibility ? 'visible' : 'hidden' }}>
            <PushPinOutlinedIcon style={{ fontSize: '20px' }} />
          </Typography>
          <Typography style={{ paddingTop: '20px' }}>{description}</Typography>
          <div
            style={{
              visibility: iconVisibility ? 'visible' : 'hidden',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'center',
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
          </div>
        </Grid>
      </Paper>
    </div>
  );
}

export default TakeNoteGrid;
