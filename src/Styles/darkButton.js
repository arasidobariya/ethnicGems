import styled from "styled-components";
import { Button } from "@mui/material";

const DarkStyledButton = styled(Button)`
  background-color: #333; /* Dark background color */
  color: white; /* Text color */
  &:hover {
    background-color: #555; /* Darker color on hover */
  }
`;

function DarkButton({ children, ...props }) {
  return <DarkStyledButton {...props}>{children}</DarkStyledButton>;
}

export default DarkButton;
