import { useMemo, useRef, useState } from 'react';

type Track = { id: string; title: string; theme: 'rain' | 'forest' | 'ocean' | 'mantra' | 'frequency'; url: string };

const LIBRARY: Track[] = [
  { id: '432', title: '432Hz Deep Calm', theme: 'frequency', url: '' },
  { id: '528', title: '528Hz Love Tone', theme: 'frequency', url: '' },
  { id: 'om', title: 'Om Chant (Mantra)', theme: 'mantra', url: '' },
  { id: 'rain', title: 'Gentle Rain', theme: 'rain', url: '' },
  { id: 'ocean', title: 'Ocean Waves', theme: 'ocean', url: '' },
  { id: 'forest', title: 'Forest Night', theme: 'forest', url: '' },
];

export default function SoundHealing() {
  const [filter, setFilter] = useState<'all' | Track['theme']>('all');
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [loop, setLoop] = useState(false);

  const filtered = useMemo(() => (filter === 'all' ? LIBRARY : LIBRARY.filter((t) => t.theme === filter)), [filter]);
  const current = playlist[currentIndex];

  const addToQueue = (t: Track) => setPlaylist((pl) => [...pl, t]);
  const removeFromQueue = (id: string) => setPlaylist((pl) => pl.filter((t) => t.id !== id));
  const playAt = (i: number) => {
    setCurrentIndex(i);
    setTimeout(() => audioRef.current?.play(), 0);
  };

  const next = () => setCurrentIndex((i) => (i + 1 < playlist.length ? i + 1 : (loop ? 0 : i)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="font-title text-4xl text-emerald-800">Sound Healing</h1>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Immerse yourself in theme-based sounds, sacred mantras, and healing frequencies like 432Hz and 528Hz.
          Build a playlist, loop tracks, and create your calming space.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {['all', 'rain', 'forest', 'ocean', 'mantra', 'frequency'].map((t) => (
            <button key={t} className={`px-4 py-2 rounded-full border ${filter === t ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white border-emerald-200'}`} onClick={() => setFilter(t as any)}>
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <div key={t.id} className="card-sacred p-6">
              <h3 className="text-lg font-semibold text-emerald-800">{t.title}</h3>
              <p className="text-sm text-slate-600 capitalize">{t.theme}</p>
              <div className="mt-4 flex items-center gap-3">
                <button className="btn-spiritual" onClick={() => addToQueue(t)}>Queue</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="glass-sacred p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-emerald-800">Player</h2>
            <audio ref={audioRef} src={current?.url} controls loop={loop} onEnded={next} className="mt-4 w-full" />
            <div className="mt-3 flex items-center gap-3">
              <button className="btn-ethereal" onClick={() => setLoop((l) => !l)}>{loop ? 'Loop: On' : 'Loop: Off'}</button>
              <button className="btn-spiritual" onClick={next}>Next</button>
            </div>
          </div>

          <div className="glass-sacred p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-emerald-800">Playlist</h2>
            {playlist.length === 0 && <p className="text-slate-600 mt-2">Your playlist is empty. Add tracks to begin.</p>}
            <ul className="mt-4 space-y-2">
              {playlist.map((t, i) => (
                <li key={t.id} className={`flex items-center justify-between rounded-xl border p-3 ${i === currentIndex ? 'border-emerald-400 bg-emerald-50' : 'border-emerald-100 bg-white'}`}>
                  <div>
                    <div className="font-medium text-emerald-800">{t.title}</div>
                    <div className="text-xs text-slate-500 capitalize">{t.theme}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="btn-ethereal" onClick={() => playAt(i)}>Play</button>
                    <button className="btn-ethereal" onClick={() => removeFromQueue(t.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}






