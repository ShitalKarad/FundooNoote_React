import React, { useState } from 'react';
import {
  Button,
  Box,
} from '@mui/material';
// import Modal from '@mui/material/Modal';
import TakeNoteTwo from '../TakeNoteTwo/TakeNoteTwo';
import { updateNotes } from '../../../services/noteServices';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
};

function EditNote({ item, note, onClose, onUpdate }) {
  console.log("Edi note", item,"note", note)
  const [addData, setaddData] = useState({
    title: '',
    description: '',
    isArchived: false,
    color: ""

})
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
 
  const handleCancel = () => {
    handleClose(); // Close the modal
    onClose(); // Close the edit component without saving changes
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open</Button> */}
      <div
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TakeNoteTwo
            note={note}
            onClose={handleCancel}
            onUpdate={(updatedData) => {
              // Handle the updated data (e.g., update the UI or trigger a data refresh)
              console.log('Updated note data:', updatedData);
            }}
            onClick={handleOpen}
           />
           <div>
            {/* <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button> */}
            {/* <Button variant="contained" color="default" onClick={handleCancel}>
              Cancel
            </Button> */}
            </div>
          
        </Box>
      </div>
    </div>
  );
}

export default EditNote;
