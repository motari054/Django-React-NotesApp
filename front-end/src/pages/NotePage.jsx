import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ArrowLeft from '../assets/arrow-left.svg?react'

export default function NotePage(){
    const {id} = useParams()
    const navigate = useNavigate()

    const [note, setNote] = useState({ body : '' })

    useEffect(()=>{
        getNote()
    }, [id])

    const getNote = async ()=>{
        if(id === 'new') return
        const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`)
        const data = await response.json()
        setNote(data)
    }

    function handleUpdate(e){
        setNote(note=>({
            ...note,
            'body': e.target.value
        }))
    }

    const createNote = async ()=>{
        fetch(`http://127.0.0.1:8000/api/notes/create`, {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(note)
        })
    }

    const updateNote = async ()=>{
        fetch(`http://127.0.0.1:8000/api/notes/${id}/update/`, {
            method : 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(note)
        })
    }

    const deleteNote = async ()=>{
        fetch(`http://127.0.0.1:8000/api/notes/${id}/delete/`,{
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        navigate('/')
    }

    function handleSubmit(){
        if(id !== 'new' && note.body== ''){
            deleteNote()
        }
        else if(id !== 'new'){
            updateNote()
        }
        else if(id == 'new' && note.body !== null){
            createNote()
        }
        navigate('/')
    }


    return(
        <>
        <div className="note">
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={handleSubmit}/>
                </h3>
                {id !== 'new' ? 
                    <button onClick={deleteNote}>Delete</button> : 
                    <button onClick={handleSubmit}>Done</button>
                }
                
                
            </div>
            <textarea value={note? note.body: ''} onChange={handleUpdate}></textarea>
        </div>
        </>
    )
}