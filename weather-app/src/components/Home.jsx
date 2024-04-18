
import styled from "@emotion/styled";
import WeatherImg from "./WeatherImg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";


// styled component
const StyledLandingContainer = styled.div`
  height: 100%;
  padding-topp: 40px;
  padding-bottom: 120px
`;

const StyledLandingText = styled.a`
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: white;
  &:hover {
    color: lightgrey;
    }
`;



export const ThemeContext = createContext(null);

const Home = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <StyledLandingContainer className="Home" id={theme}>
        <div className='switch'>
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
        </div>
        <WeatherImg/>
        <StyledLandingText className="container">
          <Link className="link" to="/weather">Start!</Link>
        </StyledLandingText>
        <Footer/>
      </StyledLandingContainer>
    </ThemeContext.Provider>
  
   
  )
}

export default Home
