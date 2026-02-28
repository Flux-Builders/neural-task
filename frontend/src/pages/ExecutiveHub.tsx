import { 
  Zap, 
  TrendingUp, 
  Clock, 
  AlertCircle, 
  MessageSquare, 
  CheckCircle2,
  BrainCircuit,
  MousePointer2,
  Users,
  BarChart3
} from 'lucide-react';


const ExecutiveHub = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">Neural Synthesis active</p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Executive Hub
          </h1>
          <p className="text-slate-400 max-w-lg">
            Welcome back, Pilot. Your neural network has indexed <span className="text-teal-trust font-bold">127 tasks</span> for optimization today.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2 border shadow-lg shadow-white/5">
            <Clock className="w-4 h-4" />
            History
          </button>
          <button className="btn-primary flex items-center gap-2 shadow-xl shadow-teal-trust/20">
            <Zap className="w-4 h-4" />
            Launch Action
          </button>
        </div>
      </div>

      {/* Main Grid: 4-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Column 1: Priority Engine */}
        <div className="space-y-6 lg:col-span-1">
          <div className="glass-card p-6 h-full flex flex-col bg-gradient-to-b from-white/5 to-transparent">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                Priority Engine
              </h3>
              <span className="text-[10px] bg-red-400/10 text-red-400 border border-red-400/20 px-2 py-0.5 rounded-full font-bold">LOCKED</span>
            </div>
            
            <div className="space-y-4 flex-1">
              {[
                { title: 'Neural Sync Architecture', status: 'High', due: '2h' },
                { title: 'API Gateway Protocol', status: 'High', due: '5h' },
                { title: 'SSO Integration Layer', status: 'Crit', due: 'Now' },
              ].map((task, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex justify-between mb-1">
                    <span className={`text-[10px] font-bold ${task.status === 'Crit' ? 'text-red-400' : 'text-amber-strategic'}`}>
                      {task.status} PRIORITY
                    </span>
                    <span className="text-[10px] text-slate-500">{task.due} left</span>
                  </div>
                  <p className="text-sm font-medium pr-8">{task.title}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/5">
              <button className="w-full btn-outline text-xs">View Matrix</button>
            </div>
          </div>
        </div>

        {/* Column 2: AI Co-Pilot Summary */}
        <div className="space-y-6 lg:col-span-1">
          <div className="glass-card p-6 h-full border-teal-trust/20 flex flex-col shadow-teal-trust/5 shadow-2xl bg-teal-trust/5">
            <div className="flex items-center gap-2 mb-6">
              <BrainCircuit className="w-5 h-5 text-teal-trust" />
              <h3 className="text-lg font-bold">Neural Insights</h3>
            </div>
            
            <div className="flex-1 space-y-6">
              <div className="p-4 rounded-2xl bg-obsidian-lighter border border-teal-trust/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-50">
                  <TrendingUp className="w-4 h-4 text-teal-trust" />
                </div>
                <p className="text-xs text-slate-400 mb-2">Efficiency Recommendation</p>
                <p className="text-sm italic leading-relaxed text-slate-200">
                  "I've analyzed your past 3 sprints. Grouping API documentation tasks on Tuesdays could increase throughput by **18%**."
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">Flow State Efficiency</span>
                  <span className="text-teal-trust">92%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-trust w-[92%]"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
               <button className="w-full btn-primary text-xs flex items-center justify-center gap-2">
                 Ask Co-Pilot <BrainCircuit className="w-3 h-3" />
               </button>
            </div>
          </div>
        </div>

        {/* Column 3: Team Synergy */}
        <div className="space-y-6 lg:col-span-1">
          <div className="glass-card p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold">Team Synergy</h3>
            </div>
            
            <div className="flex-1 space-y-4">
              {[
                { user: 'SC', name: 'Sara Connor', msg: 'Pushing dev build now...', time: '12m ago', active: true },
                { user: 'TW', name: 'Tony Wick', msg: 'Reviewing API schemas.', time: '45m ago', active: false },
                { user: 'MK', name: 'Milo K.', msg: 'All systems green.', time: '1h ago', active: false },
              ].map((feed, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-xs font-bold border border-white/10 group-hover:bg-purple-400/10 transition-colors">
                      {feed.user}
                    </div>
                    {feed.active && (
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-obsidian"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="text-xs font-bold text-white truncate">{feed.name}</p>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mb-1">{feed.msg}</p>
                    <span className="text-[9px] text-slate-600 block">{feed.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
               <button className="w-full btn-secondary text-xs flex items-center justify-center gap-2">
                 Synergy Hub <MessageSquare className="w-3 h-3" />
               </button>
            </div>
          </div>
        </div>

        {/* Column 4: Performance & Analytics */}
        <div className="space-y-6 lg:col-span-1">
          <div className="glass-card p-6 h-full flex flex-col border-amber-strategic/10 bg-amber-strategic/5">
             <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-amber-strategic" />
              <h3 className="text-lg font-bold">Performance</h3>
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="text-center py-6">
                 <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-white/5 border-t-amber-strategic shadow-xl shadow-amber-strategic/5 mb-4 relative">
                   <div className="text-3xl font-black">74%</div>
                   <div className="absolute -bottom-2 bg-amber-strategic text-obsidian text-[8px] font-bold px-2 py-0.5 rounded-full">OPTIMIZED</div>
                 </div>
                 <p className="text-sm text-slate-400">Monthly Target Progress</p>
              </div>

              <div className="space-y-4">
                 <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-teal-trust" /> Completed</span>
                    <span className="text-white">842</span>
                 </div>
                 <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-amber-strategic" /> Backlog</span>
                    <span className="text-white">127</span>
                 </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
               <button className="w-full btn-secondary text-xs">Open Analytics</button>
            </div>
          </div>
        </div>

      </div>

      {/* Featured Insight Card */}
      <div className="glass-card p-1 overflow-hidden relative group">
         <div className="absolute inset-0 bg-gradient-to-r from-teal-trust/20 via-transparent to-amber-strategic/20 opacity-30"></div>
         <div className="relative bg-obsidian-lighter m-0.5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 border border-white/10">
            <div className="w-20 h-20 rounded-3xl bg-teal-trust/10 flex items-center justify-center border border-teal-trust/20">
               <Zap className="w-10 h-10 text-teal-trust animate-pulse" />
            </div>
            <div className="flex-1 text-center md:text-left">
               <h4 className="text-xl font-bold mb-2">Automate your "Morning Standup"</h4>
               <p className="text-slate-400 text-sm max-w-xl">
                 Our AI noticed you spend 15 minutes manually updating tasks every morning. We can generate a synthesis report and auto-sync your Kanban board in 3 seconds.
               </p>
            </div>
            <button className="btn-primary flex items-center gap-2 whitespace-nowrap shadow-teal-trust/20">
               Configure Automation <MousePointer2 className="w-4 h-4" />
            </button>
         </div>
      </div>
    </div>
  );
};

export default ExecutiveHub;
