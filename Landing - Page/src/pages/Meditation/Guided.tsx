import { useMemo, useRef, useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, Heart, Brain, Wind, Sun } from 'lucide-react';

type Guided = {
  id: string;
  name: string;
  icon: any;
  kind: 'suryanamaskar' | 'focus' | 'voice' | 'breath';
  description: string;
  detailedDescription: string;
  instructions: string[];
  benefits: string[];
  duration: string;
};

const OPTIONS: Guided[] = [
  {
    id: 'sun',
    name: 'Suryanamaskar',
    icon: Sun,
    kind: 'suryanamaskar',
    description: 'Mindful sun-salutation flow.',
    detailedDescription: 'A graceful sequence of 12 yoga postures synchronized with breath, honoring the sun and awakening your body\'s energy.',
    instructions: [
      'Stand at the front of your mat in Tadasana (Mountain Pose)',
      'Inhale and raise your arms overhead (Pranamasana)',
      'Exhale and fold forward (Uttanasana)',
      'Inhale and step back to plank, then lower to Chaturanga',
      'Exhale to Upward Dog, then push back to Downward Dog',
      'Inhale and step forward, exhale to forward fold',
      'Inhale to rise, exhale to return to Tadasana',
      'Repeat the sequence slowly, one round per minute'
    ],
    benefits: [
      'Improves flexibility and strength',
      'Enhances cardiovascular health',
      'Balances the nervous system',
      'Increases energy and vitality',
      'Promotes mental clarity'
    ],
    duration: '10-20 minutes'
  },
  {
    id: 'focus',
    name: 'Focus Training',
    icon: Brain,
    kind: 'focus',
    description: 'Single-point awareness practice.',
    detailedDescription: 'Develop laser-sharp concentration by anchoring your attention on a single point, training your mind to stay present.',
    instructions: [
      'Find a comfortable seated position with your back straight',
      'Choose your anchor: breath, a candle flame, or a point on the wall',
      'Gently rest your attention on your chosen anchor',
      'When you notice your mind has wandered, acknowledge it without judgment',
      'Return your attention to the anchor with kindness',
      'Practice this cycle of attention, distraction, and return',
      'Start with 5 minutes and gradually increase',
      'Be patient and compassionate with yourself'
    ],
    benefits: [
      'Improves concentration and focus',
      'Reduces mental distractions',
      'Enhances cognitive performance',
      'Develops mindfulness skills',
      'Calms the restless mind'
    ],
    duration: '5-30 minutes'
  },
  {
    id: 'voice',
    name: 'Voice-Guided',
    icon: Heart,
    kind: 'voice',
    description: 'Gentle spoken guidance.',
    detailedDescription: 'Let a calming voice guide you through a journey of relaxation, body awareness, and inner peace.',
    instructions: [
      'Find a quiet, comfortable space where you won\'t be disturbed',
      'Lie down or sit in a comfortable position',
      'Close your eyes and take three deep breaths',
      'Listen to the guided instructions with an open mind',
      'Follow the voice as it guides you through body relaxation',
      'Allow yourself to fully immerse in the experience',
      'If your mind wanders, gently return to the voice',
      'At the end, take your time to return to awareness'
    ],
    benefits: [
      'Deep relaxation and stress relief',
      'Improved sleep quality',
      'Enhanced body awareness',
      'Emotional balance',
      'Reduced anxiety and tension'
    ],
    duration: '10-30 minutes'
  },
  {
    id: 'box',
    name: 'Breath Box',
    icon: Wind,
    kind: 'breath',
    description: 'In 4 • Hold 4 • Out 4 • Hold 4',
    detailedDescription: 'A powerful breathing technique that creates a square pattern, stabilizing your nervous system and bringing deep calm.',
    instructions: [
      'Sit comfortably with your back straight',
      'Close your eyes and relax your shoulders',
      'Inhale slowly through your nose for 4 counts',
      'Hold your breath for 4 counts',
      'Exhale slowly through your nose for 4 counts',
      'Hold the empty breath for 4 counts',
      'Repeat this cycle: Inhale (4) - Hold (4) - Exhale (4) - Hold (4)',
      'Continue for 5-10 minutes, maintaining the rhythm',
      'If 4 counts feels too long, start with 3 counts'
    ],
    benefits: [
      'Calms the nervous system',
      'Reduces stress and anxiety',
      'Improves focus and clarity',
      'Balances energy levels',
      'Enhances emotional regulation'
    ],
    duration: '5-15 minutes'
  },
];

