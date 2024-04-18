import thunder_icon from "../assets/thunder.svg"
import styled from "@emotion/styled";

// constants
// const text_color = "#fff";
// const bg_color = "rgb(34, 139, 230)";
// const bg_hover_color = "rgb(34, 139, 230, 0.8)";

// styled component
const StyledContainer= styled.div`
  display: flex;
  justify-content: center;

  &:active {
    font-size: 0px;
  }
`;

const StyledIcon= styled.img`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 40px;
  width: 200px;
  @keyframes temp-icon-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }

`;
const WeatherImg = () => {
    return (
      <StyledContainer>
            <div className="temp-icon">
                <StyledIcon src={thunder_icon} alt=""/>
            </div>
      </StyledContainer>
    )
  }
  
  export default WeatherImg