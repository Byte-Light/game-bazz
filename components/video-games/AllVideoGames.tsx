// components/AllVideoGames.tsx
"use client";
import Image from 'next/image';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { videoGames, VideoGame } from '../../data/videoGames';

const ITEMS_PER_PAGE = 8;

const AllVideoGames: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const totalPages = Math.ceil(videoGames.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedGames = videoGames.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleShowMore = () => {
    router.push('/details');
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">All Video Games</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {selectedGames.map((game: VideoGame) => (
            <div
              key={game.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
            >
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">{game.title}</h3>
              <p className="text-gray-400 text-sm">{game.genre}</p>
              <p className="text-gray-500 text-xs">Released: {game.releaseDate}</p>
              <button
                onClick={handleShowMore}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Show More Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllVideoGames;
