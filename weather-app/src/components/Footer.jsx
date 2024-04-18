import styled from "@emotion/styled";


const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: white;
    padding-top: 220px;
    padding-bottom: 20px;
`;


const Footer = () => { 
    return (
      <StyledFooter className="container">
          <p>Made by Nike Spengler with React, Vite and styled by Emotion.</p>
      </StyledFooter>
    )
  }
  
  export default Footer