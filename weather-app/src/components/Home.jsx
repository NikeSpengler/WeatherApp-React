import styled from "@emotion/styled";
import WeatherImg from "./WeatherImg";
import { Link } from "react-router-dom";

// constants
// const bg_color = "rgb(34, 139, 230)";

// styled component
const StyledLandingContainer = styled.div`
  background-color: black;
  height: 100%;

`;

const StyledLandingText = styled.a`
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: white;
  &:hover {
    color: lightgrey;
    }

`;

// const StyledButton = styled.button`
//   padding: 20px;
//   background-color: darkblue;
//   font-size: 24px;
//   border-radius: 70px;
//   border: none;
//   color: white;
//   font-weight: 400px;
//   &:hover {
//     color: lightgrey;
//   }
// `


// const StyledHeading = styled.p`
//   font-size: 40px;
//   }
// `;


const Home = () => {

  return (
    <StyledLandingContainer>
      <WeatherImg/>
       <StyledLandingText className="container">
        <Link to="/weather">Start!</Link>
      </StyledLandingText>
    </StyledLandingContainer>
   
  )
}

export default Home
