import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export default function Note(props) {
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
    const pin_note = () => {
        props.pinFlag(props.id)
    }
    return (
        <React.Fragment>
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
                        <Tooltip title="Pin Note" placement="right" arrow>
                            <IconButton size="medium" onClick={pin_note} >
                                <BookmarkBorderIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                        </Tooltip> : null
                    }
                    {flag ?
                        <Tooltip title="Delete Note" placement="right" arrow>
                            <IconButton size="medium" onClick={delete_note} >
                                <DeleteIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                        </Tooltip> : null}
                </div>
            </div>
        </React.Fragment>
    )
}
