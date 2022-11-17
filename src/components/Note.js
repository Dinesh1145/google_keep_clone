import React, { useEffect, useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AddIcon from '@material-ui/icons/Add';

export default function Note(props) {
    const [flag, setFlag] = useState(false)
    const [isMoblile, setIsMoblile] = useState(window.innerWidth <= 768);

    const mouseOver = (event) => {
        setFlag(true);
    }
    const mouseLeave = (event) => {
        setFlag(false);
    }
    const delete_note = () => {
        props.deleteProp(props.id);
    }
    const pinAdd = () => {
        props.pinAdd(props.id)
    }
    const pinRemove = () => {
        props.pinRemove(props.id)
    }

    useEffect(() => {
        const updateDimensions = () => {
            setIsMoblile(window.innerWidth <= 768);
        }
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <React.Fragment>
            <div className={`Note_div ${props.classAdd}`}
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
            >
                <div className="d-flex justify-content-between flex-column w-75">
                    <h4 className="mb-3">{props.note.title}</h4>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{props.note.text}</p>
                </div>
                <div className="d-flex flex-column">
                    {(isMoblile || flag) &&
                        props.isTrash ?
                        <IconButton size="medium" onClick={props.addFromTrash && props.addFromTrash} >
                            <AddIcon style={{ fontSize: "20px" }} />
                        </IconButton>
                        :
                        <Tooltip title="Pin Note" placement="right" arrow>
                            <IconButton size="medium" onClick={props.note?.isPinned === true ? pinRemove : pinAdd} >
                                {!props.isTrash && (props.note?.isPinned === true ?
                                    <BookmarkIcon style={{ fontSize: "20px" }} />
                                    : <BookmarkBorderIcon style={{ fontSize: "20px" }} />)
                                }
                            </IconButton>
                        </Tooltip>
                    }
                    {(isMoblile || flag) &&
                        <Tooltip title="Delete Note" placement="right" arrow>
                            <IconButton size="medium" onClick={delete_note} >
                                <DeleteIcon style={{ fontSize: "20px" }} />
                            </IconButton>
                        </Tooltip>}
                </div>
            </div>
        </React.Fragment>
    )
}
