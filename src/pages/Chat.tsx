import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Hash, Users, Sparkles, Smile, MoreHorizontal, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  user: string;
  content: string;
  time: string;
  isMe?: boolean;
}

const ROOMS = [
  { id: 'general', name: 'General Chat', description: 'Discuss anything culinary here.' },
  { id: 'baking', name: 'Baking & Pastry', description: 'Sourdough, cakes, and all things oven-baked.' },
  { id: 'vegan', name: 'Vegan Delight', description: 'Plant-based techniques and recipes.' },
  { id: 'quick-meals', name: 'Quick 30-Min Meals', description: 'Speedy recipes for busy chefs.' },
];

export const Chat = () => {
  const [activeRoom, setActiveRoom] = useState(ROOMS[0]);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', user: 'Julian Vane', content: 'Has anyone tried the new white miso from Kyoto? It’s incredibly sweet.', time: '10:45 AM' },
    { id: '2', user: 'Chef Elena', content: 'I used it for a glaze on sea bass last night. Perfect balance!', time: '10:48 AM' },
    { id: '3', user: 'Marco Rossi', content: 'I prefer the red miso for heavier meat dishes, but for fish, Kyoto white is king.', time: '10:55 AM' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: 'You',
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        user: activeRoom.id === 'baking' ? 'PastryChef' : 'Chef Elena',
        content: activeRoom.id === 'baking' ? 'That sounds like a great addition to the dough!' : 'Great point!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, response]);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 h-[80vh] flex flex-col">
      <div className="flex flex-col md:flex-row h-full overflow-hidden bg-white rounded-[2.5rem] border border-[#e9e4d9] shadow-inner">
        {/* Sidebar */}
        <div className="w-full md:w-72 bg-[#f5f2ed] border-r border-[#e9e4d9] flex flex-col h-full overflow-hidden">
          <div className="p-6 border-b border-[#e9e4d9]">
            <h2 className="text-xl font-serif font-bold mb-1">Community</h2>
            <p className="text-xs text-[#7c7a74] uppercase tracking-widest font-bold">Live Rooms</p>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-2">
            {ROOMS.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room)}
                className={cn(
                  "w-full text-left px-4 py-4 rounded-2xl transition-all flex items-center space-x-3 group",
                  activeRoom.id === room.id 
                    ? "bg-white shadow-md shadow-[#5A5A40]/5" 
                    : "hover:bg-[#e9e4d9]"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                  activeRoom.id === room.id ? "bg-[#5A5A40] text-white" : "bg-white text-gray-400 group-hover:text-[#5A5A40]"
                )}>
                  <Hash className="w-5 h-5" />
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  activeRoom.id === room.id ? "text-[#2c2b29]" : "text-[#7c7a74]"
                )}>
                  {room.name}
                </span>
              </button>
            ))}
          </div>
          <div className="p-6 bg-white/50 border-t border-[#e9e4d9]">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-[#5A5A40] uppercase tracking-widest">142 online</span>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow flex flex-col h-full relative">
          {/* Top Bar */}
          <div className="px-8 py-5 border-b border-[#e9e4d9] flex justify-between items-center bg-white">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#f5f2ed] rounded-full flex items-center justify-center text-[#5A5A40]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">{activeRoom.name}</h3>
                <p className="text-xs text-[#7c7a74] font-light">{activeRoom.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#f5f2ed] flex items-center justify-center text-[10px] font-bold text-[#5A5A40]">
                  +42
                </div>
              </div>
              <button className="text-gray-400 hover:text-[#2c2b29] transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-grow p-8 overflow-y-auto space-y-8 bg-[#fdfaf6]/30 scroll-smooth"
          >
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "flex group",
                    msg.isMe ? "justify-end" : "justify-start"
                  )}
                >
                  <div className={cn(
                    "flex max-w-[80%] space-x-3",
                    msg.isMe ? "flex-row-reverse space-x-reverse" : "flex-row"
                  )}>
                    {!msg.isMe && (
                      <div className="w-8 h-8 rounded-full bg-[#e9e4d9] flex-shrink-0 flex items-center justify-center">
                        <User className="w-4 h-4 text-[#5A5A40]" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <div className={cn(
                        "flex items-center space-x-2 text-[10px] uppercase font-bold tracking-widest",
                        msg.isMe ? "flex-row-reverse space-x-reverse" : "flex-row"
                      )}>
                        <span className="text-[#2c2b29]">{msg.user}</span>
                        <span className="text-gray-400 font-medium">{msg.time}</span>
                      </div>
                      <div className={cn(
                        "px-6 py-3 rounded-2xl text-sm leading-relaxed",
                        msg.isMe 
                          ? "bg-[#5A5A40] text-white rounded-tr-none" 
                          : "bg-white border border-[#e9e4d9] text-[#2c2b29] rounded-tl-none"
                      )}>
                        {msg.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-[#e9e4d9]">
            <form onSubmit={handleSendMessage} className="relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={`Message #${activeRoom.id}...`} 
                className="w-full pl-12 pr-24 py-4 bg-[#f5f2ed] rounded-2xl outline-none focus:ring-2 focus:ring-[#5A5A40] transition-all text-sm"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Smile className="w-5 h-5 hover:text-[#5A5A40] cursor-pointer transition-colors" />
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-[#151619] disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl hover:bg-[#2c2b29] transition-all transform hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
