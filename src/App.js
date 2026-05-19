import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ConfirmPresence from "./components/ConfirmPresence";
import Invitation from "./components/Invitation";
import BirthdayDateAndTime from "./components/BirthdayDateAndTime";
import Family from "./components/Family";
import CarouselScreen from "./components/CarouselScreen";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import { Element } from "react-scroll";

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [hasPlayed, setHasPlayed] = useState(false);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    if (!isMusicPlaying) {
      setHasPlayed(false);
    }
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handleAudioEnd = () => {
    setIsMusicPlaying(false);
    setHasPlayed(true);
  };

  return (
    <>
      <AudioPlayer
        isPlaying={isMusicPlaying}
        volume={volume}
        hasPlayed={hasPlayed}
        onAudioEnd={handleAudioEnd}
      />
      <Element name="invitation">
        <Header
          isMusicPlaying={isMusicPlaying}
          toggleMusic={toggleMusic}
          volume={volume}
          onVolumeChange={handleVolumeChange}
          hasPlayed={hasPlayed}
        />
        <Invitation />
      </Element>
      <Element name="birthdayDateAndTime">
        <BirthdayDateAndTime />
      </Element>
      <Element name="confirmPresence">
        <ConfirmPresence />
      </Element>
      <Element name="family">
        <Family />
      </Element>
      <Element name="carouselScreen">
        <CarouselScreen />
      </Element>
      <Footer />
    </>
  );
}

export default App;
