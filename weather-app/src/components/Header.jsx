import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const StyledHeader = styled.div`
    display: flex;
    justify-content: start;
    padding-top: 2px;
    padding-bottom: 30px;
`;

const StyledLink = styled.a`
    display: flex;
    justify-content: start;
    font-size: 20px;
    color: white;
    background-color: white;
`;

const Header = () => {
    return (
      <StyledHeader className="container">
        <StyledLink>
          <Link to="/home" className="header-nav">Go back</Link>
        </StyledLink>
      </StyledHeader>
    )
  }
  
  export default Header