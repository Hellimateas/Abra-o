import { useState } from "react";
import useEventDateStore from "../../store/eventDateStore";
import Alert from "@mui/material/Alert";
import { Grid, FormHelperText, Button, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CancelIcon from "@mui/icons-material/Cancel";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Preecha seu nome ou apelido"),
  confirmPresence: Yup.string().required("Confirme sua presença"),
  amountAdults: Yup.number()
    .transform((_, originalValue) => {
      if (typeof originalValue === "string" && originalValue.trim() === "")
        return 0;
      return Number(originalValue);
    })
    .min(0, "Quantidade inválida")
    .test(
      "at-least-one-adults",
      "Pelo menos um dos campos deve ser preenchido",
      function (value) {
        const { amountChilds } = this.parent;
        return value > 0 || Number(amountChilds) > 0;
      }
    ),
  amountChilds: Yup.number()
    .transform((_, originalValue) => {
      if (typeof originalValue === "string" && originalValue.trim() === "")
        return 0;
      return Number(originalValue);
    })
    .min(0, "Quantidade inválida")
    .test(
      "at-least-one-childs",
      "Pelo menos um dos campos deve ser preenchido",
      function (value) {
        const { amountAdults } = this.parent;
        return value > 0 || Number(amountAdults) > 0;
      }
    ),
});

const ModalConfirmPresence = ({ open, handleClose, handleSnackbar }) => {
  const confirmPresenceCollectionRef = collection(db, "confirmPresence");

  const { isPastEvent } = useEventDateStore();
  const [disable, setDisable] = useState(isPastEvent);

  const send = async (values) => {
    try {
      let confirmationOfPresence = "";
      if (values.confirmPresence === "yes") {
        confirmationOfPresence = true;
      } else {
        confirmationOfPresence = false;
      }
      const payload = {
        name: values.name,
        confirmationOfPresence,
        amountAdults: values.amountAdults || 0,
        amountChilds: values.amountChilds || 0,
      };
      await addDoc(confirmPresenceCollectionRef, payload);
      handleSnackbar("success", "Resposta enviada com sucesso!");
      setDisable(true);
      handleClose();
    } catch (error) {
      console.error("Error submitting data:", error);
      handleSnackbar("error", "Não foi possível enviar a resposta.");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      confirmPresence: "",
      amountAdults: 0,
      amountChilds: 0,
    },
    validationSchema,
    onSubmit: (values) => {
      send(values);
    },
  });

  return (
    <>
      <Grid item xs={12}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Confirme sua presença</DialogTitle>
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
            {isPastEvent && (
              <Alert severity="info" sx={{ mb: 2 }}>
                O evento já ocorreu, não sendo mais possível confirmar presença.{" "}
              </Alert>
            )}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Digite o seu nome"
              type="text"
              variant="outlined"
              color="primary"
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              disabled={disable}
            />
            <FormControl
              style={{
                marginTop: "20px",
                border:
                  formik.touched.confirmPresence &&
                  formik.errors.confirmPresence &&
                  "1px solid red",
                borderRadius: "4px",
                padding: "10px",
              }}
            >
              <FormLabel
                id="demo-controlled-radio-buttons-group"
                style={{
                  color:
                    formik.touched.confirmPresence &&
                    formik.errors.confirmPresence
                      ? "red"
                      : "#989898",
                }}
              >
                Poderá comparecer?
              </FormLabel>
              <RadioGroup
                disabled={disable}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="confirmPresence"
                value={formik.values.confirmPresence}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  disabled={disable}
                  value="yes"
                  control={<Radio color="primary" />}
                  label="Sim estarei presente!"
                />
                <FormControlLabel
                  disabled={disable}
                  value="no"
                  control={<Radio color="primary" />}
                  label="Infelizmente não poderei comparecer."
                />
              </RadioGroup>
            </FormControl>
            {formik.touched.confirmPresence &&
              Boolean(formik.errors.confirmPresence) && (
                <FormHelperText style={{ marginLeft: "12px" }} error>
                  {formik.errors.confirmPresence}
                </FormHelperText>
              )}
            <TextField
              disabled={disable}
              margin="dense"
              label="Qtd de Adutos"
              id="amountAdults"
              type="number"
              variant="outlined"
              color="primary"
              onChange={formik.handleChange}
              value={formik.values.amountAdults}
              onBlur={formik.handleBlur}
              error={
                (formik.touched.amountChilds &&
                  Boolean(formik.errors.amountChilds)) ||
                (formik.touched.amountAdults &&
                  Boolean(formik.errors.amountAdults))
              }
              helperText={
                formik.touched.amountAdults && formik.errors.amountAdults
              }
              inputProps={{ min: 0 }}
            />
            <TextField
              disabled={disable}
              margin="dense"
              label="Qtd de crianças"
              id="amountChilds"
              type="number"
              variant="outlined"
              color="primary"
              onChange={formik.handleChange}
              value={formik.values.amountChilds}
              onBlur={formik.handleBlur}
              error={
                (formik.touched.amountChilds &&
                  Boolean(formik.errors.amountChilds)) ||
                (formik.touched.amountAdults &&
                  Boolean(formik.errors.amountAdults))
              }
              helperText={
                formik.touched.amountChilds && formik.errors.amountChilds
              }
              inputProps={{ min: 0 }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              disabled={disable}
              color="primary"
              onClick={formik.handleSubmit}
            >
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};
export default ModalConfirmPresence;
