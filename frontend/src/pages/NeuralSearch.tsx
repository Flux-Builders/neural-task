import { useState } from 'react';
import { 
  Search, 
  Zap, 
  Filter, 
  Database, 
  Clock, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical,
  Calendar,
  Code2,
  Users
} from 'lucide-react';

const NeuralSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = [
    { title: 'Neural Sync Protocol v4.2', category: 'Documentation', time: '2h ago', snippet: 'Implementation of the new neural synchronization layer for the API gateway...', icon: Database, color: 'text-blue-400' },
    { title: 'API Refactor Plan', category: 'Team Hub', time: '1d ago', snippet: 'Refactoring strategy for the authentication endpoints to improve throughput...', icon: Code2, color: 'text-teal-trust' },
    { title: 'Sara Connor', category: 'Personnel', time: 'Active', snippet: 'Lead Architect • Current Focus: Sprint 12 Optimization...', icon: Users, color: 'text-purple-400' },
    { title: 'Matrix Dashboard Fix', category: 'Automation', time: '3d ago', snippet: 'Fixed the glassmorphism rendering issue in the Priority Matrix component...', icon: Zap, color: 'text-amber-strategic' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1200);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">Neural Data Indexing</p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <Search className="w-8 h-8" />
            Neural Search
          </h1>
          <p className="text-slate-400 max-w-lg">
            Instantly index and retrieve information across your entire neural network.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2 border shadow-lg shadow-white/5">
            <Database className="w-4 h-4" />
            Index Hub
          </button>
          <button className="btn-primary flex items-center gap-2 shadow-xl shadow-teal-trust/20">
            <Zap className="w-4 h-4" />
            Optimize Search
          </button>
        </div>
      </div>

      {/* Main Search Bar */}
      <div className="glass-card p-8 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group">
         <div className="absolute inset-0 bg-teal-trust/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
         <form onSubmit={handleSearch} className="relative z-10 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tasks, code, team, or neural insights..." 
                className="w-full bg-obsidian-darker border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-lg focus:outline-none focus:border-teal-trust/50 transition-colors shadow-2xl"
              />
            </div>
            <button 
              type="submit" 
              disabled={isSearching}
              className="btn-primary flex items-center justify-center gap-2 text-lg px-8 shadow-xl shadow-teal-trust/20 disabled:opacity-50"
            >
              {isSearching ? (
                <>
                  <div className="w-5 h-5 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin"></div>
                  Searching...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Neural Index
                </>
              )}
            </button>
         </form>
         <div className="mt-4 flex flex-wrap gap-2 relative z-10">
            {['#sprint-12', '#refactor', '#api', '#security', '#ui-fixes'].map((tag, i) => (
              <button key={i} className="text-[10px] font-bold text-slate-500 hover:text-teal-trust bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/5 transition-all">
                {tag}
              </button>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Search Results */}
        <div className="lg:col-span-8 space-y-4">
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Neural Matches</h3>
              <div className="flex gap-2">
                 <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all">
                   <Filter className="w-4 h-4" />
                 </button>
                 <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all">
                   <Calendar className="w-4 h-4" />
                 </button>
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {searchResults.map((result, i) => (
                <div key={i} className="p-6 flex items-start gap-6 group hover:bg-white/5 transition-all cursor-pointer">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border bg-white/5 border-white/10 ${result.color} group-hover:bg-white/10 transition-colors`}>
                    <result.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-3">
                        {result.title}
                        <span className="text-[9px] bg-white/10 text-slate-500 px-2 py-0.5 rounded-full border border-white/10 font-bold uppercase tracking-widest">{result.category}</span>
                      </h4>
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{result.time}</span>
                         <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                           <MoreVertical className="w-4 h-4" />
                         </button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mb-2 line-clamp-2">{result.snippet}</p>
                    <div className="flex items-center gap-3">
                       <button className="text-[10px] text-teal-trust font-bold uppercase tracking-widest hover:underline">View Index</button>
                       <button className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white">Share Result</button>
                    </div>
                  </div>
                </div>
              ))}
              
              {searchQuery && !isSearching && (
                <div className="p-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/10">
                    <CheckCircle2 className="w-8 h-8 text-teal-trust" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold">Search Synthesis Complete</p>
                    <p className="text-slate-500 text-sm">Indexed 1,482 neural nodes for "{searchQuery}".</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4">
             <div className="w-20 h-20 rounded-3xl bg-teal-trust/10 flex items-center justify-center border border-teal-trust/20 relative">
               <Database className="w-10 h-10 text-teal-trust" />
               <div className="absolute -bottom-2 bg-teal-trust text-obsidian text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-xl shadow-teal-trust/20">Online</div>
             </div>
             <div className="space-y-1">
               <h3 className="text-lg font-bold">Neural Database</h3>
               <p className="text-xs text-slate-500">12.4M items indexed. All neural nodes verified and synchronized.</p>
             </div>
             <div className="w-full space-y-2 mt-2">
               <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <span>Indexing Speed</span>
                  <span>482 GB/s</span>
               </div>
               <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-teal-trust w-[92%]"></div>
               </div>
             </div>
          </div>

          <div className="glass-card p-6 border-amber-strategic/10 bg-amber-strategic/5">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-amber-strategic">
              <Activity className="w-4 h-4" />
              Search Insights
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              "You search for <span className="text-amber-strategic font-bold">API Documentation</span> most frequently on Tuesdays. I've pinned the latest index to your dashboard."
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-purple-400" />
              Recent Trends
            </h3>
            <div className="space-y-4">
               {[
                 { label: 'Neural Sync Architecture', count: 142 },
                 { label: 'JWT Refactor Flow', count: 85 },
                 { label: 'Synergy Pulse Metrics', count: 42 },
               ].map((trend, i) => (
                 <div key={i} className="flex items-center justify-between text-[10px]">
                   <span className="text-slate-400 font-bold uppercase tracking-widest truncate mr-4">{trend.label}</span>
                   <span className="text-purple-400 font-bold whitespace-nowrap">{trend.count} searches</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralSearch;