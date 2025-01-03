import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        size="small"
        variant="extended"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}
