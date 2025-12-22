import React, { useState } from 'react';
import { Play, Pause, CheckCircle, Sun, Moon, Cloud, Hand, Bot, Music, Volume2, Leaf, Sparkles, Star, Heart, Flower2 } from 'lucide-react';

const mudras = [
  { name: 'Divine Gyan Mudra', img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gyan_Mudra.jpg', desc: 'Enhances divine wisdom and spiritual concentration.', icon: <Star className="h-5 w-5 text-emerald-500" /> },
  { name: 'Divine Prana Mudra', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Prana_Mudra.jpg', desc: 'Channels cosmic energy and spiritual vitality.', icon: <Sparkles className="h-5 w-5 text-teal-500" /> },
  { name: 'Divine Dhyana Mudra', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Dhyana_Mudra.jpg', desc: 'Deepens spiritual meditation and inner peace.', icon: <Heart className="h-5 w-5 text-cyan-500" /> },
];

const natureSounds = [
  { name: 'Divine Forest', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', icon: <Leaf className="h-6 w-6 text-emerald-500" />, desc: 'Connect with ancient forest spirits' },
  { name: 'Divine Ocean', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', icon: <Volume2 className="h-6 w-6 text-teal-500" />, desc: 'Feel the rhythm of cosmic waves' },
  { name: 'Mystical Mountains', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', icon: <Music className="h-6 w-6 text-cyan-500" />, desc: 'Breathe with mountain wisdom' },
];

const GuidedMeditation = () => {
  const [tab, setTab] = useState<'mudra' | 'guided' | 'sound'>('mudra');
  // Guided meditation state
  const [isMeditating, setIsMeditating] = useState(false);
  const [timer, setTimer] = useState(5 * 60); // 5 minutes
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [finished, setFinished] = useState(false);
  // Sound meditation state
  const [currentSound, setCurrentSound] = useState<number | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Timer logic for guided meditation
  const startMeditation = () => {
    setIsMeditating(true);
    setFinished(false);
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setIsMeditating(false);
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalId(id);
  };
  const pauseMeditation = () => {
    setIsMeditating(false);
    if (intervalId) clearInterval(intervalId);
  };
  const resetMeditation = () => {
    setTimer(5 * 60);
    setFinished(false);
    setIsMeditating(false);
    if (intervalId) clearInterval(intervalId);
  };
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Sound meditation logic
  const playSound = (index: number) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const newAudio = new window.Audio(natureSounds[index].src);
    newAudio.play();
    setAudio(newAudio);
    setCurrentSound(index);
    setIsPlaying(true);
    newAudio.onended = () => setIsPlaying(false);
  };
  const pauseSound = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-2 sm:px-4 py-8 sm:py-12 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Sacred Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/35 rounded-xl blur-xl animate-sacred-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/35 rounded-xl blur-xl animate-spiritual-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-200/35 rounded-xl blur-xl animate-sacred-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-emerald-200/35 rounded-xl blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-teal-200/25 rounded-xl blur-lg animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-cyan-200/30 rounded-xl blur-lg animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="w-full max-w-8xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-3 sm:p-8 md:p-12 flex flex-col items-center relative overflow-hidden border border-emerald-200/50 z-10 card-sacred">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-500" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Divine Meditation Center
            </h1>
            <Sparkles className="h-8 w-8 text-cyan-500" />
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-md mx-auto">
            Choose your mindful practice: Divine Mudras, Spiritual Guidance, or Cosmic Sounds.
          </p>
        </div>
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 w-full justify-center items-center">
          <button onClick={() => setTab('mudra')} className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2 ${tab === 'mudra' ? 'btn-sacred' : 'btn-spiritual'}`}>
            <Hand className="h-4 w-4" />
            Divine Mudras
          </button>
          <button onClick={() => setTab('guided')} className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2 ${tab === 'guided' ? 'btn-sacred' : 'btn-spiritual'}`}>
            <Bot className="h-4 w-4" />
            Spiritual Guidance
          </button>
          <button onClick={() => setTab('sound')} className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2 ${tab === 'sound' ? 'btn-sacred' : 'btn-spiritual'}`}>
            <Music className="h-4 w-4" />
            Cosmic Sounds
          </button>
        </div>
        {/* Tab Content */}
        {tab === 'mudra' && (
          <div className="w-full flex flex-col items-center">
            <h2 className="text-lg sm:text-2xl font-bold text-emerald-700 mb-2 sm:mb-4 flex items-center gap-2">
              <Hand className="h-6 w-6" /> Divine Mudra Practice
            </h2>
            <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
              Connect with ancient wisdom through divine hand positions. Hold each mudra for 2-5 minutes while breathing deeply and focusing on your spiritual energy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full">
              {mudras.map((mudra) => (
                <div key={mudra.name} className="flex flex-col items-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all hover:scale-105 card-sacred">
                  <div className="relative mb-4">
                    <img src={mudra.img} alt={mudra.name} className="w-24 h-24 object-cover rounded-lg shadow-lg" />
                    <div className="absolute -top-2 -right-2 bg-white rounded-xl p-1 shadow-md">
                      {mudra.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 text-center text-emerald-800">{mudra.name}</h4>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{mudra.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === 'guided' && (
          <div className="w-full flex flex-col items-center">
            <h2 className="text-lg sm:text-2xl font-bold text-emerald-700 mb-2 sm:mb-4 flex items-center gap-2">
              <Bot className="h-6 w-6" /> Spiritual AI Guidance
            </h2>
            <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
              Let our spiritual AI guide you through divine meditation. Close your eyes, follow the mindful instructions, and connect with your inner light.
            </p>
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="relative mb-4">
                <span className="text-3xl sm:text-5xl font-mono text-emerald-600 mb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {formatTime(timer)}
                </span>
                <div className="absolute -inset-4 bg-emerald-100/50 rounded-xl blur-xl"></div>
              </div>
              <div className="flex gap-2 sm:gap-4">
                {!isMeditating && !finished && (
                  <button onClick={startMeditation} className="btn-sacred text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                    <Play className="h-5 w-5" /> Begin Divine Journey
                  </button>
                )}
                {isMeditating && (
                  <button onClick={pauseMeditation} className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:from-amber-500 hover:to-orange-500 transition-all">
                    <Pause className="h-5 w-5" /> Pause
                  </button>
                )}
                <button onClick={resetMeditation} className="btn-spiritual text-gray-700 px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                  Reset
                </button>
              </div>
            </div>
            {!finished ? (
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 text-center text-lg text-gray-700 shadow-lg max-w-xl border border-emerald-100">
                <span className="block mb-2 font-semibold text-emerald-700 flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Spiritual Guide says:
                </span>
                "Breathe in divine light... and exhale all that no longer serves you. You are surrounded by cosmic love, protected by universal energy, and connected to infinite peace."
              </div>
            ) : (
              <div className="flex flex-col items-center mt-8 animate-fade-in">
                <div className="relative mb-4">
                  <CheckCircle className="h-12 w-12 text-emerald-500 mb-4 animate-bounce" />
                  <div className="absolute -inset-2 bg-emerald-100/50 rounded-xl blur-xl"></div>
                </div>
                <h2 className="text-2xl font-bold text-emerald-800 mb-2 text-center">Divine Journey Complete!</h2>
                <p className="text-lg text-gray-700 mb-4 text-center">You have connected with your divine essence. Carry this spiritual peace with you always.</p>
              </div>
            )}
          </div>
        )}
        {tab === 'sound' && (
          <div className="w-full flex flex-col items-center">
            <h2 className="text-lg sm:text-2xl font-bold text-emerald-700 mb-2 sm:mb-4 flex items-center gap-2">
              <Music className="h-6 w-6" /> Cosmic Sound Healing
            </h2>
            <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
              Immerse yourself in divine nature frequencies. Let the cosmic vibrations restore your spiritual balance and connect you with universal harmony.
            </p>
            <div className="flex flex-col gap-4 sm:gap-6 w-full mb-6 sm:mb-8">
              {natureSounds.map((sound, idx) => (
                <div key={sound.name} className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all shadow-lg ${currentSound === idx ? 'border-emerald-500 bg-emerald-50 shadow-emerald-200' : 'border-emerald-200 bg-white hover:border-emerald-300 hover:shadow-emerald-100'}`}>
                  <div className="flex items-center gap-3">
                    {sound.icon}
                    <div>
                      <span className="flex-1 font-medium text-emerald-800">{sound.name}</span>
                      <p className="text-sm text-gray-600">{sound.desc}</p>
                    </div>
                  </div>
                  {isPlaying && currentSound === idx ? (
                    <button onClick={pauseSound} className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:from-amber-500 hover:to-orange-500 transition-all">
                      <Pause className="h-5 w-5" /> Pause
                    </button>
                  ) : (
                    <button onClick={() => playSound(idx)} className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all">
                      <Play className="h-5 w-5" /> Play
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="relative mb-4">
                <span className="text-3xl sm:text-5xl font-mono text-emerald-600 mb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {formatTime(timer)}
                </span>
                <div className="absolute -inset-4 bg-emerald-100/50 rounded-xl blur-xl"></div>
              </div>
              <div className="flex gap-2 sm:gap-4">
                {!isMeditating && !finished && (
                  <button onClick={startMeditation} className="btn-sacred text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                    <Play className="h-5 w-5" /> Begin Divine Journey
                  </button>
                )}
                {isMeditating && (
                  <button onClick={pauseMeditation} className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:from-amber-500 hover:to-orange-500 transition-all">
                    <Pause className="h-5 w-5" /> Pause
                  </button>
                )}
                <button onClick={resetMeditation} className="btn-spiritual text-gray-700 px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GuidedMeditation; 