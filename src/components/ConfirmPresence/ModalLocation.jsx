import { Grid, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const ModalLocation = ({ open, handleClose }) => {
  // const handleLocation = () => {
  //   const latitude = -4.1218522; // Substitua com a latitude da sua localização
  //   const longitude = -38.2553958; // Substitua com a longitude da sua localização
  //   const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  //   window.open(url, "_blank");
  // };
  return (
    <>
      <Grid item xs={12}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Localização do Evento</DialogTitle>
          <IconButton
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CancelIcon />
          </IconButton>
          <DialogContent
            style={{ display: "flex", flexDirection: "column" }}
            dividers
          >
            <Grid container style={{ minWidth: "300px" }}>
              <Grid item xs={12}>
                <div>
                  <span>
                    <strong>Endereço:</strong>
                  </span>
                  <br />
                  <span>
                    Boqueirão dos Pereiras
                    <br />
                    Frank
                    {/*} <br />
                    Sítio Higino */}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "5px",
                  }}
                >
                  <span>
                    <strong>Local do Evendo:</strong>
                  </span>
                  <img
                    width={"250px"}
                    height={"250px"}
                    src="assets/svg/local.svg"
                    alt="Mapa do local do evento"
                  />
                </div>
                {/* <div style={{ display: "flex", alignItems: "center" }}>
                  <span>
                    <strong>Acesse a localização clicando aqui:</strong>
                  </span>
                  <IconButton
                    color="primary"
                    aria-label="add an alarm"
                    onClick={handleLocation}
                  >
                    <LocationOnIcon />
                  </IconButton>
                </div> */}
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  );
};
export default ModalLocation;
