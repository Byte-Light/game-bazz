// components/LatestAccessories.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Accessory {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
}
const accessories: Accessory[] = [
  {
    id: 1,
    name: "Pro Gaming Headset",
    category: "Audio",
    price: "$129.99",
    imageUrl: "/images/gaming-headset.jpeg",
  },
  {
    id: 2,
    name: "RGB Mechanical Keyboard",
    category: "Keyboard",
    price: "$89.99",
    imageUrl: "/images/mechanical-keyboard.jpeg",
  },
  {
    id: 3,
    name: "Ergonomic Gaming Chair",
    category: "Furniture",
    price: "$249.99",
    imageUrl: "/images/gaming-chair.jpeg",
  },
  {
    id: 4,
    name: "Wireless Gaming Mouse",
    category: "Mouse",
    price: "$59.99",
    imageUrl: "/images/gaming-mouse.jpeg",
  },
  {
    id: 5,
    name: "Curved Gaming Monitor",
    category: "Display",
    price: "$349.99",
    imageUrl: "/images/gaming-mouse.jpeg",
  },
  {
    id: 6,
    name: "Gaming Desk",
    category: "Furniture",
    price: "$199.99",
    imageUrl: "/images/gaming-chair.jpeg",
  },
  {
    id: 7,
    name: "High-Speed Router",
    category: "Network",
    price: "$99.99",
    imageUrl: "/images/mechanical-keyboard.jpeg",
  },
  {
    id: 8,
    name: "Gaming Controller",
    category: "Accessories",
    price: "$49.99",
    imageUrl: "/images/gaming-headset.jpeg",
  },
];

const LatestAccessories: React.FC = () => {
  const router = useRouter();

  const handleShowMore = () => {
    router.push('/details');
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">Latest Accessories</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {accessories.map((accessory) => (
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
      </div>
    </section>
  );
};

export default LatestAccessories;
