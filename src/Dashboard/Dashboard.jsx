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

  const [search, setSearch] = useState("");

  const [searchToggle, setSearchToggle] = useState(false)

  const [filterData, setFilterData] = useState(null)

  const [gird, setGrid] = useState(false)

  const [item, setItem] = useState(false)

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [toggle, setToggle] = useState(false)

  const [getdata, setGetData] = useState([]);

  const [typeOfNotes, SetTypeOfNotes] = useState("Notes");


  const toggleNote = () => {
    setToggle(previousState => !previousState)
  }


  const GridListNote = () => {
    setGrid(previousState => !previousState)
  }
  console.log("grid", gird);

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

    console.log(response);
  }

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 600);
  };

  useEffect(() => {

    console.log("search", search);
    let searchResult = getdata.filter((searchItem) =>
      searchItem.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilterData(searchResult);

    if (search.length !== 0) {
      setSearchToggle(true)

    } else {
      setSearchToggle(false)
    }

    noteGetData();

  }, [typeOfNotes, search.length]);

  console.log(filterData);

  useEffect(() => {
    checkScreenSize(); // Initial check when the component mounts
  }, []);

  const gridItemSize = isSmallScreen ? 12 : gird ? 3 : 12;


  return (
    <div>
      <CssBaseline />
      <Header setItem={setItem} setGrid={GridListNote}
        style={{
          marginBottom: '20px',
          width: isSmallScreen ? '50%' : '100%',
        }} setSearch={setSearch} search={search} />
      <Container>
        <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12} sm={3}>
            <LeftNav SetTypeOfNotes={SetTypeOfNotes} item={item} />
          </Grid >
          <Grid item xs={12} sm={9} >
            {toggle ? <TakeNoteTwo toggleNote={toggleNote} noteGetData={noteGetData} setToggle={setToggle} /> : <TakeNoteFirst toggleNote={toggleNote} />}
          </Grid>
          {searchToggle
            ? filterData.map((item) => (
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
                  <TakeNoteThreeList
                    key={item.id}
                    item={item}
                    noteGetData={noteGetData}
                    gridNote={gird}
                    selectedColor={item.color}
                  />
                )}
              </Grid>
            ))
            : getdata.map((item) => (
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

                  <TakeNoteThreeList
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