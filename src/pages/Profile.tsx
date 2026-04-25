import React from 'react';
import { motion } from 'motion/react';
import { User, Settings, Bookmark, History, CreditCard, ChevronRight, LogOut, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const stats = [
    { label: "Saved Recipes", value: "12", icon: Bookmark },
    { label: "Chef Follows", value: "4", icon: User },
    { label: "Recent Comments", value: "8", icon: History },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Nav */}
        <aside className="lg:col-span-1 space-y-2">
          <div className="p-6 bg-white rounded-3xl border border-[#e9e4d9] mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#f5f2ed] rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-sm">
                <User className="w-12 h-12 text-[#5A5A40]" />
              </div>
              <h2 className="text-xl font-serif font-bold">John Doe</h2>
              <p className="text-sm text-[#7c7a74] mb-4">Member since April 2026</p>
              <div className="bg-[#5A5A40]/10 text-[#5A5A40] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Basic Plan
              </div>
            </div>
          </div>

          {[
            { label: "Account Settings", icon: Settings },
            { label: "Subscription", icon: CreditCard, path: "/subscription" },
            { label: "Notifications", icon: Bell },
            { label: "Log Out", icon: LogOut, color: "text-red-500" },
          ].map((item, idx) => (
            <Link 
              key={idx} 
              to={item.path || "#"} 
              className={cn(
                "flex items-center justify-between p-4 rounded-2xl hover:bg-[#f5f2ed] transition-colors group",
                item.color || "text-[#2c2b29]"
              )}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5 opacity-60" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}

          {/* Owner Only Section */}
          <div className="pt-8 mt-8 border-t border-[#e9e4d9]">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#5A5A40] mb-4 px-4">Owner Control</h4>
            <Link 
              to="/admin" 
              className="flex items-center justify-between p-4 rounded-2xl bg-[#151619] text-white hover:bg-[#2c2b29] transition-all group"
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 opacity-60" />
                <span className="text-sm font-medium">Admin Dashboard</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#e9e4d9] text-center"
              >
                <div className="w-12 h-12 bg-[#fdfaf6] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#e9e4d9]">
                  <stat.icon className="w-6 h-6 text-[#5A5A40]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#2c2b29] mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#7c7a74]">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Saved Recipes Preview */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif font-medium">Recently Saved</h3>
              <Link to="/recipes" className="text-sm text-[#5A5A40] hover:underline font-medium">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#7c7a74] font-light italic">
              <div className="p-12 border-2 border-dashed border-[#e9e4d9] rounded-[2rem] flex flex-col items-center justify-center text-center">
                <p>You haven't saved any recipes yet.</p>
                <Link to="/recipes" className="mt-4 text-[#5A5A40] font-medium not-italic">Start Exploring</Link>
              </div>
            </div>
          </section>

          {/* Activity */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif font-medium">Activity Feed</h3>
              <div className="flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                <span>1 New Message</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { type: "message", text: "Chef Julian Vane sent you a private message", time: "Just now", highlight: true, path: "/chat/private/c1" },
                { type: "follow", text: "You followed Chef Marco Rossi", time: "2 hours ago" },
                { type: "save", text: "You saved 'Slow-Roasted Herb Lamb'", time: "Yesterday" },
              ].map((activity, i) => (
                <div key={i} className={cn(
                  "flex items-start justify-between p-4 rounded-2xl border transition-all",
                  activity.highlight ? "bg-white border-[#5A5A40] shadow-md scale-[1.02]" : "bg-white border-[#e9e4d9]"
                )}>
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                      activity.highlight ? "bg-[#5A5A40]" : "bg-gray-300"
                    )} />
                    <div>
                      <p className={cn("text-sm font-medium", activity.highlight ? "text-[#2c2b29]" : "text-[#7c7a74]")}>{activity.text}</p>
                      <p className="text-xs text-[#7c7a74] font-light">{activity.time}</p>
                    </div>
                  </div>
                  {activity.path && (
                    <Link to={activity.path} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5A5A40] hover:underline underline-offset-4">
                      Open
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// Helper for cn (re-defining since imports in create_file can be tricky if not careful)
import { cn } from '../lib/utils';
