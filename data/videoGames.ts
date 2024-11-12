// data/videoGames.ts

export interface VideoGame {
    id: number;
    title: string;
    genre: string;
    releaseDate: string;
    imageUrl: string;
  }
  
  export const videoGames: VideoGame[] = [
    { id: 1, title: "Mystic Legends", genre: "Fantasy RPG", releaseDate: "2023-10-15", imageUrl: "/images/cyber-adventure.jpeg" },
    { id: 2, title: "Cyber Battle Arena", genre: "Action Shooter", releaseDate: "2023-09-12", imageUrl: "/images/space-odyssey.jpeg" },
    { id: 3, title: "Space Command", genre: "Sci-Fi Strategy", releaseDate: "2023-08-05", imageUrl: "/images/mystic-quest.jpeg" },
    { id: 4, title: "Racing Fury", genre: "Racing", releaseDate: "2023-07-20", imageUrl: "/images/battle-royale.jpeg" },
    { id: 5, title: "Dragon's Quest", genre: "Fantasy RPG", releaseDate: "2023-06-18", imageUrl: "/images/cyber-adventure.jpeg" },
    { id: 6, title: "Zombie Warfare", genre: "Horror Shooter", releaseDate: "2023-05-12", imageUrl: "/images/battle-royale.jpeg" },
    { id: 7, title: "Alien Invasion", genre: "Sci-Fi Strategy", releaseDate: "2023-04-25", imageUrl: "/images/space-odyssey.jpeg" },
    { id: 8, title: "Galactic Wars", genre: "Space Adventure", releaseDate: "2023-03-14", imageUrl: "/images/mystic-quest.jpeg" },
    { id: 9, title: "Pirate Legends", genre: "Adventure RPG", releaseDate: "2023-02-08", imageUrl: "/images/pirate-legends.jpg" },
    { id: 10, title: "Ninja Combat", genre: "Action", releaseDate: "2023-01-30", imageUrl: "/images/ninja-combat.jpg" },
    { id: 11, title: "Wild West Shooter", genre: "Action Shooter", releaseDate: "2022-12-25", imageUrl: "/images/wild-west-shooter.jpg" },
    { id: 12, title: "Fantasy Realm", genre: "Fantasy RPG", releaseDate: "2022-11-20", imageUrl: "/images/fantasy-realm.jpg" },
    { id: 13, title: "Dungeon Escape", genre: "Puzzle Adventure", releaseDate: "2022-10-15", imageUrl: "/images/dungeon-escape.jpg" },
    { id: 14, title: "Monster Defense", genre: "Tower Defense", releaseDate: "2022-09-12", imageUrl: "/images/monster-defense.jpg" },
    { id: 15, title: "World of Racing", genre: "Racing", releaseDate: "2022-08-01", imageUrl: "/images/world-of-racing.jpg" },
    { id: 16, title: "Space Pirates", genre: "Adventure", releaseDate: "2022-07-04", imageUrl: "/images/space-pirates.jpg" },
    { id: 17, title: "Medieval Siege", genre: "Strategy", releaseDate: "2022-06-18", imageUrl: "/images/medieval-siege.jpg" },
    { id: 18, title: "Galaxy Raiders", genre: "Space Shooter", releaseDate: "2022-05-09", imageUrl: "/images/galaxy-raiders.jpg" },
    { id: 19, title: "Jungle Adventure", genre: "Adventure", releaseDate: "2022-04-25", imageUrl: "/images/jungle-adventure.jpg" },
    { id: 20, title: "Robot Invasion", genre: "Sci-Fi Action", releaseDate: "2022-03-12", imageUrl: "/images/robot-invasion.jpg" },
  ];
  