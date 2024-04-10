import styled from "@emotion/styled";

// constants
// const bg_color = "rgb(34, 139, 230)";

// styled component
const StyledLandingContainer = styled.div`
  background-color:black;
  height: 100%;

`;

const StyledLandingText = styled.div`
  display: flex;
  justify-content: center;
  color: white;

`;

const StyledButton = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`


// const StyledHeading = styled.p`
//   font-size: 40px;
//   }
// `;


const LandingPage = () => {

  return (
    <StyledLandingContainer>
       <StyledLandingText className="container">
        <StyledButton>Weather App</StyledButton>
      </StyledLandingText>
    </StyledLandingContainer>
   
  )
}

export default LandingPage

