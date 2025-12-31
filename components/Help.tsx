
import React from 'react';
import { PlayCircle, PhoneCall, HelpCircle, MessageSquare } from 'lucide-react';

const Help: React.FC = () => {
  const faqs = [
    { q: "How to track my order?", video: "https://youtube.com/watch?v=track" },
    { q: "What is refund policy?", video: "https://youtube.com/watch?v=refund" },
    { q: "How to pay via UPI?", video: "https://youtube.com/watch?v=upi" },
    { q: "Sudha milk availability?", video: "https://youtube.com/watch?v=sudha" },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-block p-4 bg-blue-100 rounded-3xl text-blue-600">
          <HelpCircle size={48} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">How can we help?</h2>
        <p className="text-gray-500 text-sm">Find answers through our guide videos or talk to us.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Video Guides</h3>
        {faqs.map((faq, idx) => (
          <button 
            key={idx}
            className="flex items-center justify-between p-5 bg-white rounded-3xl border border-gray-100 hover:shadow-md transition-all group"
          >
            <div className="flex items-center space-x-4">
              <div className="text-red-500 group-hover:scale-110 transition-transform">
                <PlayCircle size={24} />
              </div>
              <span className="text-sm font-semibold text-gray-700">{faq.q}</span>
            </div>
            <span className="text-[10px] bg-red-50 text-red-500 font-bold px-2 py-1 rounded-full uppercase">Play</span>
          </button>
        ))}
      </div>

      <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white space-y-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">Still stuck?</h3>
          <p className="text-sm text-blue-100">Our support team is available from 8 AM to 10 PM.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-500/30 p-4 rounded-3xl flex flex-col items-center space-y-2 border border-blue-400/30">
            <PhoneCall size={20} />
            <span className="text-xs font-bold">Call Support</span>
            <span className="text-[10px] opacity-70">Wait: ~30min</span>
          </div>
          <div className="bg-blue-500/30 p-4 rounded-3xl flex flex-col items-center space-y-2 border border-blue-400/30">
            <MessageSquare size={20} />
            <span className="text-xs font-bold">WhatsApp</span>
            <span className="text-[10px] opacity-70">Instant Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
