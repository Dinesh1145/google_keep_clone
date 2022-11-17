import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

const TextWritingBox = ({ addNewNote }) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        text: "",
        isPinned: false
    })
    const [num, setnum] = useState(0)
    const inputEvent = (e) => {
        const { name, value } = e.target
        setNote({ ...note, [name]: value })
    }
    const addEvent = () => {
        if (note.title !== "" || note.text !== "") {
            addNewNote(note);
            setNote({ title: "", text: "", isBook: false })
        } else
            alert("please fill");
        setnum(0);
    }
    const expandBox = () => setExpand(true);
    const closeBox = () => setExpand(false);
    const numIncrease = (e) => e.key === 'Enter' && setnum(num + 1);

    return (
        <div className="container d-flex justify-content-center align-items-center p-1 mt-2 " style={{ width: "95%" }}>
            <div className="text_Box">
                {expand ?
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={note.title}
                        onChange={inputEvent}
                    /> : null}

                <textarea
                    type="text"
                    placeholder="Take a note..."
                    rows={1 + num}
                    name="text"
                    value={note.text}
                    onChange={inputEvent}
                    onClick={expandBox}
                    onKeyPress={numIncrease}
                />
                {expand &&
                    <div className="close_btn_div">
                        <Button onClick={addEvent}>add</Button>
                        <Button onClick={closeBox}>Close</Button>
                    </div>}
            </div>
        </div>
    )

}
export { TextWritingBox };
