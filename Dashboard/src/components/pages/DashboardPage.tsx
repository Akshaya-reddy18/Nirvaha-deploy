export function DashboardPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/dbbg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-teal-900/40 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-white mb-2">Your Wellness Dashboard</h1>
              <p className="text-white/90">Track your spiritual journey and celebrate your progress</p>
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-2xl shadow-lg cursor-pointer border border-white/30">
              Export Report
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-800 mb-6">
              Welcome back to Nirvaha
            </h2>
            <p className="text-xl text-teal-700 leading-relaxed mb-4">
              Your space for calm, clarity, and conscious living.
            </p>
            <p className="text-base text-teal-600">
              Continue your journey towards mindfulness and inner peace.
            </p>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
