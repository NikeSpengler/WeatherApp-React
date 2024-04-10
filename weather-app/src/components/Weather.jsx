import search_icon from "../assets/search.svg"
import styled from "@emotion/styled";
import wind_icon from "../assets/wind.svg"
import rain_icon from "../assets/rain.svg"
import sun_icon from "../assets/sun.svg"

// constants
// const text_color = "#fff";
// const bg_color = "rgb(34, 139, 230)";
// const bg_hover_color = "rgb(34, 139, 230, 0.8)";

// styled component
const StyledInput= styled.input`
  display: flex;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding-left: 30px;
  width: 362px;
  height: 40px;
  
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding-top: 100px;
  padding-bottom: 60px;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 40px;
    color: white;
  }
`;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
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

const StyledInfo = styled.img`
   height: 50px;
  }
`;

const StyledIcon= styled.img`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 200px;

`;





const Weather = () => {

  let api_key = "5b571ce40d21566c99b64e5ea96f1c7a";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value ==="")
    {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+ " %";
    wind[0].innerHTML = data.wind.speed+" km/h";
    temprature[0].innerHTML = data.main.temp+" °C";
    location[0].innerHTML = data.name;
  }


    return (
      
  
      <div>
        <StyledHeader className="container">
          <div className="weather-temp">24°</div>
          <div className="weather-location">London</div>
        </StyledHeader>

        <StyledContainer>
            <div className="temp-icon">
                <StyledIcon src={sun_icon} alt=""/>
            </div>
        </StyledContainer>
        <StyledContainer>
          <StyledElement className="element">
              <StyledInfo src={rain_icon} alt="" className=""/>
              <div className="data">
                  <StyledNumber className="humidity-percent">64%</StyledNumber>
                  <StyledText className="text">Humidity</StyledText>
              </div>
          </StyledElement>
          <StyledElement className="element">
              <StyledInfo src={wind_icon} alt="" className=""/>
              <div className="data">
                  <StyledNumber className="wind-rate">18 km/h</StyledNumber>
                  <StyledText className="text">Wind</StyledText>
              </div>
          </StyledElement>
        </StyledContainer>
       
       
        <StyledInputContainer>
          <StyledInput type="text" className="cityInput" placeholder="Search"></StyledInput>
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" height={40} width={40}/>
                </div>
        </StyledInputContainer>
        
      </div>
    )
  }
  
  export default Weather