import { useState } from 'react';
import { 
  Inbox, 
  Search, 
  Star, 
  Trash2, 
  Send, 
  Archive, 
  Shield, 
  Zap,
  Clock,
  Filter,
  MoreVertical,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  read: boolean;
  starred: boolean;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'System' | 'Team' | 'AI' | 'External';
}

const NeuralInbox = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'AI Co-Pilot',
      subject: 'Optimization Report: Sprint 12',
      preview: 'I have analyzed the current workflow and found 3 major bottlenecks in the API layer...',
      time: '10:24 AM',
      read: false,
      starred: true,
      priority: 'high',
      category: 'AI',
    },
    {
      id: '2',
      sender: 'Sara Connor',
      subject: 'Frontend Refactor Status',
      preview: 'The Sidebar and Topbar components are now fully responsive. Moving on to the matrix page next.',
      time: '09:15 AM',
      read: true,
      starred: false,
      priority: 'medium',
      category: 'Team',
    },
    {
      id: '3',
      sender: 'System Sentinel',
      subject: 'Security Protocol Updated',
      preview: 'Neural firewall has been upgraded to version 4.2.0. All external connections are being re-validated.',
      time: 'Yesterday',
      read: true,
      starred: false,
      priority: 'critical',
      category: 'System',
    },
    {
      id: '4',
      sender: 'Tony Wick',
      subject: 'API Documentation Missing',
      preview: 'Can someone please update the Swagger docs for the new authentication endpoints?',
      time: 'Yesterday',
      read: false,
      starred: false,
      priority: 'low',
      category: 'Team',
    },
    {
      id: '5',
      sender: 'Neural Sync',
      subject: 'Cloud Sync Successful',
      preview: 'All local data has been synchronized with the neural cloud. No conflicts detected.',
      time: '2 days ago',
      read: true,
      starred: true,
      priority: 'low',
      category: 'System',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredMessages = messages.filter(m => {
    const matchesSearch = m.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.sender.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'System', 'Team', 'AI', 'External'];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'high': return 'text-amber-strategic bg-amber-strategic/10 border-amber-strategic/20';
      case 'medium': return 'text-teal-trust bg-teal-trust/10 border-teal-trust/20';
      default: return 'text-slate-400 bg-white/5 border-white/10';
    }
  };

  const toggleRead = (id: string) => {
    setMessages(messages.map(m => m.id === id ? { ...m, read: !m.read } : m));
  };

  const toggleStar = (id: string) => {
    setMessages(messages.map(m => m.id === id ? { ...m, starred: !m.starred } : m));
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">Neural Network Active</p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <Inbox className="w-8 h-8" />
            Neural Inbox
          </h1>
          <p className="text-slate-400 max-w-lg">
            Your encrypted communications hub. Managed by AI, secured by Neural Protocol.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2 border shadow-lg shadow-white/5">
            <Archive className="w-4 h-4" />
            Archive
          </button>
          <button className="btn-primary flex items-center gap-2 shadow-xl shadow-teal-trust/20">
            <Send className="w-4 h-4" />
            Compose
          </button>
        </div>
      </div>

      {/* Inbox Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <div className="glass-card p-4 space-y-2">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search neural hub..." 
                className="w-full bg-obsidian-darker border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-teal-trust/50 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <nav className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                    selectedCategory === cat 
                      ? 'bg-teal-trust/10 text-teal-trust border border-teal-trust/20' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {cat === 'All' && <Inbox className="w-4 h-4" />}
                    {cat === 'System' && <Shield className="w-4 h-4" />}
                    {cat === 'Team' && <Zap className="w-4 h-4" />}
                    {cat === 'AI' && <Zap className="w-4 h-4" />}
                    {cat === 'External' && <Send className="w-4 h-4" />}
                    {cat}
                  </span>
                  {cat === 'All' && <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded-md">{messages.filter(m => !m.read).length}</span>}
                </button>
              ))}
            </nav>

            <div className="pt-4 mt-4 border-t border-white/5">
              <div className="px-3 py-2">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Security Level</p>
                <div className="flex items-center gap-2 text-teal-trust">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-medium">Neural Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message List */}
        <div className="lg:col-span-9 space-y-4">
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-teal-trust" />
                <div className="flex items-center gap-2 text-slate-400">
                  <Filter className="w-4 h-4" />
                  <span className="text-xs">Sort by Date</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400">
                  <Clock className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {filteredMessages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`group p-4 flex items-center gap-4 hover:bg-white/5 transition-all cursor-pointer relative ${!msg.read ? 'bg-teal-trust/5' : ''}`}
                >
                  {!msg.read && <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-trust shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>}
                  
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-teal-trust" onClick={(e) => e.stopPropagation()} />
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleStar(msg.id); }}
                      className={`transition-colors ${msg.starred ? 'text-amber-strategic' : 'text-slate-600 group-hover:text-slate-400'}`}
                    >
                      <Star className={`w-4 h-4 ${msg.starred ? 'fill-amber-strategic' : ''}`} />
                    </button>
                  </div>

                  <div className="flex-1 min-w-0" onClick={() => toggleRead(msg.id)}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${!msg.read ? 'text-white' : 'text-slate-300'}`}>{msg.sender}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${getPriorityColor(msg.priority)}`}>
                          {msg.priority}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">{msg.time}</span>
                    </div>
                    <p className={`text-sm mb-0.5 truncate ${!msg.read ? 'text-slate-100 font-medium' : 'text-slate-400'}`}>{msg.subject}</p>
                    <p className="text-xs text-slate-500 truncate">{msg.preview}</p>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }}
                      className="p-2 hover:bg-red-400/10 hover:text-red-400 rounded-lg transition-all text-slate-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-all text-slate-500">
                      <Archive className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              
              {filteredMessages.length === 0 && (
                <div className="p-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/10">
                    <Search className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold">No messages found</p>
                    <p className="text-slate-500 text-sm">Your neural filter is working perfectly. No clutter detected.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-trust/10 flex items-center justify-center border border-teal-trust/20">
                <CheckCircle2 className="w-5 h-5 text-teal-trust" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Sync Status</p>
                <p className="text-sm font-bold text-white">100% Secure</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-strategic/10 flex items-center justify-center border border-amber-strategic/20">
                <AlertCircle className="w-5 h-5 text-amber-strategic" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Storage</p>
                <p className="text-sm font-bold text-white">4.2 GB / 50 GB</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center border border-purple-400/20">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Neural Speed</p>
                <p className="text-sm font-bold text-white">0.4ms Latency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInbox;