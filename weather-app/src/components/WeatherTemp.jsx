import styled from "@emotion/styled";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 50px;
    color: white;
    padding-bottom: 40px;
  }
`;


const WeatherTemp = () => {
    return (
      <StyledContainer className="container">
        <div className="weather-temp">24°</div>
        <div className="weather-location">London</div>
      </StyledContainer>
    )
  }
  
  export default WeatherTemp