import { useEffect } from "react"
import { useState } from "react"
import { ListItem } from "../components/ListItem"
import AddButton from "../components/AddButton"

export default function NotesListpage(){
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        getNotes()
    }, 
    [])

    const getNotes = async()=> {
        const res = await fetch('http://127.0.0.1:8000/api/notes/')
        const data = await res.json()
        setNotes(data)
    }

    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p>{notes.length}</p>
            </div>
            
            <div className="notes-list">
                {notes.map(note=>(
                    <ListItem key={note.id} note={note}/>
                ))}
            </div>
            <AddButton/>
        </div>
    )
}