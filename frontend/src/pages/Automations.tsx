import { 
  Zap, 
  Play, 
  Plus, 
  MoreVertical, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ExternalLink,
  Shield,
  Search,
  Settings
} from 'lucide-react';

const Automations = () => {
  const automations = [
    { name: 'Daily Synthesis Report', description: 'Generates a daily summary of task throughput and team synergy.', active: true, runs: 'Every 24h', icon: Zap, status: 'Healthy' },
    { name: 'Neural Filter Cleanup', description: 'Automatically archives tasks that haven\'t been touched in 30 days.', active: true, runs: 'Every 7d', icon: Shield, status: 'Healthy' },
    { name: 'Slack Integration Sync', description: 'Syncs team synergy activity with Slack #general channel.', active: false, runs: 'Event Trigger', icon: ExternalLink, status: 'Disconnected' },
    { name: 'Priority Matrix Optimizer', description: 'Re-calculates task priority based on upcoming deadlines and load.', active: true, runs: 'Every 1h', icon: Activity, status: 'Healthy' },
    { name: 'Email Inbox Sorter', description: 'AI-driven sorting of incoming neural communications.', active: true, runs: 'Every 5m', icon: Clock, status: 'Healthy' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">Neural Flow Control</p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <Zap className="w-8 h-8" />
            Automations
          </h1>
          <p className="text-slate-400 max-w-lg">
            Streamline your workflow with AI-driven neural automations and system-wide task triggers.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2 border shadow-lg shadow-white/5">
            <Settings className="w-4 h-4" />
            Triggers
          </button>
          <button className="btn-primary flex items-center gap-2 shadow-xl shadow-teal-trust/20">
            <Plus className="w-4 h-4" />
            Create Automation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Active Workflows</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search automations..." 
                  className="bg-obsidian-darker border border-white/5 rounded-xl pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-teal-trust/50 transition-colors"
                />
              </div>
            </div>

            <div className="divide-y divide-white/5">
              {automations.map((auto, i) => (
                <div key={i} className="p-6 flex items-start gap-6 group hover:bg-white/5 transition-all">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                    auto.active ? 'bg-teal-trust/10 border-teal-trust/20 text-teal-trust' : 'bg-white/5 border-white/10 text-slate-600'
                  }`}>
                    <auto.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-3">
                        {auto.name}
                        {auto.active ? (
                          <span className="text-[9px] bg-green-400/10 text-green-400 px-2 py-0.5 rounded-full border border-green-400/20 font-bold uppercase tracking-widest">ACTIVE</span>
                        ) : (
                          <span className="text-[9px] bg-white/10 text-slate-500 px-2 py-0.5 rounded-full border border-white/10 font-bold uppercase tracking-widest">PAUSED</span>
                        )}
                      </h4>
                      <div className="flex items-center gap-2">
                         <span className={`text-[10px] font-bold ${auto.status === 'Healthy' ? 'text-green-400' : 'text-amber-strategic'}`}>
                           {auto.status}
                         </span>
                         <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all">
                           <MoreVertical className="w-4 h-4" />
                         </button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mb-4">{auto.description}</p>
                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                       <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Runs {auto.runs}</span>
                       <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5" /> 99.8% Success</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4">
             <div className="w-20 h-20 rounded-3xl bg-teal-trust/10 flex items-center justify-center border border-teal-trust/20 relative">
               <Zap className="w-10 h-10 text-teal-trust animate-pulse" />
               <div className="absolute -top-2 -right-2 bg-green-500 w-4 h-4 rounded-full border-4 border-obsidian"></div>
             </div>
             <div className="space-y-1">
               <h3 className="text-lg font-bold">Automation Engine</h3>
               <p className="text-xs text-slate-500">All neural systems operational. 1,482 tasks automated this month.</p>
             </div>
             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
               <div className="h-full bg-teal-trust w-[78%]"></div>
             </div>
             <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">78% Efficiency Optimization</p>
          </div>

          <div className="glass-card p-6 border-purple-400/10 bg-purple-400/5">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-purple-400">
              <Play className="w-4 h-4" />
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-slate-300 transition-all">
                Run Daily Standup Synthesis
                <Play className="w-3 h-3 text-teal-trust" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-slate-300 transition-all">
                Trigger Inbox Neural Sort
                <Play className="w-3 h-3 text-teal-trust" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-slate-300 transition-all">
                Sync Team Synergy Cloud
                <Play className="w-3 h-3 text-teal-trust" />
              </button>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-strategic" />
              System Alerts
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-strategic mt-1.5"></div>
                <p className="text-slate-400">Slack integration needs re-authentication to resume sync.</p>
              </div>
              <div className="flex gap-3 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-trust mt-1.5"></div>
                <p className="text-slate-400">High volume of automated tasks detected in Neural Search engine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automations;