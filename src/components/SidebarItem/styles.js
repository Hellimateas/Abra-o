import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #FEEAEB; 
  font-size: 20px;
  color: #982BB6;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    border: 2px solid #982BB6;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove a decoração de texto padrão do link */
  color: inherit; /* Mantém a cor do texto herdada do pai */

  &:focus,
  &:active {
    outline: none; /* Remove a borda padrão do foco */
    border: 2px solid #982BB6;
  }

`;