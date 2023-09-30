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
import { useLocation } from 'react-router';

function Dashboard() {
  const location = useLocation()

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
  console.log("grid", gird);

  const [getdata, setGetData] = useState([]);

const[typeOfNotes, SetTypeOfNotes] = useState("Notes");


  const noteGetData = async () => {
    
    console.log("typeOfNote----->",typeOfNotes);

    let response = await getNote()
    const arr = response.data.data.data
   
      console.log(arr)
      if (typeOfNotes === 'Notes') {
        let newArr = arr.filter((val) => {return !val.isArchived && !val.isDeleted })
        setGetData(newArr)

      }
      else if (typeOfNotes === 'Archive') {
        let newArr = arr.filter((val) => {return val.isArchived && !val.isDeleted })
        setGetData(newArr)


      }
      else if (typeOfNotes === 'Bin') {
        console.log("arr" ,arr);
        let newArr = arr.filter((val) =>val.isArchived === false && val.isDeleted === true)
        console.log("new arrr", newArr);
        setGetData(newArr)
      }

      
    
    // setGetData(arr)
    console.log(response);
  }

  useEffect(() => {
    noteGetData();

  }, [typeOfNotes])

  console.log(getdata);
  return (
    <div>
      <CssBaseline />
      <Header setItem={setItem} setGrid={GridListNote} style={{ marginBottom: '20px' }} />
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <LeftNav SetTypeOfNotes={SetTypeOfNotes} item={item} />
          </Grid>
          <Grid item xs={9}>
            {toggle ? <TakeNoteTwo toggleNote={toggleNote} noteGetData={noteGetData} /> : <TakeNoteFirst toggleNote={toggleNote} />}

            {getdata.map((item) => (
              gird ? <TakeNoteGrid key={item.id} {...item} noteGetData={noteGetData}  gridNote={gird} id={item.id} /> : <TakeNoteThreeList key={item.id} {...item} gridNote={gird} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;