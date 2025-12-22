import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Msg = { id: string; who: string; text: string };

export default function DiscussionRoom() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const who = name.trim() ? name.trim() : 'Anonymous';
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), who, text: input.trim() }]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
        </div>

        <h1 className="font-title text-4xl text-emerald-800">Discussion Room</h1>
        <p className="mt-3 text-slate-600">
          A public, open chat space for community discussions. No images or files are allowed—only text.
        </p>

        <button className="mt-8 btn-sacred rounded-full" onClick={() => setOpen(true)}>Open Chat</button>

        {open && (
          <div className="fixed inset-0 bg-black/40 grid place-items-center z-50">
            <div className="bg-white rounded-3xl w-full max-w-lg p-6 shadow-2xl">
              {!joined ? (
                <div>
                  <h2 className="text-xl font-semibold text-emerald-800">Join the Discussion</h2>
                  <p className="text-sm text-slate-600 mt-1">Name is optional. You’ll appear as Anonymous if left blank.</p>
                  <input className="input-field mt-4 w-full" placeholder="Enter name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
                  <div className="mt-4 flex items-center justify-end gap-3">
                    <button className="btn-ethereal" onClick={() => setOpen(false)}>Cancel</button>
                    <button className="btn-sacred" onClick={() => setJoined(true)}>Enter Room</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-[70vh]">
                  <div className="flex-1 overflow-y-auto space-y-3 p-2">
                    {messages.map((m) => (
                      <div key={m.id} className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                        <div className="text-xs text-emerald-700 font-medium">{m.who}</div>
                        <div className="text-slate-800">{m.text}</div>
                      </div>
                    ))}
                    {messages.length === 0 && (
                      <div className="text-center text-slate-500 mt-10">No messages yet. Start the conversation!</div>
                    )}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <input
                      className="flex-1 input-field"
                      placeholder="Type message (text only)"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && send()}
                    />
                    <button className="btn-spiritual" onClick={send}>Send</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


