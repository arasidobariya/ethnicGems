import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: normal;
  text-decoration: none;
  &.active {
    color: rgb(246, 191, 250);
  }
`;

export default StyledNavLink;
