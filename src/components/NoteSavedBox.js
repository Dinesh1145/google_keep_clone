import React, { useState, useEffect } from 'react'
import Note from './Note'


export const NoteSavedBox = ({ notes, deleteItem, handlePinUnpin, view }) => {
    const [allNotes, setAllNotes] = useState(notes || [])

    const deleteNote = (id) => {
        deleteItem(id);
    }
    const pinFlagFun = (id) => {
        handlePinUnpin(id, true);
    }
    const pinRemoveFun = (id) => {
        handlePinUnpin(id, false);
    }

    useEffect(() => {
        setAllNotes(notes)
    }, [notes])

    const getPinnedTitle = (bool) => {
        for (let it of allNotes) {
            if (it.isPinned === true) {
                return (
                    <div className='mb-2'>
                        <p className="mb-0">{bool ? "Pinned" : "UnPinned"} </p>
                        <hr className="bg-dark m-0" />
                    </div>)
            }
        }
        return null;
    }

    return (
        <React.Fragment>
            <div className="container d-flex flex-column mt-1">
                <div className=" pt-1" style={{ paddingLeft: "25px" }}>
                    {allNotes.length !== 0 &&
                        getPinnedTitle(true)
                    }
                </div>

                <div className={!view ? "vertical_view_box" :
                    "grid_view_box"}>
                    {allNotes.map((val, index) => {
                        if (val.isPinned === false) return
                        return <Note key={index}
                            id={index}
                            note={val}
                            deleteProp={() => deleteNote(index)}
                            pinAdd={pinFlagFun}
                            pinRemove={pinRemoveFun}
                            classAdd="" />
                    })}
                </div>
            </div>
            <div className="container d-flex flex-column mt-1">
                <div className=" pt-1" style={{ paddingLeft: "25px" }}>
                    {getPinnedTitle(false)}
                </div>
                <div className={!view ? "vertical_view_box" :
                    "grid_view_box"}>
                    {
                        allNotes.map((val, index) => {
                            if (val.isPinned === true) return
                            return <Note key={index}
                                id={index}
                                note={val}
                                deleteProp={deleteNote}
                                pinAdd={pinFlagFun}
                                pinRemove={pinRemoveFun}
                                classAdd="" />
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
