import { useEffect, useRef, useState } from "react";

const AudioPlayer = ({ isPlaying, volume, hasPlayed, onAudioEnd }) => {
  const audioRef = useRef(null);
  const [initialized, setInitialized] = useState(false);

  // Initialize audio on mount
  useEffect(() => {
    const initAudio = async () => {
      if (audioRef.current && !initialized) {
        audioRef.current.volume = volume;

        // Try to play with user interaction fallback
        try {
          await audioRef.current.play();
          setInitialized(true);
        } catch (error) {
          console.log("Autoplay prevented, waiting for user interaction");

          // Add one-time click listener to start audio
          const startAudio = async () => {
            try {
              await audioRef.current.play();
              setInitialized(true);
              document.removeEventListener("click", startAudio);
              document.removeEventListener("touchstart", startAudio);
            } catch (err) {
              console.log("Could not start audio:", err);
            }
          };

          document.addEventListener("click", startAudio, { once: true });
          document.addEventListener("touchstart", startAudio, { once: true });
        }
      }
    };

    initAudio();
  }, [initialized, volume]);

  // Handle play/pause
  useEffect(() => {
    if (audioRef.current && initialized) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Play error:", error);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, initialized]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleAudioEnd = () => {
    if (onAudioEnd) {
      onAudioEnd();
    }
  };

  return (
    <audio ref={audioRef} onEnded={handleAudioEnd} loop={false} preload="auto">
      <source src="assets/music/3palavrinhas.mp3" type="audio/mpeg" />
      Seu navegador não suporta o elemento de áudio.
    </audio>
  );
};

export default AudioPlayer;
