import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  height: 280px;
  width: 200px;
  background-color: red;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-in;
  top: 0px;
  /* position: relative; */
  &:hover{
      transform: translateY(-50px);
      transition: 0.4s ease-in;
  }
  &:hover ~ CardContainer{ */
    top: 50px;
    transition: 0.8s ease-in;
  }
  &:not(first-child){
    margin-left: -50px;
  }
`;



