"use client";

import { useState, useRef, useEffect } from "react";
import { songs } from "@/lib/songs";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentIndex]);

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function playSong(index: number) {
    setCurrentIndex(index);
    setIsPlaying(true);
  }

  function nextSong() {
    if (currentIndex === songs.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function prevSong() {
    if (currentIndex === 0) {
      setCurrentIndex(songs.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <main>
      <h1>Music Player</h1>
      <audio ref={audioRef} src={currentSong.src} />

      <p>
        Now Playing: {currentSong.title} - {currentSong.artist}
      </p>

      <div className="flex gap-2">
        <button
          onClick={prevSong}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
        >
          Prev
        </button>

        <button
          onClick={togglePlay}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          onClick={nextSong}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>

      <div className="flex flex-col items-start">
        {songs.map((song, index) => (
          <button
            key={song.id}
            onClick={() => playSong(index)}
            className={index === currentIndex ? "text-green-400" : "text-white"}
          >
            {song.title} - {song.artist}
          </button>
        ))}
      </div>
    </main>
  );
}
