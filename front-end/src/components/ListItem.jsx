import { Link } from "react-router-dom"
export function ListItem({note}){
    const getTime = (note)=>{
        return new Date(note.updated).toLocaleDateString()
    }

    const getTitle = (note)=> {
        const title = note.body.split('\n')[0]
        if(title.length > 45){
            return title.slice(0,45)
        }
        return title
    }

    const getContent = (note)=>{
        let title = getTitle(note)
        let content = note.body.replaceAll('\n', ' ')
        content = content.replaceAll(title, '')
        
        if(content.length > 45){
            return content.slice(0,45) + '...'
        }
        else{
            return content
        }
        return content
    }

    return(
        <>
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h4>{getTitle(note)}</h4>
                <p><span>{getTime(note)}</span>{getContent(note)}</p>
            </div>
        </Link>
        </>
    )
}