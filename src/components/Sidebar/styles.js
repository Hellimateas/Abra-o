import styled from "styled-components";

export const Container = styled.div`
  background-color: #91d8f696;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-right: 32px;
    right: ${(props) => (props.sidebar ? "0" : "-100%")};
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
