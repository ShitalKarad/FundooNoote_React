import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import CssBaseline from '@mui/material/CssBaseline';
import TakeNoteFirst from '../components/TakeNote/TakeNoteFirst/TakeNoteFirst';
import TakeNoteTwo from '../components/TakeNote/TakeNoteTwo/TakeNoteTwo';

function Dashboard() {
  const[item , setItem] = useState(
    false
  )

  return (
    <div>
      <CssBaseline />
      <Header setItem={setItem} style={{ marginBottom: '20px' }} />
      <Container>
        <Grid container>
          <Grid item xs={3} >
            {/* LeftNav goes here */}
            <LeftNav item={item} />
          </Grid>
          <Grid item xs={9}>
            <TakeNoteFirst></TakeNoteFirst>
            <TakeNoteTwo/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
