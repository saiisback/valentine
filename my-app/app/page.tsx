'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/solid';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [name, setName] = useState('');
  const [copied, setCopied] = useState(false);
  const baseURL = 'https://ask-ur-valentine.vercel.app/';

  const generatedLink = name ? `${baseURL}${encodeURIComponent(name.trim().replace(/\s+/g, '-'))}` : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied status after 2s
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-red-700 p-6 text-white">
      <motion.div
        className="p-8 max-w-lg text-center shadow-2xl backdrop-blur-md bg-white/20 rounded-3xl border border-white/30"
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
        <motion.h1
          className="text-4xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Ask your Valentine for a date!! 💖
        </motion.h1>

        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Enter your Valentine’s name below and generate a personalized invite link!
        </motion.p>

        {/* Input Field */}
        <motion.input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter their name..."
          className="mt-4 px-4 py-3 text-lg text-pink-700 bg-white rounded-full shadow-md border-none outline-none w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />

        {/* Generated Link & Copy Button */}
        {name && (
          <motion.div
            className="mt-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-lg font-semibold">Your Link:</p>
            <motion.div
              className="flex items-center mt-2 p-2 bg-white text-pink-700 rounded-full shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-4">{generatedLink}</span>
              <motion.button
                onClick={copyToClipboard}
                className="ml-2 p-2 bg-pink-600 text-white rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {copied ? <CheckIcon className="w-6 h-6" /> : <ClipboardIcon className="w-6 h-6" />}
              </motion.button>
            </motion.div>
            {copied && <p className="text-sm text-green-300 mt-2">Copied to clipboard! ✅</p>}
          </motion.div>
        )}
      </motion.div>

      {/* Footer */}
      <footer className="text-gray-200 text-sm mt-8 flex flex-col items-center">
        <p>
          Made with ❤️ by{' '}
          <Link href="https://www.saikarthikketha.tech/" className="text-white font-bold ml-1 hover:underline">
            Sai Karthik
          </Link>
        </p>
        <div className="mt-4 flex space-x-6">
          <motion.a
            href="https://github.com/saiisback"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://instagram.com/invalid.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sai-karthik-ketha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-white"
            whileHover={{ scale: 1.1 }}
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
        <p className="mt-2">Follow me on GitHub for more cool projects! 🚀</p>
      </footer>
    </div>
  );
}