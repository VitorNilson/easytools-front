import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid #2C74B3;
  border-right: 2px solid #2C74B3;
  border-bottom: 2px solid #2C74B3;
  border-left: 2px solid #205295;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-inline-end: .5em;
  
`;

export default Spinner;