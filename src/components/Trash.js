import React, { useState, useEffect } from 'react'
import Note from './Note';

const Trash = ({ trashNotes, addFromTrash, permanentDelete }) => {
    const [trashes, setTrashes] = useState(trashNotes || [])

    useEffect(() => {
        setTrashes(trashNotes || []);
    }, [trashNotes])

    return (
        <div className="container d-flex justify-content-center align-items-center">
            {trashes.length != 0 ?
                <div className={
                    "grid_view_box"}>
                    {trashes.map((val, index) => {
                        return <Note key={index}
                            id={index}
                            note={val}
                            isTrash
                            addFromTrash={() => addFromTrash(index, val)}
                            deleteProp={() => permanentDelete(index)} />
                    })}
                </div>
                :
                <div className="p-3 d-flex justify-content-center align-items-center"
                    style={{ width: "280px", height: "80px", border: ".5px solid rgba(0,0,0,0.3)" }} >
                    <h5>No Trash Yet</h5>
                </div>
            }
        </div>
    )
}

export default Trash
