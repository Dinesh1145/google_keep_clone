import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import NavItemDetails from './NavItemDetails';
import { NavLink } from 'react-router-dom';
import ModalEditLabel from './utility/ModalEditLabel'


const SideNav = ({ isSideBarOpen }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <React.Fragment>
            <div className={`d-flex flex-column p-1 nav_bar ${isSideBarOpen && "sidebar_open"}`} >
                {NavItemDetails.map((cur, index) => {
                    return (
                        <NavLink key={index}
                            to={cur.path}
                            className="nav_item"
                            activeClassName="active_nav_item"
                            exact={true}
                            onClick={cur.onclick}>
                            <IconButton className="icon_button" >
                                {cur.icon}
                            </IconButton>
                            <p className="nav_item_p">{cur.tag}</p>
                        </NavLink>
                    );
                }
                )}
            </div>

            <ModalEditLabel trigger={isModalOpen} setTrigger={setIsModalOpen} />
        </React.Fragment>
    )
}

export default SideNav;
