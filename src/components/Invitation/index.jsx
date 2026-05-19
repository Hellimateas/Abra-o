import theme from "../../theme";
import "./Invitation.css";

const Invitation = () => {
  const { invitation } = theme;

  return (
    <>
      <section id="invitation" className="invitation">
        <div className="invitation-bubbles" aria-hidden="true">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <div className="section-body container">
          <div className="banner">
            <h1>{invitation.headline1}</h1>
            <div className="banner-badge">
              <img
                src="/assets/svg/home.png"
                alt="Badge  Abraão Levi"
                className="badge-image"
              />
            </div>
            <div className="content-wrapper">
              <div className="sabao-img-wrapper">
                <img
                  src="/assets/svg/carousel/abraaoRindo.jpg"
                  alt="1 Ano"
                  className="sabao-img"
                />
              </div>
              <div className="text-and-gif-wrapper">
                <div className="text-invitation">
                  <h2>{invitation.subtitle1}</h2>
                </div>
                <div className="gif-wrapper">
                  <img
                    src="/assets/svg/carousel/img-slide-12.jpeg"
                    alt="Animação Três Palavrinhas"
                    className="gif-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Invitation;
