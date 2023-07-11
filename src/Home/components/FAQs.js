import { Grid, IconButton, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";
import faqs from "../../assets/faqs.json";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import Close from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  maxHeight: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: 6,
  borderRadius: 8,
  overflow: "auto",
};

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function FAQs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box pt={4}>
      <ButtonContainer container>
      <Grid item flexGrow={1} marginRight={1} marginTop={3} alignItems="center">
      <Button
        variant="contained"
        fullWidth
        onClick={handleOpen}
        startIcon={<QuestionAnswer />}
      >
        FAQs
      </Button>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="scrollbox">
          <Grid container spacing={2} direction="column" position="relative">
            {faqs.map((faq, index) => (
              <Grid item key={faq.q}>
                <Typography variant="h5" gutterBottom>
                  {index + 1}: {faq.q}
                </Typography>
                <Typography variant="body1">{faq.a}</Typography>
              </Grid>
            ))}
            <IconButton
              color="primary"
              style={{ position: "absolute", right: -25, top: -24 }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Grid>
        </Box>
      </Modal>
      </ButtonContainer>
    </Box>
  );
}
