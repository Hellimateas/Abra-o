import { useState } from "react";
import ModalConfirmPresence from "./ModalConfirmPresence";
import ModalGiftSuggestion from "./ModalGiftSuggestion";
import CustomSnackbar from "../../utils/CustomSnackbar";
import ModalLocation from "./ModalLocation";
import theme from "../../theme";
import "./ConfirmPresence.css";

const ConfirmPresence = () => {
  const { confirmPresence } = theme;
  const [open, setOpen] = useState(false);
  const [showModalGiftSuggestion, setShowModalGiftSuggestion] = useState(false);
  const [showModalLocation, setShowModalLocation] = useState(false);
  const [propsSnackbar, setPropsSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleSnackbar = (severity, message) => {
    setPropsSnackbar({
      open: true,
      severity,
      message,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleShowModal = () => {
    setOpen(true);
  };
  const handleCloseModalLocation = () => {
    setShowModalLocation(false);
  };
  // const handleLocation = () => {
  //   const { latitude, longitude } = location;
  //   const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
  //   window.open(url, "_blank");
  //   // return (
  //   //   <ModalLocation/>
  //   // )
  // };
  const handleShowModalGiftSuggestion = () => {
    setShowModalGiftSuggestion(true);
  };
  const handleCloseModalGiftSuggestion = () => {
    setShowModalGiftSuggestion(false);
  };
  return (
    <>
      <section id="confirm-presence" className="section-confirm-presence">
        <div className="section-body container">
          <div className="title">
            <h2>{`${confirmPresence.titlePrefix}`}</h2>
          </div>
          <div className="display-buttons">
            <div className="button-and-legend">
              <span className="text">{confirmPresence.primaryButtonLabel}</span>
              <button className="button" onClick={handleShowModal}>
                <img src="assets/svg/buttons/b1.svg" alt="Confirmar Presença" />
              </button>
            </div>
            <div className="button-and-legend">
              <span className="text">
                {confirmPresence.locationButtonLabel}
              </span>
              <button
                className="button"
                onClick={() => setShowModalLocation(true)}
              >
                <img src="assets/svg/buttons/b2.svg" alt="Localização" />
              </button>
            </div>
            <div className="button-and-legend">
              <span className="text">
                {confirmPresence.giftSuggestionButtonLabel}
              </span>
              <button
                className="button"
                onClick={handleShowModalGiftSuggestion}
              >
                <img
                  src="assets/svg/buttons/b3.svg"
                  alt="Sugestão de Presente"
                />
              </button>
            </div>
          </div>
          <div className="display-mobile">
            <div className="mobile-buttons">
              <div className="button-and-legend">
                <span className="text">
                  {confirmPresence.primaryButtonLabel.split(" ")[0]}{" "}
                  <span>
                    {confirmPresence.primaryButtonLabel.split(" ")[1]}
                  </span>
                </span>
                <button className="button" onClick={handleShowModal}>
                  <img
                    src="assets/svg/buttons/b1.svg"
                    alt="Confirmar Presença"
                  />
                </button>
              </div>
            </div>
            <div className="mobile-buttons2">
              <div className="button-and-legend">
                <span className="text">
                  {confirmPresence.locationButtonLabel.split(" ")[0]}{" "}
                  <span>
                    {confirmPresence.locationButtonLabel.split(" ")[2]}
                  </span>
                </span>
                <button
                  className="button"
                  onClick={() => setShowModalLocation(true)}
                >
                  <img src="assets/svg/buttons/b2.svg" alt="Localização" />
                </button>
              </div>
              <div className="button-and-legend">
                <span className="text">
                  {confirmPresence.giftSuggestionButtonLabel.split(" ")[0]}{" "}
                  <span>
                    {confirmPresence.giftSuggestionButtonLabel.split(" ")[2]}
                  </span>
                </span>
                <button
                  className="button"
                  onClick={handleShowModalGiftSuggestion}
                >
                  <img
                    src="assets/svg/buttons/b3.svg"
                    alt="Sugestão de Presente"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="display-informative">
            <div className="display-text">
              <span className="text">{confirmPresence.helperText}</span>
            </div>
            <img
              className="icon"
              src="assets/svg/img1.svg"
              alt="Informative Icon"
            />
          </div>
        </div>
      </section>
      {open && (
        <ModalConfirmPresence
          open={open}
          handleClose={handleClose}
          handleSnackbar={handleSnackbar}
        />
      )}
      {showModalGiftSuggestion && (
        <ModalGiftSuggestion
          open={showModalGiftSuggestion}
          handleClose={handleCloseModalGiftSuggestion}
        />
      )}
      <CustomSnackbar
        {...propsSnackbar}
        onClose={() => setPropsSnackbar({ open: false })}
      />
      {showModalLocation && (
        <ModalLocation
          open={showModalLocation}
          handleClose={handleCloseModalLocation}
        />
      )}
    </>
  );
};
export default ConfirmPresence;
