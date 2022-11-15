import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import NavItemDetails from './NavItemDetails';
import { NavLink, Link } from 'react-router-dom';
import ModalEditLabel from './utility/ModalEditLabel'


const SideNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="d-flex flex-column p-1 nav_bar" >
                {NavItemDetails.map((cur, index) => {
                    return (
                        <NavLink key={index} to={cur.path} className="nav_item" activeClassName="active_nav_item" onClick={cur.onclick}>
                            <IconButton className="icon_button" >
                                {cur.icon}
                            </IconButton>
                            <p className="nav_item_p">{cur.tag}</p>
                        </NavLink>
                    );
                }
                )}

                <Link to="" className="nav_item" onClick={() => setIsModalOpen(true)}>
                    <IconButton className="icon_button" >
                        <EditOutlinedIcon style={{ fontSize: "26px" }} />
                    </IconButton>
                    <p className="nav_item_p">Edit-Lables</p>
                </Link>


                <Link to="" className="nav_item">
                    <IconButton className="icon_button" >
                        <LabelOutlinedIcon style={{ fontSize: "26px" }} />
                    </IconButton>
                    <p className="nav_item_p">Dinssh</p>
                </Link>
            </div>

            <ModalEditLabel trigger={isModalOpen} setTrigger={setIsModalOpen} />
        </>
    )
}

export default SideNav;
