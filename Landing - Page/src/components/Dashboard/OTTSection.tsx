import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = [
  {
    name: 'Featured',
    videos: [
      { id: 1, title: 'Inner Peace Through Meditation', thumbnail: '/path/to/thumbnail1.jpg', duration: '15:30' },
      { id: 2, title: 'Ancient Wisdom of the Vedas', thumbnail: '/path/to/thumbnail2.jpg', duration: '22:45' },
      { id: 3, title: 'Mindful Living Practice', thumbnail: '/path/to/thumbnail3.jpg', duration: '18:20' },
    ],
  },
  {
    name: 'Ramayana Series',
    videos: [
      { id: 4, title: 'Understanding Dharma', thumbnail: '/path/to/thumbnail4.jpg', duration: '25:15' },
      { id: 5, title: 'Lessons from Hanuman', thumbnail: '/path/to/thumbnail5.jpg', duration: '20:30' },
      { id: 6, title: 'The Path of Righteousness', thumbnail: '/path/to/thumbnail6.jpg', duration: '28:45' },
    ],
  },
  {
    name: 'Spiritual Talks',
    videos: [
      { id: 7, title: 'Finding Your Purpose', thumbnail: '/path/to/thumbnail7.jpg', duration: '19:50' },
      { id: 8, title: 'The Power of Now', thumbnail: '/path/to/thumbnail8.jpg', duration: '23:15' },
      { id: 9, title: 'Journey to Self-Discovery', thumbnail: '/path/to/thumbnail9.jpg', duration: '21:40' },
    ],
  },
];

const OTTSection = () => {
  return (
    <div className="p-8">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 z-0">
        <div className="absolute inset-0 opacity-30">
          {/* Add animated patterns here */}
          <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl -top-48 -left-48 animate-drift" />
          <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl -bottom-48 -right-48 animate-drift-reverse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-emerald-600 shadow-lg group-hover:bg-white transition-colors"
                      >
                        <Play className="w-6 h-6" />
                      </motion.button>
                    </div>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {video.title}
                    </h3>
                    <span className="text-sm text-gray-500">{video.duration}</span>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 opacity-0 group-hover:opacity-10 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OTTSection;