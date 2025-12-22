import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';

type Mudra = {
  id: string;
  name: string;
  sanskritName: string;
  benefits: string[];
  steps: string[];
  duration: string;
  bestTime: string;
  chakra: string;
  description: string;
};

const MUDRAS: Mudra[] = [
  {
    id: 'gyan',
    name: 'Gyan Mudra',
    sanskritName: 'ज्ञान मुद्रा',
    benefits: [
      'Enhances concentration and memory',
      'Calms the mind and reduces stress',
      'Improves focus and mental clarity',
      'Stimulates the root chakra',
      'Helps in meditation practice'
    ],
    steps: [
      'Sit comfortably in a meditation posture (cross-legged or on a chair)',
      'Keep your back straight and shoulders relaxed',
      'Touch the tip of your index finger to the tip of your thumb',
      'Keep the other three fingers (middle, ring, and little) extended and relaxed',
      'Place your hands on your knees with palms facing upward',
      'Close your eyes and breathe slowly and deeply',
      'Hold this position for 5-15 minutes',
      'Focus on your breath and the connection between your fingers'
    ],
    duration: '5-15 minutes',
    bestTime: 'Early morning or before meditation',
    chakra: 'Root Chakra (Muladhara)',
    description: 'Gyan Mudra, also known as the "Mudra of Knowledge," is one of the most important and commonly practiced mudras. It represents the unity of individual consciousness with universal consciousness.'
  },
  {
    id: 'prana',
    name: 'Prana Mudra',
    sanskritName: 'प्राण मुद्रा',
    benefits: [
      'Increases vitality and energy levels',
      'Strengthens the immune system',
      'Improves eyesight and eye health',
      'Reduces fatigue and exhaustion',
      'Enhances overall physical health'
    ],
    steps: [
      'Sit in a comfortable meditation posture',
      'Bend your ring finger and little finger to touch the tip of your thumb',
      'Keep your index and middle fingers extended',
      'Apply gentle pressure with the thumb on the ring and little fingers',
      'Place your hands on your knees with palms facing upward',
      'Breathe deeply: Inhale for 4 counts, hold for 2, exhale for 6 counts',
      'Practice for 15-30 minutes daily',
      'Maintain awareness of the energy flow in your body'
    ],
    duration: '15-30 minutes',
    bestTime: 'Morning or when feeling low energy',
    chakra: 'Root Chakra (Muladhara)',
    description: 'Prana Mudra is the "Mudra of Life Force." It activates the dormant energy within the body and helps in balancing the five elements, particularly increasing the fire element.'
  },
  {
    id: 'dhyana',
    name: 'Dhyana Mudra',
    sanskritName: 'ध्यान मुद्रा',
    benefits: [
      'Deepens meditation practice',
      'Promotes inner stillness and peace',
      'Reduces anxiety and mental restlessness',
      'Enhances spiritual awareness',
      'Brings balance to the mind and body'
    ],
    steps: [
      'Sit in a comfortable meditation posture (preferably lotus or half-lotus)',
      'Place your left hand on top of your right hand in your lap',
      'Both palms should face upward',
      'The tips of your thumbs should lightly touch each other, forming a triangle',
      'Keep your back straight but relaxed',
      'Close your eyes and soften your gaze',
      'Breathe naturally and focus on the space between your hands',
      'Hold for 20-45 minutes during meditation'
    ],
    duration: '20-45 minutes',
    bestTime: 'During meditation practice',
    chakra: 'Crown Chakra (Sahasrara)',
    description: 'Dhyana Mudra is the "Mudra of Meditation." It represents the state of deep concentration and is commonly seen in images of the Buddha. It helps in achieving a meditative state.'
  },
];

export default function MudraMeditation() {
  const [selected, setSelected] = useState<Mudra | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(300);
  const [initialDuration, setInitialDuration] = useState(5);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, seconds]);

  const startTry = (mudra: Mudra) => {
    setSelected(mudra);
    setSeconds(initialDuration * 60);
    setIsRunning(false);
  };

  const startTimer = () => {
    if (seconds > 0) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(initialDuration * 60);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-title text-4xl md:text-5xl text-emerald-800 mb-2">Mudra Meditation</h1>
        <p className="text-slate-600 text-lg mb-8">
          Explore ancient hand gestures that balance energy and enhance your meditation practice. Each mudra has unique benefits for mind, body, and spirit.
        </p>

        {/* Mudra Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {MUDRAS.map((m) => (
            <div key={m.id} className="card-sacred p-6 hover:scale-105 transition-transform">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-emerald-800">{m.name}</h3>
                <p className="text-sm text-emerald-600 italic">{m.sanskritName}</p>
              </div>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">{m.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span>{m.duration}</span>
                </div>
                <div className="text-xs text-slate-500">
                  <span className="font-medium">Chakra: </span>{m.chakra}
                </div>
              </div>
              <button 
                onClick={() => startTry(m)} 
                className="btn-sacred w-full mt-4"
              >
                Try This Mudra
              </button>
            </div>
          ))}
        </div>

        {/* Practice Section */}
        {selected && (
          <div className="mt-12 glass-sacred p-8 rounded-3xl border border-emerald-200/50">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-semibold text-emerald-800">{selected.name}</h2>
                  <p className="text-emerald-600 italic text-lg">{selected.sanskritName}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-slate-400 hover:text-slate-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">{selected.description}</p>
            </div>

            {/* Benefits Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Benefits</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {selected.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Steps */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">How to Practice</h3>
              <ol className="space-y-3">
                {selected.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </span>
                    <span className="flex-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Timer Section */}
            <div className="mt-8 p-6 bg-white/50 rounded-2xl border border-emerald-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-emerald-800">Practice Timer</h3>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-600">Duration (min):</label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={initialDuration}
                    onChange={(e) => {
                      const val = parseInt(e.target.value || '5', 10);
                      setInitialDuration(val);
                      setSeconds(val * 60);
                    }}
                    className="input-field w-20"
                    disabled={isRunning}
                  />
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-emerald-600 mb-2">
                  {formatTime(seconds)}
                </div>
                {seconds === 0 && (
                  <p className="text-emerald-600 font-medium">Session Complete! 🙏</p>
                )}
              </div>

              <div className="flex items-center justify-center gap-4">
                {!isRunning && seconds > 0 && (
                  <button
                    onClick={startTimer}
                    className="btn-sacred flex items-center gap-2 px-6 py-3"
                  >
                    <Play className="w-5 h-5" />
                    Start
                  </button>
                )}
                {isRunning && (
                  <button
                    onClick={pauseTimer}
                    className="btn-spiritual flex items-center gap-2 px-6 py-3"
                  >
                    <Pause className="w-5 h-5" />
                    Pause
                  </button>
                )}
                <button
                  onClick={resetTimer}
                  className="btn-ethereal flex items-center gap-2 px-6 py-3"
                  disabled={isRunning}
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-emerald-200 grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-emerald-800">Best Time: </span>
                  <span className="text-slate-600">{selected.bestTime}</span>
                </div>
                <div>
                  <span className="font-semibold text-emerald-800">Recommended Duration: </span>
                  <span className="text-slate-600">{selected.duration}</span>
                </div>
                <div>
                  <span className="font-semibold text-emerald-800">Chakra: </span>
                  <span className="text-slate-600">{selected.chakra}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