export default function GuidedMeditation() {
  const [active, setActive] = useState<Guided | null>(null);
  const [duration, setDuration] = useState(10);
  const [seconds, setSeconds] = useState(10 * 60);
  const [isRunning, setIsRunning] = useState(false);
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

  const start = (opt: Guided) => {
    setActive(opt);
    setSeconds(duration * 60);
    setIsRunning(false);
  };

  const startTimer = () => {
    if (seconds > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(duration * 60);
  };

  const pretty = useMemo(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  }, [seconds]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-title text-4xl md:text-5xl text-emerald-800 mb-2">Guided Meditation</h1>
        <p className="text-slate-600 text-lg mb-8">
          Choose from various guided meditation practices. Each technique offers unique benefits for your mental, emotional, and spiritual well-being.
        </p>

        {/* Duration Selector */}
        <div className="mb-8 p-6 bg-white/50 rounded-2xl border border-emerald-200">
          <div className="flex items-center gap-4 flex-wrap">
            <label className="text-lg font-semibold text-emerald-800">Set Duration:</label>
            <input
              type="number"
              min={3}
              max={90}
              value={duration}
              onChange={(e) => {
                const val = parseInt(e.target.value || '10', 10);
                setDuration(val);
                if (!isRunning) {
                  setSeconds(val * 60);
                }
              }}
              className="input-field w-24"
              disabled={isRunning}
            />
            <span className="text-slate-600">minutes</span>
            <div className="ml-auto flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full">
              <Clock className="w-5 h-5" />
              <span className="text-2xl font-bold">{pretty}</span>
            </div>
            {isRunning && (
              <button className="btn-ethereal" onClick={stopTimer}>
                <Pause className="w-5 h-5" />
                Stop
              </button>
            )}
          </div>
        </div>

        {/* Meditation Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPTIONS.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.id}
                className={`card-sacred p-6 transition-all ${
                  active?.id === opt.id ? 'ring-2 ring-emerald-500 shadow-lg' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-800">{opt.name}</h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm">{opt.description}</p>
                <div className="text-xs text-slate-500 mb-4">
                  <span className="font-medium">Duration: </span>{opt.duration}
                </div>
                <button className="btn-sacred w-full mt-4" onClick={() => start(opt)}>
                  Start Practice
                </button>
              </div>
            );
          })}
        </div>

        {/* Active Practice Section */}
        {active && (
          <div className="mt-12 glass-sacred p-8 rounded-3xl border border-emerald-200/50">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                {(() => {
                  const Icon = active.icon;
                  return (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  );
                })()}
                <div>
                  <h2 className="text-3xl font-semibold text-emerald-800">Now Practicing: {active.name}</h2>
                  <p className="text-slate-600 mt-1">{active.detailedDescription}</p>
                </div>
              </div>
              <button
                onClick={() => setActive(null)}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Benefits</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {active.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">Practice Instructions</h3>
              <ol className="space-y-3">
                {active.instructions.map((instruction, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </span>
                    <span className="flex-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Timer Controls */}
            <div className="mt-8 p-6 bg-white/50 rounded-2xl border border-emerald-200">
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-emerald-600 mb-2">{pretty}</div>
                {seconds === 0 && (
                  <p className="text-emerald-600 font-medium text-lg">Practice Complete! 🙏</p>
                )}
              </div>
              <div className="flex items-center justify-center gap-4">
                {!isRunning && seconds > 0 && (
                  <button onClick={startTimer} className="btn-sacred flex items-center gap-2 px-6 py-3">
                    <Play className="w-5 h-5" />
                    Start
                  </button>
                )}
                {isRunning && (
                  <button onClick={stopTimer} className="btn-spiritual flex items-center gap-2 px-6 py-3">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
