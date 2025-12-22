import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Sparkles, Moon, Sun, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';

const greeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
};

const OverviewPage = () => {
  const { user } = useAuth();
  const userName = user?.name?.split(' ')[0] || 'there';
  
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-[#00FFC6]/10 to-[#1ED5A6]/10 rounded-2xl p-6 border border-[#1ED5A6]/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {greeting()}, {userName} <span className="wave">👋</span>
            </h1>
            <p className="text-[#A1A1AA] mt-1">Here's what's happening with your wellness journey today</p>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-[#1A1F1F] px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#00FFC6] animate-pulse"></div>
            <span className="text-sm text-[#A1A1AA]">Active now</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Daily Streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-[#111717] border-[#1A1F1F] h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-[#A1A1AA]">Daily Streak</CardTitle>
                <Sparkles className="h-4 w-4 text-[#A6FF00]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">5 days</div>
              <p className="text-xs text-[#A1A1AA] mt-1">Keep it up! 2 more days to unlock a new badge.</p>
              <Progress value={70} className="h-2 mt-3 bg-[#1A1F1F]" indicatorClassName="bg-gradient-to-r from-[#00FFC6] to-[#1ED5A6]" />
            </CardContent>
          </Card>
        </motion.div>

        {/* Sleep Quality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-[#111717] border-[#1A1F1F] h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-[#A1A1AA]">Sleep Quality</CardTitle>
                <Moon className="h-4 w-4 text-[#7C3AED]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">7.2/10</div>
              <p className="text-xs text-[#A1A1AA] mt-1">+0.5 from yesterday</p>
              <div className="flex gap-1 mt-3">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div key={day} className="h-8 w-full bg-gradient-to-t from-[#7C3AED] to-[#7C3AED]/30 rounded-sm"></div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Daily Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-[#111717] border-[#1A1F1F] h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-[#A1A1AA]">Daily Goal</CardTitle>
                <Sun className="h-4 w-4 text-[#F59E0B]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2/3 Complete</div>
              <p className="text-xs text-[#A1A1AA] mt-1">1 more activity to reach your goal</p>
              <div className="flex gap-2 mt-3">
                <div className="h-2 flex-1 bg-[#1A1F1F] rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-[#F59E0B] to-[#FCD34D]"></div>
                </div>
                <span className="text-xs text-[#A1A1AA]">67%</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Next Session */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-[#111717] border-[#1A1F1F] h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-[#A1A1AA]">Next Session</CardTitle>
                <Clock className="h-4 w-4 text-[#00FFC6]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">Evening Meditation</div>
              <p className="text-xs text-[#A1A1AA] mt-1">In 3 hours 45 minutes</p>
              <Button className="mt-3 w-full bg-gradient-to-r from-[#00FFC6] to-[#1ED5A6] hover:opacity-90 text-[#0A0F0F] font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Start Now
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Start Meditation', icon: '🧘', color: 'from-[#8B5CF6] to-[#EC4899]' },
            { name: 'Talk to ZenBot', icon: '🤖', color: 'from-[#00FFC6] to-[#1ED5A6]' },
            { name: 'Join Community', icon: '👥', color: 'from-[#3B82F6] to-[#8B5CF6]' },
            { name: 'Track Mood', icon: '😊', color: 'from-[#F59E0B] to-[#FCD34D]' },
          ].map((action, index) => (
            <motion.button
              key={action.name}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-r ${action.color} rounded-xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-3xl mb-2">{action.icon}</div>
              <div className="font-medium">{action.name}</div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          <button className="text-sm text-[#00FFC6] hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { id: 1, type: 'meditation', title: 'Morning Calm', duration: '10 min', time: '2 hours ago', icon: '🧘' },
            { id: 2, type: 'journal', title: 'Daily Reflection', duration: '5 min', time: '5 hours ago', icon: '📝' },
            { id: 3, type: 'breathwork', title: 'Energy Boost', duration: '3 min', time: '1 day ago', icon: '💨' },
          ].map((activity) => (
            <motion.div
              key={activity.id}
              whileHover={{ x: 4 }}
              className="flex items-center p-4 bg-[#111717] rounded-xl border border-[#1A1F1F]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1A1F1F] text-2xl mr-4">
                {activity.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{activity.title}</h3>
                <p className="text-sm text-[#A1A1AA]">{activity.duration} • {activity.time}</p>
              </div>
              <button className="text-[#00FFC6] hover:text-[#1ED5A6] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewPage;
