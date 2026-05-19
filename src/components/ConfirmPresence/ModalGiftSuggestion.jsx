import { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const ModalGiftSuggestion = ({ open, handleClose }) => {
  const [dense] = useState(false);
  const listSugestionGifts = [
    {
      img: "assets/svg/roupa.svg",
      desc: "Visto 2/3 anos",
    },
    {
      img: "assets/svg/shoes.svg",
      desc: "Calço 21/22",
    },
    {
      img: "assets/svg/toys.svg",
      desc: "Amo Brinquedos Educativos",
    },
  ];

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
      <Grid item xs={12}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Sugestão de presente</DialogTitle>
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
            <Grid container style={{ width: "300px" }}>
              <Grid item xs={12}>
                <Typography style={{ fontWeight: "600", fontSize: "18px" }}>
                  Sugestões de presentes para o Abraão Levi.
                </Typography>
                <Typography
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    fontStyle: "italic",
                  }}
                >
                  Segue algumas informações para facilicar e inspirar.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Demo>
                  <List dense={dense}>
                    {listSugestionGifts.map((item, index) => (
                      <ListItem key={index + item}>
                        <ListItemAvatar style={{ marginRight: "20px" }}>
                          <img
                            style={{ width: "60px" }}
                            src={item.img}
                            alt={item.desc}
                          />
                        </ListItemAvatar>
                        <Typography
                          style={{ fontWeight: "700", fontSize: "18px" }}
                        >
                          {item.desc}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Demo>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  );
};
export default ModalGiftSuggestion;
