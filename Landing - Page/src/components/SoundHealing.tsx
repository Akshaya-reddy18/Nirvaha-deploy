import React, { useState } from 'react';
import { Play, Pause, Music, Volume2, Leaf, X, Sparkles, Star, Heart, Flower2, Moon, Sun } from 'lucide-react';

const soundSections = [
  {
    title: 'Divine Frequencies',
    description: 'Divine healing tones for spiritual awakening and cosmic connection.',
    icon: <Sparkles className="h-8 w-8 text-emerald-500" />,
    sounds: [
      { name: '432Hz Divine Harmony', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', icon: <Music className="h-6 w-6 text-emerald-500" />, desc: 'Universal frequency of love' },
      { name: '528Hz Miracle Tone', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', icon: <Heart className="h-6 w-6 text-teal-500" />, desc: 'DNA repair and transformation' },
      { name: '639Hz Divine Connection', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', icon: <Star className="h-6 w-6 text-cyan-500" />, desc: 'Heart chakra activation' },
    ]
  },
  {
    title: 'Cosmic Brainwaves',
    description: 'Divine frequencies for deep meditation and spiritual consciousness.',
    icon: <Moon className="h-8 w-8 text-teal-500" />,
    sounds: [
      { name: 'Alpha Consciousness', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', icon: <Volume2 className="h-6 w-6 text-emerald-500" />, desc: 'Relaxed awareness state' },
      { name: 'Theta Meditation', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', icon: <Volume2 className="h-6 w-6 text-teal-500" />, desc: 'Deep spiritual connection' },
      { name: 'Delta Sleep Healing', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', icon: <Volume2 className="h-6 w-6 text-cyan-500" />, desc: 'Restorative deep sleep' },
    ]
  },
  {
    title: 'Nature Spirits',
    description: 'Ancient wisdom sounds from Mother Earth and cosmic elements.',
    icon: <Sun className="h-8 w-8 text-cyan-500" />,
    sounds: [
      { name: 'Divine Forest', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', icon: <Leaf className="h-6 w-6 text-emerald-500" />, desc: 'Ancient tree spirits' },
      { name: 'Divine Ocean', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', icon: <Volume2 className="h-6 w-6 text-teal-500" />, desc: 'Cosmic wave energy' },
      { name: 'Mystical Mountains', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', icon: <Flower2 className="h-6 w-6 text-cyan-500" />, desc: 'Mountain wisdom breath' },
    ]
  }
];


const SoundHealing = () => {
  const [dialogOpen, setDialogOpen] = useState<number | null>(null); // section index
  const [current, setCurrent] = useState<{ section: number; sound: number } | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = (sectionIdx: number, soundIdx: number) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const newAudio = new window.Audio(soundSections[sectionIdx].sounds[soundIdx].src);
    newAudio.play();
    setAudio(newAudio);
    setCurrent({ section: sectionIdx, sound: soundIdx });
    setIsPlaying(true);
    newAudio.onended = () => setIsPlaying(false);
  };

  const pauseSound = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const closeDialog = () => {
    setDialogOpen(null);
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
    setCurrent(null);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-4 py-12 pt-24 relative overflow-hidden">
      {/* Sacred Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/35 rounded-full blur-xl animate-sacred-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/35 rounded-full blur-xl animate-spiritual-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-cyan-200/35 rounded-full blur-xl animate-sacred-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-emerald-200/35 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-teal-200/25 rounded-full blur-lg animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-cyan-200/30 rounded-full blur-lg animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>
      
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center relative overflow-hidden min-h-[600px] border border-emerald-200/50 z-10 card-sacred">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-500" />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Divine Sound Healing
            </h1>
            <Sparkles className="h-8 w-8 text-cyan-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Immerse yourself in divine frequencies and cosmic soundscapes. Let the divine vibrations restore your spiritual balance and connect you with universal harmony.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
          {soundSections.map((section, idx) => (
            <div
              key={section.title}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl shadow-2xl p-16 w-[28rem] h-[28rem] cursor-pointer hover:scale-105 transition-all hover:shadow-emerald-200 relative overflow-hidden"
              onClick={() => setDialogOpen(idx)}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 scale-125 relative">
                  {section.icon}
                  <div className="absolute -inset-2 bg-emerald-100/50 rounded-full blur-xl"></div>
                </div>
                <h2 className="text-2xl font-bold text-emerald-700 mb-3">{section.title}</h2>
                <p className="text-gray-600 text-center text-base mb-2 leading-relaxed">{section.description}</p>
                <p className="text-emerald-600 text-center text-lg font-medium">{section.sounds.length} divine sounds</p>
                <button className="mt-6 btn-sacred text-white px-6 py-3 rounded-xl font-semibold text-lg">
                  Enter Divine Space
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dialog/modal for sound list */}
        {dialogOpen !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-lg relative animate-fadeIn border border-emerald-200/50 card-sacred">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-emerald-600 transition-colors"
                onClick={closeDialog}
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {soundSections[dialogOpen].icon}
                  <h2 className="text-2xl font-bold text-emerald-700">{soundSections[dialogOpen].title}</h2>
                </div>
                <p className="text-gray-600 text-sm">{soundSections[dialogOpen].description}</p>
              </div>
              <div className="flex flex-col gap-4">
                {soundSections[dialogOpen].sounds.map((sound, soundIdx) => (
                  <div key={sound.name} className={`flex items-center gap-4 p-4 rounded-3xl border-2 transition-all shadow-lg ${current && current.section === dialogOpen && current.sound === soundIdx && isPlaying ? 'border-emerald-500 bg-emerald-50 shadow-emerald-200' : 'border-emerald-200 bg-white hover:border-emerald-300 hover:shadow-emerald-100 card-sacred'}`}>
                    <div className="flex items-center gap-3 flex-1">
                      {sound.icon}
                      <div>
                        <span className="font-medium text-emerald-800">{sound.name}</span>
                        <p className="text-sm text-gray-600">{sound.desc}</p>
                      </div>
                    </div>
                    {isPlaying && current && current.section === dialogOpen && current.sound === soundIdx ? (
                      <button onClick={pauseSound} className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:from-amber-500 hover:to-orange-500 transition-all">
                        <Pause className="h-5 w-5" /> Pause
                      </button>
                    ) : (
                      <button onClick={() => playSound(dialogOpen, soundIdx)} className="btn-sacred text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2">
                        <Play className="h-5 w-5" /> Play
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SoundHealing; 