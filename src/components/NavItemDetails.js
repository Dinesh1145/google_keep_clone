import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteIcon from '@material-ui/icons/Delete';



const NavItemDetails = [{
    id: 1,
    icon: <EmojiObjectsOutlinedIcon style={{ fontSize: "26px" }} />,
    tag: "Notes",
    path: "/"
},
{
    id: 2,
    icon: <NotificationsNoneOutlinedIcon style={{ fontSize: "26px" }} />,
    tag: "Reminder",
    path: "/reminder"
},
{
    id: 3,
    icon: <ArchiveOutlinedIcon style={{ fontSize: "26px" }} />,
    tag: "Archive",
    path: "/archive"
},
{
    id: 4,
    icon: <DeleteIcon style={{ fontSize: "26px" }} />,
    tag: "Bin",
    path: "/trash"
}]

export default NavItemDetails;