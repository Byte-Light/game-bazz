// components/AllAccessories.tsx
"use client";
import Image from 'next/image';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { accessories, Accessory } from '../../data/accessories';

const ITEMS_PER_PAGE = 8;

const AllAccessories: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const totalPages = Math.ceil(accessories.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedAccessories = accessories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
    <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">All Accessories</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {selectedAccessories.map((accessory: Accessory) => (
            <div
              key={accessory.id}
              className="bg-gray-700 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
            >
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src={accessory.imageUrl}
                  alt={accessory.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">{accessory.name}</h3>
              <p className="text-gray-400 text-sm">{accessory.category}</p>
              <p className="text-green-400 text-sm font-medium">{accessory.price}</p>
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

export default AllAccessories;
