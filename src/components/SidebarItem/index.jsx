import { Container, StyledLink } from './styles'

const SidebarItem = ({ Icon, Text, idSection }) => {
  return (
    <StyledLink to={idSection} smooth={true} duration={500} offset={-80}>
      <Container>
        <Icon />
        {Text}
      </Container>
    </StyledLink>
  )
}

export default SidebarItem