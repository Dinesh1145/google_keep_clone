import React, { useState } from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../keep_logo.png'
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import GridOnIcon from '@material-ui/icons/GridOn';
import Tooltip from '@material-ui/core/Tooltip';

export default function Header(props) {
    const [view, setView] = useState(true);
    const listViewEvent = () => {
        setView(false);
        props.viewFalseValue();
    }
    const gridViewEvent = () => {
        setView(true);
        props.viewTrueValue();
    }
    const menuClick = () => {
        props.handleSideBar();
    }


    return (
        <>
            <div className="container-fluid bg-light position-sticky top-0" style={{ zIndex: "1111" }}>
                <div className="row d-flex justify-content-between p-2 text-secondary"
                    style={{ /*boxShadow: "0 5px 10px rgba(0,0,0,.1)"*/ border: ".5px solid rgba(0,0,0,.1)" }}>
                    <div className="col-2  g-0">
                        <div className="d-flex justify-content-left align-items-center">
                            <IconButton onClick={menuClick}>
                                <MenuIcon style={{ fontSize: "30px" }} />
                            </IconButton>
                            <img src={logo} alt="logo" className="logo" />
                            <h1 style={{ fontSize: "30px", marginLeft: "5px" }}>Keep</h1>
                        </div>
                    </div>
                    <div className="col-7 g-0 d-flex justify-content-center align-items-center " style={{ height: "100%!important" }}>
                        <div className="search_div">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <input type="search" placeholder="Available Soon..." className="searchBox" />
                        </div>
                    </div>
                    <div className="col-3 g-0">
                        <div className="header_view_btns">
                            {view ?
                                <Tooltip title="List View" arrow>
                                    <IconButton onClick={listViewEvent}>
                                        <ViewAgendaOutlinedIcon style={{ fontSize: "25px", }} />
                                    </IconButton>
                                </Tooltip>
                                : <Tooltip title="Grid View" arrow>
                                    <IconButton onClick={gridViewEvent}>
                                        <GridOnIcon style={{ fontSize: "25px", }} />
                                    </IconButton>
                                </Tooltip>}
                            <Tooltip title="Setting" arrow>
                                <IconButton>
                                    <SettingsIcon style={{ fontSize: "25px", }} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
