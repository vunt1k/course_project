import AnnouncementIcon from '@material-ui/icons/Announcement';
import SportsIcon from '@material-ui/icons/Sports';

const links = [
  {
    to: "/news",
    name: 'Новини',
    icon: <AnnouncementIcon/>,
  },
  {
    to: "/competitions",
    name: 'Змагання',
    icon: <SportsIcon/>,
  },
]

export default links;