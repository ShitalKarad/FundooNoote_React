import axios from "axios";

const url = "http://fundoonotes.incubation.bridgelabz.com/api/notes";

const headerConfig = () => {
    return {
        headers: {
            "Authorization": localStorage.getItem("userDetails")
        }
    }
}

export const getNote = async () => {
    let response = await axios.get( `${url}/getNotesList`
        , headerConfig());

    console.log(response);
    return response;
}

export const addNote = async ( data) => {
    let response = await axios.post( `${url}/addNotes`,data
        , headerConfig());

    console.log(response);
    return response;
}

export const archiveNote = async ( data) => {
    let response = await axios.post( `${url}/archiveNotes`,data
        , headerConfig());

    console.log(response);
    return response;
}

export const deleteNote = async ( data) => {
    let response = await axios.post( `${url}/trashNotes`,data
        , headerConfig());

    console.log(response);
    return response;
}

export const colourNote = async ( data) => {
    let response = await axios.post( `${url}/changesColorNotes`,data
        , headerConfig());

    console.log(response);
    return response;
}

export const PermenentDeleteNote = async ( id) => {
    let response = await axios.post( `${url}/deleteForeverNotes`,id
        , headerConfig());

    console.log(response);
    return response;
}



// export const updateNotes = async ( data) => {
//     // console.log(item);
//     let response = await axios.post( `${url}/updateNotes?${data}`, data
//         , headerConfig());
// console.log(response,"--------------------");
 
//     return response;
// }

export const updateNotes = async (item) => { 
    console.log(item); 
    const response = await axios.post( 
   
      `${url}/updateNotes?${item.noteId}`,item, 
      headerConfig() 
    ); 
    return response; 
  };