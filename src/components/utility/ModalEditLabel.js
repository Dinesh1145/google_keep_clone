import React, { useRef } from 'react'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import './modal.css'

const ModalEditLabel = ({ trigger, setTrigger }) => {

    const Modalref = useRef();


    const closeOverlay = (e) => {
        if (Modalref.current === e.target) {
            setTrigger(false);
        }
    }
    return (
        <>
            {trigger ?
                <div className="modal_outer_div" ref={Modalref} onClick={closeOverlay}>
                    <div className="modal_inner_div">
                        <div className="modal_head">
                            <p>Edit Label</p>
                            <IconButton onClick={() => setTrigger(false)}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <input type="text" placeholder="label name" className="modal_input" />
                        <Button varient="contained" className="modal_closeBtn" onClick={() => setTrigger(false)} >Done</Button>
                    </div>
                </div> : null}
        </>
    )
}

export default ModalEditLabel;
