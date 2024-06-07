import {useState}from 'react';
import NoteList from "./components/NoteList";
import {nanoid} from "nanoid";
import './App.css'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date:"15/4/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date:"12/4/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date:"10/4/2024",
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date:"17/4/2024",
    }
  ]);

  const addNote = (text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text:text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  // delete function
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }
  return (
    <div className="container">
      <NoteList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App