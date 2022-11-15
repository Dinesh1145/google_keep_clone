import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export default function PinnedNote(props) {
    const [flag, setFlag] = useState(false)
    const mouseOver = (event) => {
        setFlag(true);
    }
    const mouseLeave = (event) => {
        setFlag(false);
    }
    const delete_note = () => {
        props.deleteProp(props.id);
    }
    // console.log(props.classAdd)
    const pin_remove_note = () => {
        // setpinflag(!pinflag);
        props.pinRemove(props.id)
        // console.log(pinflag)
    }
    return (
        <>
            <div
                className={`Note_div ${props.classAdd}`}
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
            >
                <div className="d-flex justify-content-between flex-column w-75">
                    <h4 className="mb-3">{props.title}</h4>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{props.text}</p>
                </div>
                <div className="d-flex flex-column">
                    {flag ?
                        <Tooltip title="Pinned Note" placement="right" arrow>
                            <IconButton size="medium" onClick={pin_remove_note}>
                                <BookmarkIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                        </Tooltip>
                        : null
                    }
                    {flag ?
                        <Tooltip title="Delete Note" placement="right" arrow>
                            <IconButton size="medium" onClick={delete_note} >
                                <DeleteIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                        </Tooltip> : null}
                </div>
            </div>
        </>
    )
}
