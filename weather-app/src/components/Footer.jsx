import styled from "@emotion/styled";


const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: white;
    padding-top: 40px;
    padding-bottom: 10px;
`;



const WeatherInfo = () => {

    
    return (
      <StyledFooter className="container">
        <div>
          <p>Made by Nike Spengler with React, Vite and styled by Emotion.</p>
        </div>
  
      </StyledFooter>
    )
  }
  
  export default WeatherInfo