import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SideBar2 from "../SideBar2";
import AudioSettings from "../AudioSettings";
import theme from "../../theme";
import "./Header.css";

const Header = ({
  isMusicPlaying,
  toggleMusic,
  volume,
  onVolumeChange,
  hasPlayed,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerMobile, setHeaderMobile] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Detectar seção atual baseada no scroll
      const sections = [
        { name: "invitation", color: "#F4E4A6" },
        { name: "birthdayDateAndTime", color: "#91D8F6" },
        { name: "confirm-presence", color: "#c2f691" },
        { name: "family", color: "#F4E4A6" },
        { name: "carouselScreen", color: "#91D8F6" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].name);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setCurrentSection(sections[i].name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //     const menuOpenerElement = document.querySelector('.menu-opener');
  //     if (menuOpenerElement) {
  //         const computedStyle = window.getComputedStyle(menuOpenerElement);
  //         const displayValue = computedStyle.getPropertyValue('display');
  //         if (displayValue === 'none') {
  //             setOpenMenu(true)
  //         } else if (displayValue === 'block') {
  //             setOpenMenu(false)
  //         }
  //       }
  // }, [])
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 625) {
        setHeaderMobile(true);
      } else {
        setHeaderMobile(false);
      }
    };
    // Adiciona um listener de resize para atualizar o estado quando a largura da tela muda
    window.addEventListener("resize", handleResize);
    // Chama a função uma vez para verificar a largura inicial da tela
    handleResize();
    // Remove o listener de resize ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickMenu = () => {
    setOpenMenuMobile(!openMenuMobile);
  };

  const handleMusicNoteClick = () => {
    toggleMusic();
    setMusicStarted(true);
  };

  const getSectionColor = () => {
    const colors = {
      invitation: "#F4E4A6",
      birthdayDateAndTime: "#91D8F6",
      "confirm-presence": "#c2f691",
      family: "#F4E4A6",
      carouselScreen: "#91D8F6",
    };
    return colors[currentSection] || "#F4E4A6";
  };

  return (
    <header
      className={isScrolled ? "fixed-header opaque" : "fixed-header"}
      style={
        isScrolled
          ? { backgroundColor: getSectionColor() }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="header">
        <div className="logo">
          <div className="logoimg">
            {theme.childName} | {theme.ageYears} ano
          </div>
        </div>
        <div className="menu">
          {/* <MenuIcon className='menu-opener' onClick={handleClickMenu}/> */}
          {/* <nav style={{display: openMenu? 'block': 'none'}}> */}
          {!headerMobile ? (
            <nav>
              <ul>
                <li>
                  <Link
                    to="invitation"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    <span
                      className={
                        isScrolled ? "fixed-color opaque" : "fixed-color"
                      }
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="birthdayDateAndTime"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className={
                        isScrolled ? "fixed-color opaque" : "fixed-color"
                      }
                    >
                      Data
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="confirmPresence"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className={
                        isScrolled ? "fixed-color opaque" : "fixed-color"
                      }
                    >
                      Confirmar presença
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="carouselScreen"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className={
                        isScrolled ? "fixed-color opaque" : "fixed-color"
                      }
                    >
                      Fotos
                    </span>
                  </Link>
                </li>
                <li className="audio-settings-container">
                  {!musicStarted ? (
                    <button
                      className="music-note-btn"
                      onClick={handleMusicNoteClick}
                      title="Clique para tocar a música"
                    >
                      🎵
                    </button>
                  ) : (
                    <AudioSettings
                      isMusicPlaying={isMusicPlaying}
                      toggleMusic={toggleMusic}
                      volume={volume}
                      onVolumeChange={onVolumeChange}
                      hasPlayed={hasPlayed}
                    />
                  )}
                </li>
              </ul>
            </nav>
          ) : (
            // <Sidebar active={openMenuMobile} onClose={handleClickMenu}/>
            <div className="mobile-menu-container">
              {!musicStarted ? (
                <button
                  className="music-note-btn"
                  onClick={handleMusicNoteClick}
                  title="Clique para tocar a música"
                >
                  🎵
                </button>
              ) : (
                <AudioSettings
                  isMusicPlaying={isMusicPlaying}
                  toggleMusic={toggleMusic}
                  volume={volume}
                  onVolumeChange={onVolumeChange}
                  hasPlayed={hasPlayed}
                />
              )}
              <SideBar2 active={openMenuMobile} onClose={handleClickMenu} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
