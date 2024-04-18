import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const StyledHeader = styled.div`
    display: flex;
    justify-content: start;
    padding-top: 15px;
    padding-bottom: 30px;
    background-color: darkblue;
    color: white;
`;

const StyledLink = styled.a`
    display: flex;
    justify-content: start;
    font-size: 20px;
    color: white;
    text-decoration: none;
`;

const Header = () => {
    return (
      <StyledHeader className="container">
        <StyledLink>
          <Link to="/home" className="header-nav" color="white">Go back</Link>
        </StyledLink>
      </StyledHeader>
    )
  }
  
  export default Header