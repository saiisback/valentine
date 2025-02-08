'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [begging, setBegging] = useState(false);
  const { name } = useParams();
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const moveNoButton = () => {
    setBegging(true);
    setNoButtonPosition({
      top: Math.random() * 300 - 150,
      left: Math.random() * 300 - 150,
    });
  };

  useEffect(() => {
    if (accepted) {
      const script = document.createElement('script');
      script.src = 'https://tenor.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [accepted]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-red-700 p-6 text-white relative overflow-hidden">
      <motion.div
        className="p-8 max-w-lg text-center shadow-2xl backdrop-blur-md bg-white/20 rounded-3xl border border-white/30 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <HeartIcon className="w-16 h-16 text-white mx-auto drop-shadow-lg" />
        </motion.div>

        <h1 className="text-5xl font-extrabold mt-6 drop-shadow-lg">
          {accepted ? `Thank you, ${name}!` : begging ? "Please be my Valentine? 🥺" : `Will you be my Valentine, ${name}? 💖`}
        </h1>

        {!accepted ? (
          <div className="mt-8 flex justify-center gap-6 relative w-full h-20">
            {/* Yes Button - Fixed Position */}
            <motion.button
              className="px-8 py-4 bg-white text-pink-600 font-bold rounded-full shadow-xl text-lg border-1 border-pink-500 hover:scale-110 transition-all"
              whileTap={{ scale: 0.9 }}
              onClick={() => setAccepted(true)}
            >
              Yes! 💕
            </motion.button>

            {/* No Button - Moves Randomly */}
            <motion.button
              className="px-8 py-4 bg-gray-300 text-gray-800 font-bold rounded-full shadow-xl text-lg border-1 border-pink-500 absolute"
              animate={{ top: noButtonPosition.top, left: noButtonPosition.left }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
            >
              No 😢
            </motion.button>
          </div>
        ) : (
          <motion.div
            className="mt-8 flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tenor GIF Embed */}
            <div className="tenor-gif-embed w-full max-w-xs" data-postid="18488162" data-share-method="host" data-aspect-ratio="1.20755" data-width="100%" />

            <h2 className="text-3xl font-extrabold mt-6 drop-shadow-lg flex items-center gap-2">
              Yay! Can’t wait for our magical date! ❤️✨
            </h2>
          </motion.div>
        )}
      </motion.div>
      <footer className='text-gray-400 flex gap-4 items-center mt-6'>
        <span>Website made with love ❤️✨ for you</span>
      </footer>
    </div>
  );
}