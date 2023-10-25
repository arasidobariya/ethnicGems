import { Button } from "@mui/material";

function DarkButton({ children, ...props }) {
  const darkButtonStyle = {
    background: "#333", // Dark background color
    color: "white", // Text color
  };

  return (
    <Button
      variant="contained"
      color="primary" // Set the color to primary
      style={darkButtonStyle}
      {...props}
    >
      {children}
    </Button>
  );
}
export default DarkButton;
