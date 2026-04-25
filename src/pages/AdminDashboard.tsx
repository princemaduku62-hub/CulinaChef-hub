import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  CreditCard, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Search, 
  Filter, 
  TrendingUp, 
  ChefHat,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { cn } from '../lib/utils';

interface PendingPayment {
  id: string;
  userName: string;
  plan: string;
  amount: string;
  reference: string;
  timestamp: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const AdminDashboard = () => {
  const [payments, setPayments] = useState<PendingPayment[]>([
    { 
      id: '1', 
      userName: 'Alice Smith', 
      plan: 'Premium', 
      amount: '$12', 
      reference: 'PP260425.0942.A3921', 
      timestamp: '10 mins ago',
      status: 'pending' 
    },
    { 
      id: '2', 
      userName: 'Robert Chen', 
      plan: 'Basic', 
      amount: '$5', 
      reference: 'PP260424.1822.B8842', 
      timestamp: '2 hours ago',
      status: 'pending' 
    },
    { 
      id: '3', 
      userName: 'Sarah Jenkins', 
      plan: 'Premium', 
      amount: '$12', 
      reference: 'PP260424.1510.K1120', 
      timestamp: 'Yesterday',
      status: 'approved' 
    },
  ]);

  const handleAction = (id: string, newStatus: 'approved' | 'rejected') => {
    setPayments(payments.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const stats = [
    { label: "Monthly Revenue", value: "$4,250", icon: TrendingUp, trend: "+12%" },
    { label: "Active Subscribers", value: "342", icon: CreditCard, trend: "+5%" },
    { label: "New Chefs", value: "18", icon: ChefHat, trend: "+2" },
    { label: "Total Users", value: "12,402", icon: Users, trend: "+142" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#5A5A40] mb-2 block">Owner Panel</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium">CulinaShare Dashboard</h1>
        </div>
        <div className="flex space-x-4 mt-6 md:mt-0">
          <div className="bg-white border border-[#e9e4d9] px-6 py-3 rounded-full flex items-center space-x-2 text-sm font-medium">
            <Clock className="w-4 h-4 text-[#5A5A40]" />
            <span>Last Sync: Just now</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-[#e9e4d9] shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-[#f5f2ed] rounded-2xl flex items-center justify-center text-[#5A5A40]">
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">{stat.trend}</span>
            </div>
            <div className="text-3xl font-serif font-bold text-[#2c2b29] mb-1">{stat.value}</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#7c7a74]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* EcoCash Verification Section */}
      <section className="bg-white rounded-[3rem] border border-[#e9e4d9] overflow-hidden shadow-xl shadow-black/5">
        <div className="px-10 py-8 border-b border-[#e9e4d9] flex justify-between items-center bg-[#fdfaf6]">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-[#5A5A40] rounded-full flex items-center justify-center">
              <Smartphone className="text-white w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-medium">EcoCash Payments</h2>
              <p className="text-xs text-[#7c7a74] font-light">Cross-reference these with your mobile SMS confirmations</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search Reference..." 
                className="pl-10 pr-4 py-2 bg-white border border-[#e9e4d9] rounded-full text-sm outline-none focus:ring-1 focus:ring-[#5A5A40]"
              />
            </div>
            <button className="p-2 border border-[#e9e4d9] rounded-full hover:bg-[#f5f2ed] transition-colors text-gray-400">
               <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#e9e4d9] bg-[#fdfaf6]/50">
                <th className="px-10 py-5 text-[10px] uppercase font-bold tracking-widest text-[#7c7a74]">User</th>
                <th className="px-6 py-5 text-[10px] uppercase font-bold tracking-widest text-[#7c7a74]">Plan</th>
                <th className="px-6 py-5 text-[10px] uppercase font-bold tracking-widest text-[#7c7a74]">Reference ID</th>
                <th className="px-6 py-5 text-[10px] uppercase font-bold tracking-widest text-[#7c7a74]">Time</th>
                <th className="px-10 py-5 text-[10px] uppercase font-bold tracking-widest text-[#7c7a74] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e9e4d9]">
              {payments.map((payment) => (
                <tr key={payment.id} className={cn(
                  "hover:bg-[#fdfaf6] transition-colors",
                  payment.status === 'pending' ? "bg-white" : "bg-gray-50/50"
                )}>
                  <td className="px-10 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#f5f2ed] flex items-center justify-center text-[#5A5A40] text-xs font-bold">
                        {payment.userName[0]}
                      </div>
                      <span className="font-medium text-[#2c2b29]">{payment.userName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={cn(
                      "text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter",
                      payment.plan === 'Premium' ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
                    )}>
                      {payment.plan} ({payment.amount})
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="font-mono text-xs text-[#2c2b29] bg-[#f5f2ed] px-3 py-1.5 rounded-lg border border-[#e9e4d9] inline-block">
                      {payment.reference}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-xs text-[#7c7a74] font-light">
                    {payment.timestamp}
                  </td>
                  <td className="px-10 py-6 text-right">
                    {payment.status === 'pending' ? (
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => handleAction(payment.id, 'approved')}
                          className="w-9 h-9 rounded-xl bg-green-50 text-green-600 border border-green-100 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center"
                          title="Approve & Activate"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleAction(payment.id, 'rejected')}
                          className="w-9 h-9 rounded-xl bg-red-50 text-red-600 border border-red-100 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center"
                          title="Reject"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        payment.status === 'approved' ? "text-green-600" : "text-red-500"
                      )}>
                        {payment.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-10 bg-[#fdfaf6] border-t border-[#e9e4d9]">
          <div className="flex items-center space-x-3 text-[#7c7a74] text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Success Rate: 98% of payments verified within 24 hours.</span>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="p-10 bg-[#151619] rounded-[2.5rem] text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">Export Reports</h3>
            <p className="text-gray-400 font-light mb-8">Download CSV or PDF reports of your earnings and user growth for the current month.</p>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#5A5A40] hover:text-white transition-all flex items-center justify-center space-x-2">
            <span>Download Report</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        <div className="p-10 bg-[#f5f2ed] rounded-[2.5rem] border border-[#e9e4d9] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">Security Settings</h3>
            <p className="text-[#7c7a74] font-light mb-8">Manage your password, 2FA, and authorized devices accessing the Owner Panel.</p>
          </div>
          <button className="bg-white border border-[#e9e4d9] text-[#151619] px-8 py-4 rounded-full font-bold hover:bg-[#151619] hover:text-white transition-all">
             Audit Security logs
          </button>
        </div>
      </div>
    </div>
  );
};
