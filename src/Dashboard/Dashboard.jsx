import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import CssBaseline from '@mui/material/CssBaseline';

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
            {/* Main content goes here */}
            {/* You can add your main content components here */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
