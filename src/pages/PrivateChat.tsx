import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ArrowLeft, MoreHorizontal, ShieldCheck, Phone, Video, Smile } from 'lucide-react';
import { CHEFS } from '../constants';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  time: string;
  isMe: boolean;
}

export const PrivateChat = () => {
  const { chefId } = useParams();
  const chef = CHEFS.find((c) => c.id === chefId);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: chefId || 'chef',
      senderName: chef?.name || 'Chef',
      content: "Hello! Thanks for reaching out. How can I help you with your culinary journey today?",
      time: '09:30 AM',
      isMe: false
    }
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
      senderId: 'me',
      senderName: 'You',
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate chef response
    setTimeout(() => {
      const responses = [
        "That's a great question! Usually, I recommend chilling the dough for at least 2 hours.",
        "The secret is in the temperature of the pan. Make sure it's smoking hot before the oil goes in.",
        "Exactly! You have a great eye for detail.",
        "I'm actually hosting a live session on that next week. Hope to see you there!"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        senderId: chefId || 'chef',
        senderName: chef?.name || 'Chef',
        content: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: false
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  if (!chef) return <div className="p-24 text-center">Chef not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[85vh] flex flex-col">
      <div className="bg-white rounded-[2.5rem] border border-[#e9e4d9] flex-grow flex flex-col overflow-hidden shadow-xl shadow-[#5A5A40]/5">
        {/* Header */}
        <div className="px-8 py-5 border-b border-[#e9e4d9] flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/chefs" className="p-2 hover:bg-[#f5f2ed] rounded-full transition-colors md:hidden">
              <ArrowLeft className="w-5 h-5 text-[#7c7a74]" />
            </Link>
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#f5f2ed]">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg leading-tight">{chef.name}</h2>
              <p className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#5A5A40] opacity-70">Professional Chef • Online</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-3 text-[#7c7a74] hover:bg-[#f5f2ed] hover:text-[#5A5A40] rounded-xl transition-all">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-3 text-[#7c7a74] hover:bg-[#f5f2ed] hover:text-[#5A5A40] rounded-xl transition-all">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-3 text-[#7c7a74] hover:bg-[#f5f2ed] rounded-xl transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Safety Banner */}
        <div className="bg-[#fdfaf6] px-8 py-2 border-b border-[#e9e4d9] flex items-center justify-center space-x-2">
          <ShieldCheck className="w-3 h-3 text-[#5A5A40]" />
          <span className="text-[10px] text-[#7c7a74] font-medium uppercase tracking-widest">End-to-end encrypted conversation</span>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-8 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"
        >
          <div className="text-center mb-8">
            <span className="bg-[#e9e4d9]/50 text-[#7c7a74] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
              Today
            </span>
          </div>

          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "flex",
                  msg.isMe ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn(
                  "max-w-[75%] space-y-1",
                  msg.isMe ? "items-end flex flex-col" : "items-start flex flex-col"
                )}>
                  <div className={cn(
                    "px-6 py-4 rounded-3xl text-sm leading-relaxed",
                    msg.isMe 
                      ? "bg-[#151619] text-white rounded-tr-none shadow-lg shadow-black/5" 
                      : "bg-white border border-[#e9e4d9] text-[#2c2b29] rounded-tl-none shadow-sm"
                  )}>
                    {msg.content}
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400 px-2">{msg.time}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input */}
        <div className="p-6 bg-white border-t border-[#e9e4d9]">
          <form onSubmit={handleSendMessage} className="relative flex items-center space-x-4">
            <button type="button" className="text-gray-400 hover:text-[#5A5A40] transition-colors">
              <Smile className="w-6 h-6" />
            </button>
            <div className="relative flex-grow">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Chef any question..." 
                className="w-full pl-6 pr-16 py-4 bg-[#f5f2ed] rounded-2xl outline-none focus:ring-2 focus:ring-[#5A5A40] transition-all text-sm"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5A5A40] disabled:opacity-50 text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-[#6b6b4d] transition-all active:scale-95"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
