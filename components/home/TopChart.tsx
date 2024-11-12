
// components/TopChart.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Game {
  id: number;
  title: string;
  genre: string;
  rating: number;
  imageUrl: string;
}


const games: Game[] = [
    {
      id: 1,
      title: "Cyber Adventure",
      genre: "RPG",
      rating: 4.8,
      imageUrl: "/images/cyber-adventure.jpeg",
    },
    {
      id: 2,
      title: "Space Odyssey",
      genre: "Action",
      rating: 4.5,
      imageUrl: "/images/space-odyssey.jpeg",
    },
    {
      id: 3,
      title: "Mystic Quest",
      genre: "Puzzle",
      rating: 4.7,
      imageUrl: "/images/mystic-quest.jpeg",
    },
    {
      id: 4,
      title: "Battle Royale",
      genre: "Shooter",
      rating: 4.3,
      imageUrl: "/images/battle-royale.jpeg",
    },
    {
      id: 5,
      title: "Dragon Fury",
      genre: "Fantasy",
      rating: 4.9,
      imageUrl: "/images/battle-royale.jpeg",
    },
    {
      id: 6,
      title: "City Racer",
      genre: "Racing",
      rating: 4.4,
      imageUrl: "/images/mystic-quest.jpeg",
    },
    {
      id: 7,
      title: "Galactic Wars",
      genre: "Strategy",
      rating: 4.6,
      imageUrl: "/images/space-odyssey.jpeg",
    },
    {
      id: 8,
      title: "Island Survival",
      genre: "Adventure",
      rating: 4.2,
      imageUrl: "/images/cyber-adventure.jpeg",
    },
  ];
  

const TopChart: React.FC = () => {
  const router = useRouter();
  
  const handleShowMore = () => {
    router.push('/details');
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl font-extrabold mb-8 text-center tracking-tight">
          Top Chart
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-850 p-5 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2 tracking-tight">
                {game.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{game.genre}</p>
              <p className="text-yellow-400 text-sm font-medium">⭐ {game.rating}</p>
              <button
                onClick={handleShowMore}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Show More Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopChart;
