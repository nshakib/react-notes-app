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
  ])
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  )
}

export default App