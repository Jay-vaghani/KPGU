import { Box } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function EventsSection() {
  const { maxWidth } = useContext(AppContext);

  const navigation = useNavigate();
  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      p={"3%"}
      bgcolor={"#fff"}
      mt={7}
      borderRadius={4}
      className="smooth-shadow"
    >
      <h2 className="fs-1 text-uppercase fw-semibold mb-4 text-uppercase">
        Latest news and events
      </h2>
    </Box>
  );
}

export default EventsSection;
