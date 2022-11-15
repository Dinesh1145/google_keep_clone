import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';


const NavItemDetails = [{
    id: 1,
    icon: <EmojiObjectsOutlinedIcon style={{ fontSize: "26px" }} />,
    tag: "Notes",
    path: "/home"
},
{
    id: 2,
    icon: <NotificationsNoneOutlinedIcon style={{ fontSize: "26px" }} />,
    tag: "Reminder",
    path: "/reminder"
},
// {
//     id:3,
//     icon: <EditOutlinedIcon  style={{ fontSize: "26px" }} />,
//     tag: "Edit-Lables",
//     path: ""
// },
// {
//     id:4,
//     icon: <LabelOutlinedIcon  style={{ fontSize: "26px" }} />,
//     tag: "Dinssh",
//     path: "/label/Dinssh",
// },
{
    id: 5,
    icon: <ArchiveOutlinedIcon style={{ fontSize: "26px" }} />,
    tag: "Archive",
    path: "/archive"
},
{
    id: 6,
    icon: <ArchiveOutlinedIcon style={{ fontSize: "26px" }} />,
    tag: "Bin",
    path: "/trash"
}]

export default NavItemDetails;