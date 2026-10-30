export type Song = {
  id: number;
  title: string;
  artist: string;
  src: string;
};

export const songs: Song[] = [
  {
    id: 1,
    title: "Old Film Tone",
    artist: "MixkayCat",
    src: "/music/song1.mp3",
  },

  {
    id: 2,
    title: "No Escape",
    artist: "ShtakalBerry",
    src: "/music/song2.mp3",
  },

  {
    id: 3,
    title: "Peaceful Garden",
    artist: "HarumachiMusic",
    src: "/music/song3.mp3",
  },

  {
    id: 4,
    title: "Epic4",
    artist: "HopeDope",
    src: "/music/song4.mp3",
  },

  {
    id: 5,
    title: "8bitWarriors",
    artist: "EchoBrainz",
    src: "/music/song5.mp3",
  },
];
