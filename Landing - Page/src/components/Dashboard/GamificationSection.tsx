import { motion } from 'framer-motion';

const GameCard = ({ title, description, onClick }: { title: string; description: string; onClick: () => void }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      onClick={onClick}
      className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium 
                hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
    >
      Start Game
    </button>
  </motion.div>
);

const GamificationSection = () => {
  const games = [
    {
      title: 'Breath Awareness',
      description: 'Follow the expanding circle and sync your breath for deep relaxation.',
    },
    {
      title: 'Gratitude Garden',
      description: 'Plant seeds of positivity and watch your garden grow with daily entries.',
    },
    {
      title: 'Mindful Puzzles',
      description: 'Solve calming puzzles that promote focus and mental clarity.',
    },
    {
      title: 'Energy Flow',
      description: 'Guide the energy through chakra points in this meditative game.',
    },
  ];

  // Floating orb animation for background
  const orbVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 to-teal-50">
        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={orbVariants}
            animate="animate"
            style={{
              position: 'absolute',
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            className={`w-32 h-32 rounded-full bg-gradient-to-r from-emerald-300/20 to-teal-300/20 
                       blur-2xl transform -translate-x-1/2 -translate-y-1/2`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mindful Games</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Engage in playful activities designed to enhance your mindfulness practice and emotional well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {games.map((game, index) => (
              <GameCard
                key={index}
                title={game.title}
                description={game.description}
                onClick={() => console.log(`Starting ${game.title}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationSection;