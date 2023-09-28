
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

function TakeNoteGrid({ title, description }) {
  const [iconVisibility, setIconVisibility] = useState(false);

  const handleMouseEnter = () => {
    setIconVisibility(true);
  };

  const handleMouseLeave = () => {
    setIconVisibility(false);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Paper style={{ border: '1px solid gray', width: '100%', height: 'auto' }}>
          <div style={{ padding: '15px' }}>
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
          </div>
        </Paper>
      </div>
    </Grid>
  );
}

export default TakeNoteGrid;
