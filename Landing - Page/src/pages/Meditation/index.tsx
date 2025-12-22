import { Link } from 'react-router-dom';

export default function MeditationLanding() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
      <div className="absolute inset-0 quantum-field opacity-30" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-title text-4xl md:text-6xl font-semibold tracking-tight text-emerald-700">
          Meditation for Everyday Life
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Discover the importance and advantages of meditation and learn simple ways to adopt it
          into your daily routine. Explore Mudra-based practices and Guided meditations with timers.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Link to="mudra" className="card-sacred p-8 block">
            <h2 className="text-2xl font-semibold text-emerald-800">Mudra Meditation</h2>
            <p className="mt-2 text-slate-600">Hand gestures to balance energy and focus.</p>
            <div className="mt-6 inline-block btn-spiritual">Explore Mudras</div>
          </Link>

          <Link to="guided" className="card-sacred p-8 block">
            <h2 className="text-2xl font-semibold text-emerald-800">Guided Meditation</h2>
            <p className="mt-2 text-slate-600">Voice-guided and self-guided flows with timers.</p>
            <div className="mt-6 inline-block btn-spiritual">Start Guided</div>
          </Link>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass-sacred p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-emerald-800">Importance</h3>
            <p className="mt-2 text-slate-600">Meditation improves focus, emotional balance, sleep quality, and resilience.</p>
          </div>
          <div className="glass-sacred p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-emerald-800">Advantages</h3>
            <p className="mt-2 text-slate-600">Reduced stress and anxiety, improved clarity, compassion, and creativity.</p>
          </div>
          <div className="glass-sacred p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-emerald-800">Adopt Daily</h3>
            <ul className="mt-2 text-slate-600 list-disc list-inside space-y-1">
              <li>Start with 5 minutes after waking</li>
              <li>Use breath-counting during breaks</li>
              <li>Reflect with a 1-minute gratitude close</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}






