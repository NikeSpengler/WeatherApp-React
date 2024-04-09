import styled from "@emotion/styled";
import wind_icon from "../assets/wind.svg"
import rain_icon from "../assets/rain.svg"

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    font-size: 18px;
    color: white;
    padding-top: 40px;
    padding-bottom: 100px;
  }
`;

const StyledText = styled.div`
    font-size: 14px;
    color: white;
  }
`;

const StyledNumber = styled.div`
    font-size: 20px;
    color: white;
  }
`;

const StyledElement = styled.div`
    margin: auto;
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
`;

const StyledIcon = styled.img`
   height: 50px;
  }
`;


const WeatherInfo = () => {

    
    return (
      <StyledContainer className="container">
        <StyledElement className="element">
            <StyledIcon src={rain_icon} alt="" className=""/>
            <div className="data">
                <StyledNumber className="humidity-percent">64%</StyledNumber>
                <StyledText className="text">Humidity</StyledText>
            </div>
        </StyledElement>
        <StyledElement className="element">
            <StyledIcon src={wind_icon} alt="" className=""/>
            <div className="data">
                <StyledNumber className="humidity-percent">18 km/h</StyledNumber>
                <StyledText className="text">Wind</StyledText>
            </div>
        </StyledElement>
      </StyledContainer>
    )
  }
  
  export default WeatherInfo