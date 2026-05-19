import Countdown from "react-countdown";
import useEventDateStore from "../../store/eventDateStore";
import theme from "../../theme";
import "./BirthdayDateAndTime.css";

const BirthdayDateAndTime = () => {
  const { targetDate, isEventDay, isPastEvent } = useEventDateStore();
  const { dateAndTime } = theme;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Chegou o dia!</span>;
    } else {
      const units = [
        { value: days, label: "Dias" },
        { value: hours, label: "Horas" },
        { value: minutes, label: "Minutos" },
        { value: seconds, label: "Segundos" },
      ];
      return (
        <div className="bdt-countdown-container">
          {units.map((unit, index) => (
            <div key={index} className="bdt-countdown-unit">
              <span className="bdt-countdown-number">{unit.value}</span>
              <span className="bdt-countdown-description">{unit.label}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <section id="birthdayDateAndTime" className="bdt-birth-day-and-time">
        <div className="bdt-snowflakes" aria-hidden="true">
          <div className="bdt-snowflake">❅</div>
          <div className="bdt-snowflake">❆</div>
          <div className="bdt-snowflake">❅</div>
          <div className="bdt-snowflake">❆</div>
          <div className="bdt-snowflake">❅</div>
          <div className="bdt-snowflake">❆</div>
          <div className="bdt-snowflake">❅</div>
          <div className="bdt-snowflake">❆</div>
        </div>
        <div className="bdt-section-body container">
          <div className="bdt-display-img-and-information">
            <div className="bdt-display-information">
              <div className="bdt-frase">{`${dateAndTime.heroTextPrefix.toUpperCase()}`}</div>
              <div className="bdt-text-day-and-hours">
                <div className="bdt-date-item">
                  <span className="bdt-date-text">Dia</span>
                  <img
                    src="/assets/svg/data.png"
                    alt="Data"
                    className="bdt-date-img"
                  />
                </div>
                <div className="bdt-display-time-item">
                  <img
                    src="/assets/svg/urso.svg"
                    alt="Horário"
                    className="bdt-urso"
                  />
                  <div className="bdt-column bdt-center1">
                    <div className="bdt-row">
                      <img
                        src="/assets/svg/urso.svg"
                        alt="Horário"
                        className="bdt-urso2"
                      />
                      <div className="bdt-date-time-item">
                        <div className="bdt-display-text-time">
                          <span className="bdt-date-time-text1">Horário</span>
                          <span className="bdt-date-time-text2">
                            {dateAndTime.timeValue}
                          </span>
                        </div>
                        <img
                          src="/assets/svg/relogio.svg"
                          alt="Horário"
                          className="bdt-date-time-icon"
                        />
                      </div>
                    </div>

                    <div className="bdt-count-time">
                      {isEventDay ? (
                        <div className="bdt-text-day-birthday">
                          Chegou o grande dia!
                        </div>
                      ) : !isPastEvent ? (
                        <>
                          <div className="bdt-just-missing">Falta apenas</div>
                          <div className="bdt-countdown">
                            <Countdown date={targetDate} renderer={renderer} />
                          </div>
                          <div className="bdt-until-the-day">
                            Até o dia da festa!
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BirthdayDateAndTime;
