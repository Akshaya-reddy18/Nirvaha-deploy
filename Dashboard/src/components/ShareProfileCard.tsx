import { motion } from "motion/react";
import { X, Download, Share2, Award, Clock, BarChart3, Brain } from "lucide-react";
import { useRef } from "react";
import html2canvas from "html2canvas";

interface ShareProfileCardProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userTitle: string;
  userEmail: string;
  userLocation: string;
  stats: {
    sessions: number;
    streak: number;
    totalTime: string;
    wellnessScore: number;
  };
}

export function ShareProfileCard({
  isOpen,
  onClose,
  userName,
  userTitle,
  userEmail,
  userLocation,
  stats,
}: ShareProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadCard = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: null,
          scale: 2,
        });
        const link = document.createElement("a");
        link.download = `${userName.replace(/\s+/g, "-")}-nirvaha-profile.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };

  const shareCard = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: null,
          scale: 2,
        });
        canvas.toBlob(async (blob) => {
          if (blob && navigator.share) {
            const file = new File([blob], `${userName}-nirvaha-profile.png`, {
              type: "image/png",
            });
            await navigator.share({
              files: [file],
              title: `${userName}'s Nirvaha Profile`,
              text: `Check out my wellness journey on Nirvaha!`,
            });
          } else {
            // Fallback to download if share API not available
            downloadCard();
          }
        });
      } catch (error) {
        console.error("Error sharing:", error);
        downloadCard();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-teal-800 hover:bg-emerald-50 transition-colors"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCard}
            className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg flex items-center gap-2 text-teal-800 hover:bg-white transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shareCard}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </motion.button>
        </div>

        {/* Profile Card */}
        <div
          ref={cardRef}
          className="bg-gradient-to-br from-white via-emerald-100 to-teal-200 rounded-[40px] p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl" />
            {/* Decorative shapes (no symbols) */}
            <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-emerald-400/10" />
            <div className="absolute bottom-12 right-12 w-16 h-16 rounded-2xl bg-teal-400/10 rotate-12" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-xl">
                  <span className="text-4xl">🧘</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl text-emerald-800 font-bold">NIRVAHA</h2>
                  </div>
                  <p className="text-teal-700 text-sm">Harmony of Mind</p>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 mb-6 border border-emerald-200/50 shadow-lg">
              <h3 className="text-3xl text-emerald-800 mb-2 font-bold">{userName}</h3>
              <p className="text-teal-700 text-lg mb-4">{userTitle}</p>
              <div className="flex flex-wrap gap-4 text-sm text-teal-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  {userLocation}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  Member since 2024
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-emerald-200/50 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl text-emerald-800 font-bold">{stats.streak}</div>
                    <div className="text-teal-600 text-sm">Day Streak</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-emerald-200/50 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl text-emerald-800 font-bold">{stats.sessions}</div>
                    <div className="text-teal-600 text-sm">Sessions</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-emerald-200/50 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl text-emerald-800 font-bold">{stats.totalTime}</div>
                    <div className="text-teal-600 text-sm">Total Time</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-lime-400/40 to-emerald-400/40 backdrop-blur-md rounded-2xl p-5 border border-emerald-300/50 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl text-emerald-900 font-bold">{stats.wellnessScore}</div>
                    <div className="text-emerald-700 text-sm">Wellness Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Quote */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-emerald-200/50 text-center shadow-md">
              <p className="text-teal-800 italic text-sm">
                "The mind is everything. What you think you become."
              </p>
              <p className="text-teal-600 text-xs mt-2">- Buddha</p>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-6">
              <p className="text-teal-600 text-xs">
                Join me on my wellness journey at nirvaha.org
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
