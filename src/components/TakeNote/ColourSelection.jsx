import React from 'react';
import { IconButton, Popover } from '@mui/material';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

const ColorPicker = ({ onSelectColor }) => {
    const colors = ['#ffffff', '#ffcc80', '#80ffea', '#ccff80', '#ff9999'];
    
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {colors.map((color) => (
        <IconButton
          key={color}
          onClick={() => onSelectColor(color)}
          style={{
            backgroundColor: color,
            width: '24px',
            height: '24px',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

const ColorPickerButton = ({ onSelectColor }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton onClick={handleClick}>
        <ColorLensOutlinedIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ColorPicker onSelectColor={onSelectColor} />
      </Popover>
    </div>
  );
};

export default ColorPickerButton;
