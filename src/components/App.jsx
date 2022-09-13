import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes"
import CreateArea from "./CreateArea";



export default function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes((prevNotes) =>{
            return [...prevNotes, newNote]
        })        
    }

    function deleteNote(id){
       setNotes((prevNotes) =>{
         return prevNotes.filter((note, index) =>{
            return index !== id;
         })
       })
    }

    

    return(
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {/* <Note key={1} title="Note title" content="Note content" /> */}
            {
                notes.map((noteItem,index) => <Note 
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                )             
            }
            <Footer />
        </div>
    );
}