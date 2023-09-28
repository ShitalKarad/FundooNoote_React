import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import CssBaseline from '@mui/material/CssBaseline';
import TakeNoteFirst from '../components/TakeNote/TakeNoteFirst/TakeNoteFirst';
import TakeNoteTwo from '../components/TakeNote/TakeNoteTwo/TakeNoteTwo';
import TakeNoteGrid from '../components/TakeNote/TakeNoteThree/TakeNoteGrid';
import TakeNoteThreeList from '../components/TakeNote/TakeNoteThree/TakeNoteThreeList'
import { getNote } from '../services/noteServices';

function Dashboard() {
  const [item, setItem] = useState(
    false
  )

  const [toggle, setToggle] = useState(
    false
  )

  const toggleNote = () => {
    setToggle(previousState => !previousState)
  }

  const [gird, setGrid] = useState(
    false
  )

  const GridListNote = () => {
    setGrid(previousState => !previousState)
  }
console.log("grid",gird);
 
const[getdata,setGetData] = useState([]);

const noteGetData = async() =>{
  let response = await getNote()
  setGetData(response.data.data.data)
  console.log(response);
} 

useEffect(() => {
  noteGetData();

}, [])

console.log(getdata);
  return (
    <div>
      <CssBaseline />
      <Header setItem={setItem} setGrid={GridListNote} style={{ marginBottom: '20px' }} />
      <Container>
        <Grid container>
          <Grid item xs={3} >
            <LeftNav item={item} />
          </Grid>
          <Grid item xs={9}>
            {
              toggle ? <TakeNoteTwo toggleNote={toggleNote} /> : <TakeNoteFirst toggleNote={toggleNote} />
            }

            {/* <TakeNoteFirst/>
            <TakeNoteTwo /> */}

            {
              gird ? <TakeNoteGrid gridNote={gird} /> : <TakeNoteThreeList gridNote={gird } />
            }

            {/* <TakeNoteGrid />
            <TakeNoteThreeList /> */}

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
