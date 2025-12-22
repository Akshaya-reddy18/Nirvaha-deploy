import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF7E3 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-title text-3xl sm:text-4xl text-[#0A0F0F]">Contact</h2>
          <p className="text-[#4a4a4a] mt-2">We are here to help you on your journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Details */}
          <div className="rounded-2xl bg-white/90 border border-yellow-200/60 shadow p-6 sm:p-8">
            <div className="space-y-4 text-[#333]">
              <div>
                <div className="text-sm uppercase tracking-wide text-[#7a7a7a]">Email</div>
                <div className="text-base sm:text-lg">nirvaha6@gmail.com</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-[#7a7a7a]">Phone</div>
                <div className="text-base sm:text-lg">7780754541</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-[#7a7a7a]">Address</div>
                <div className="text-base sm:text-lg">Bengaluru, IN</div>
              </div>
              <div className="flex gap-3 pt-2">
                <a className="w-10 h-10 rounded-xl bg-white/80 border border-yellow-200/60 flex items-center justify-center hover:shadow" href="#" aria-label="Facebook">f</a>
                <a className="w-10 h-10 rounded-xl bg-white/80 border border-yellow-200/60 flex items-center justify-center hover:shadow" href="#" aria-label="Twitter">t</a>
                <a className="w-10 h-10 rounded-xl bg-white/80 border border-yellow-200/60 flex items-center justify-center hover:shadow" href="#" aria-label="Instagram">in</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="rounded-2xl bg-white/90 border border-yellow-200/60 shadow p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-sm text-[#555] mb-1">Name</label>
              <input className="w-full rounded-xl border border-yellow-200/60 px-4 py-3 bg-white/95 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-[#555] mb-1">Email</label>
              <input type="email" className="w-full rounded-xl border border-yellow-200/60 px-4 py-3 bg-white/95 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-[#555] mb-1">Message</label>
              <textarea rows={5} className="w-full rounded-xl border border-yellow-200/60 px-4 py-3 bg-white/95 focus:outline-none focus:ring-2 focus:ring-yellow-300" placeholder="How can we help?" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-3 rounded-full text-[#0A0F0F] bg-gradient-to-r from-white to-white border border-yellow-300/60 hover:shadow-[0_0_24px_rgba(255,210,96,0.35)] transition-all">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
