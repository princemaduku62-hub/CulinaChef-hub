import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Phone, Smartphone, CreditCard, ShieldCheck } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '../constants';
import { cn } from '../lib/utils';

export const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    if (planId !== 'free') {
      setShowPaymentModal(true);
    }
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-[#151619] py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#5A5A40] mb-4 block"
          >
            Membership
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8"
          >
            Elevate Your <span className="italic text-[#7c7a74]">Culinary</span> Craft
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light max-w-2xl mx-auto"
          >
            Choose a plan that fits your ambition. From home cooks to professional chefs, there's a space for you here.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUBSCRIPTION_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className={cn(
                "rounded-[2.5rem] p-10 flex flex-col h-full transition-all",
                plan.recommended 
                  ? "bg-white border-2 border-[#5A5A40] shadow-2xl scale-105" 
                  : "bg-white/80 backdrop-blur border border-[#e9e4d9]"
              )}
            >
              <div className="mb-8">
                {plan.recommended && (
                  <span className="bg-[#5A5A40] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4 inline-block">
                    Recommended
                  </span>
                )}
                <h3 className="text-3xl font-serif font-medium mb-2">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-serif font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-xs uppercase tracking-widest">/ User</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#f5f2ed] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#5A5A40]" />
                    </div>
                    <span className="text-[#7c7a74] font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSelectPlan(plan.id)}
                className={cn(
                  "w-full py-4 rounded-full font-bold transition-all",
                  plan.recommended
                    ? "bg-[#151619] text-white hover:bg-[#2c2b29]"
                    : "bg-[#f5f2ed] text-[#151619] hover:bg-[#e9e4d9]"
                )}
              >
                {plan.id === 'free' ? 'Start for Free' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 max-w-2xl w-full relative z-[110] shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-serif font-medium mb-2">Complete Your Payment</h2>
                  <p className="text-[#7c7a74] text-sm font-light">Secure activation via EcoCash Mobile Money</p>
                </div>
                <button 
                  onClick={() => setShowPaymentModal(false)}
                  className="w-10 h-10 rounded-full bg-[#fdfaf6] flex items-center justify-center hover:bg-[#f5f2ed] transition-colors"
                >
                  <Check className="w-5 h-5 text-[#5A5A40] rotate-45" /* Actually an X if I used X but I wanted to stay focused */ />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              <div className="space-y-8">
                {/* EcoCash Instructions */}
                <div className="bg-[#f5f2ed] rounded-3xl p-8 border border-[#e9e4d9]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-[#151619] rounded-full flex items-center justify-center">
                      <Smartphone className="text-white w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">EcoCash Transfer Instructions</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 border-2 border-[#5A5A40] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-1">1</div>
                      <p className="text-sm text-[#2c2b29] leading-relaxed">
                        Dial <span className="font-mono font-bold">*151#</span> on your mobile device.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 border-2 border-[#5A5A40] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-1">2</div>
                      <p className="text-sm text-[#2c2b29] leading-relaxed">
                        Select <span className="font-bold">Send Money</span>.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 border-2 border-[#5A5A40] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-1">3</div>
                      <div>
                        <p className="text-sm text-[#2c2b29] leading-relaxed mb-2">
                          Enter our business mobile number:
                        </p>
                        <div className="bg-white px-4 py-3 rounded-xl border border-[#e9e4d9] flex justify-between items-center group">
                          <span className="font-mono text-lg font-bold tracking-wider">077 123 4567</span>
                          <Phone className="w-4 h-4 text-[#5A5A40] opacity-30 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 border-2 border-[#5A5A40] rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-1">4</div>
                      <p className="text-sm text-[#2c2b29] leading-relaxed">
                        Enter the amount for your selected plan and confirm.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="flex flex-col items-center justify-center p-6 bg-green-50 border border-green-100 rounded-3xl">
                   <ShieldCheck className="w-8 h-8 text-green-600 mb-2" />
                   <h4 className="text-green-800 font-bold font-sans">Payment Verification</h4>
                   <p className="text-green-700 text-xs font-light max-w-xs mx-auto">
                    Once paid, please enter your transaction ID below for automated activation. Link typically takes 2-5 minutes to verify.
                   </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      placeholder="Transaction Reference (e.g. PP240425.1055.H12345)" 
                      className="flex-grow px-6 py-4 bg-[#fdfaf6] border border-[#e9e4d9] rounded-2xl outline-none focus:ring-2 focus:ring-[#5A5A40] transition-all text-sm uppercase font-mono"
                    />
                    <button className="bg-[#151619] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#2c2b29] transition-colors text-sm">
                      Verify
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-[#e9e4d9]">
                  <div className="flex items-center space-x-2 grayscale opacity-50">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Safe & Secure</span>
                  </div>
                  <div className="w-px h-4 bg-gray-200" />
                  <div className="flex items-center space-x-2 grayscale opacity-50">
                    <Info className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Instant Help</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
