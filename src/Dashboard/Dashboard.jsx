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
  // const location = useLocation()


  // const [selectedColor, setSelectedColor] = useState('#ffffff'); // State for selected color



  // const handleColorSelect = (color) => {
  //   setSelectedColor(color);
  //   setaddData({
  //     ...addData,
  //     color:color
  //   })
  // };

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

  const [typeOfNotes, SetTypeOfNotes] = useState("Notes");


  const noteGetData = async () => {

    console.log("typeOfNote----->", typeOfNotes);

    let response = await getNote()
    const arr = response.data.data.data

    console.log(arr)
    if (typeOfNotes === 'Notes') {
      let newArr = arr.filter((val) => { return !val.isArchived && !val.isDeleted })
      setGetData(newArr)

    }
    else if (typeOfNotes === 'Archive') {
      let newArr = arr.filter((val) => { return val.isArchived && !val.isDeleted })
      setGetData(newArr)


    }
    else if (typeOfNotes === 'Bin') {
      console.log("arr", arr);
      let newArr = arr.filter((val) => val.isArchived === false && val.isDeleted === true)
      console.log("new arrr", newArr);
      setGetData(newArr)
    }



    // setGetData(arr)
    console.log(response);
  }

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 600); // Define your breakpoint here (e.g., 600px)
  };

  useEffect(() => {
    noteGetData();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [typeOfNotes, getdata.length]);

  console.log(getdata);

  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    checkScreenSize(); // Initial check when the component mounts
  }, []);

  const gridItemSize = isSmallScreen ? 12 : gird ? 3 : 12;

  return (
    <div>
      <CssBaseline />
      <Header setItem={setItem} setGrid={GridListNote} style={{ marginBottom: '20px' }} />
      <Container>
        <Grid container spacing={2} style={{ columnGap: '66px', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12} sm={3}>
            <LeftNav SetTypeOfNotes={SetTypeOfNotes} item={item} />
          </Grid>
          <Grid item xs={12} sm={9} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            {toggle ? <TakeNoteTwo toggleNote={toggleNote} noteGetData={noteGetData} /> : <TakeNoteFirst toggleNote={toggleNote} />}
          </Grid>
          {getdata.map(item => (
            <Grid item key={item.id} xs={gridItemSize}>
              {gird ? (
                <TakeNoteGrid
                  item={item}
                  noteGetData={noteGetData}
                  gridNote={gird}
                  id={item.id}
                  selectedColor={item.color}
                />
              ) : (
                <TakeNoteThreeList style={{display:'flex', justifyContent:'center', alignItems:'center'}}
                  key={item.id}
                  item={item}
                  noteGetData={noteGetData}
                  gridNote={gird}
                  selectedColor={item.color}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;