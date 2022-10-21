import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import "../Style/Header.css";
import "../utils/colors";
import styled from "styled-components";
import colors from "../utils/colors";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
`;

function Header() {
  return (
    <div className="kasa-header">
      <div className="kasa-header-box-img">
        <img src={logo} alt="logo"></img>
      </div>
      <nav className="kasa-header-nav">
        <ul className="kasa-header-nav-list">
          <li>
            <StyledLink to="/">Acceuil</StyledLink>
          </li>
          <li>
            <StyledLink to="/APropos">A Propos</StyledLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
