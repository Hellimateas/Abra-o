import { Container, Content } from './styles'
import { 
  FaHome, 
  FaCalendarAlt,
  FaCheck,
  FaImage
} from 'react-icons/fa'
import CloseIcon from '@mui/icons-material/Close';

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active, onClose }) => {

  const closeSidebar = () => {
    onClose()
  }

  return (
    <Container sidebar={active}>
      <CloseIcon onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" idSection="invitation"/>
        <SidebarItem Icon={FaCalendarAlt} Text="Data" idSection="birthdayDateAndTime"/>
        <SidebarItem Icon={FaCheck} Text="Confirmar presença" idSection="confirmPresence"/>
        <SidebarItem Icon={FaImage} Text="Fotos" idSection="carouselScreen"/>
      </Content>
    </Container>
  )
}

export default Sidebar