'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import heartsAnimation from '@/public/hearts.json';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const {name} = useParams();

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-500 to-red-700 p-6 text-white">
      <div className="p-8 max-w-lg text-center shadow-xl backdrop-blur-md bg-white/10 rounded-3xl border border-white/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeartIcon className="w-16 h-16 text-red-400 mx-auto" />
        </motion.div>
        
        <h1 className="text-4xl font-bold mt-4 drop-shadow-lg">Will you be my Valentine? {name} 💖</h1>
        
        {!accepted ? (
          <div className="mt-6 flex gap-4 justify-center">
            <motion.button
              className="px-6 py-3 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-all"
              whileTap={{ scale: 0.9 }}
              onClick={() => setAccepted(true)}
            >
              Yes! 💕
            </motion.button>
            
            <motion.button
              className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-full shadow-lg relative"
              whileHover={{ x: hovered ? Math.random() * 100 - 50 : 0, y: hovered ? Math.random() * 50 - 25 : 0 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              No 😢
            </motion.button>
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center">
            <Lottie animationData={heartsAnimation} className="w-40 h-40" />
            <h2 className="text-2xl font-semibold mt-4 drop-shadow-lg">Yay! Can’t wait for our date! ❤️</h2>
          </div>
        )}
      </div>
    </div>
  );
}