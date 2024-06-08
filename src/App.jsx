import {useState}from 'react';
import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
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

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState('');

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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App