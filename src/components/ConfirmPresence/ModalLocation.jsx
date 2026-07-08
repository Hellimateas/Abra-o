import { Grid, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const ModalLocation = ({ open, handleClose }) => {
  // const handleLocation = () => {
  //   const latitude = -4.1218522; // Substitua com a latitude da sua localização -4.121876, -38.255503
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
                    <a href="https://maps.app.goo.gl/9uuQdDg2ALPKQMZZ6">VR Eventos</a>
                    <br />Rua Guariguazil, 213
                    Sitio Boa Fé
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
                    <strong>Local do Evento:</strong>
                  </span>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.7491389670147!2d-38.255218272117425!3d-4.121881172149372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b897b1b9af65a7%3A0x187cb640f454c1db!2sVR%20EVENTOS%20CASCAVEL%20CE!5e0!3m2!1spt-BR!2sbr!4v1779200778912!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa do local do evento"
                  ></iframe>
                  
                </div>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  );
};
export default ModalLocation;
