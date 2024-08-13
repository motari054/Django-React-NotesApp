    import React from 'react'
    import { Link } from 'react-router-dom'
    import AddIcon from '../assets/add.svg?react'

    export default function AddButton(){
        return (
            <>
            <Link to='note/new' className='floating-button'>
                <AddIcon/>
            </Link>
            </>
        )
    }



    // const AddButton = () => {
    //     return (
    //         <Link to="/note/new" className="floating-button">
    //             <AddIcon />
    //         </Link>
    //     )
    // }

    // export default AddButton