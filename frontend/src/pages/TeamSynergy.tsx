import { 
  Users, 
  MessageSquare, 
  Activity, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  MoreVertical,
  Zap
} from 'lucide-react';

const TeamSynergy = () => {
  const teamMembers = [
    { name: 'Sara Connor', role: 'Lead Architect', status: 'Active', pulse: 92, avatar: 'SC', active: true },
    { name: 'Tony Wick', role: 'Full-stack Dev', status: 'In Deep Work', pulse: 85, avatar: 'TW', active: true },
    { name: 'Milo K.', role: 'AI Specialist', status: 'Reviewing PRs', pulse: 78, avatar: 'MK', active: false },
    { name: 'Alex V.', role: 'UX/UI Designer', status: 'Collaborating', pulse: 95, avatar: 'AV', active: true },
    { name: 'Elena R.', role: 'QA Engineer', status: 'Offline', pulse: 0, avatar: 'ER', active: false },
  ];

  const recentActivity = [
    { user: 'SC', action: 'merged a neural update', time: '12m ago', project: 'Neural Sync' },
    { user: 'TW', action: 'commented on PR #42', time: '45m ago', project: 'API Gateway' },
    { user: 'AV', action: 'updated matrix designs', time: '1h ago', project: 'Executive Hub' },
    { user: 'MK', action: 'resolved a merge conflict', time: '2h ago', project: 'AI Co-Pilot' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">Neural Collective Active</p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Team Synergy
          </h1>
          <p className="text-slate-400 max-w-lg">
            Monitor real-time team collaboration, activity pulses, and collective neural output.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2 border shadow-lg shadow-white/5">
            <MessageSquare className="w-4 h-4" />
            Synergy Hub
          </button>
          <button className="btn-primary flex items-center gap-2 shadow-xl shadow-teal-trust/20">
            <Plus className="w-4 h-4" />
            Invite Pilot
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Team Grid */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Active Personnel</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search team members..." 
                  className="bg-obsidian-darker border border-white/5 rounded-xl pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:border-teal-trust/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 transition-all flex items-center gap-4 relative overflow-hidden">
                   {member.active && (
                     <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                       <Zap className="w-4 h-4 text-teal-trust animate-pulse" />
                     </div>
                   )}
                   <div className="relative shrink-0">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-sm font-bold border border-white/10 group-hover:bg-teal-trust/10 transition-colors">
                        {member.avatar}
                     </div>
                     {member.active && (
                       <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-4 border-obsidian"></span>
                     )}
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{member.name}</h4>
                      <p className="text-[11px] text-slate-500 truncate mb-1">{member.role}</p>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-bold ${member.active ? 'text-teal-trust' : 'text-slate-600'}`}>
                          {member.status}
                        </span>
                        {member.pulse > 0 && (
                          <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-teal-trust/40" style={{ width: `${member.pulse}%` }}></div>
                          </div>
                        )}
                      </div>
                   </div>
                   <button className="p-1.5 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all">
                      <MoreVertical className="w-4 h-4" />
                   </button>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="glass-card overflow-hidden">
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Synergy Pulse</h3>
              <TrendingUp className="w-4 h-4 text-teal-trust" />
            </div>
            <div className="divide-y divide-white/5">
               {recentActivity.map((activity, i) => (
                 <div key={i} className="p-4 flex items-center gap-4 group hover:bg-white/5 transition-all cursor-pointer">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[10px] font-bold border border-white/10 group-hover:bg-purple-400/10 transition-colors">
                      {activity.user}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-200">
                        <span className="font-bold">{activity.user}</span> {activity.action} in <span className="text-teal-trust">{activity.project}</span>
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-600 whitespace-nowrap">{activity.time}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 bg-gradient-to-b from-purple-400/10 to-transparent">
             <div className="w-20 h-20 rounded-full border-4 border-white/5 border-t-purple-400 flex items-center justify-center relative">
               <Users className="w-10 h-10 text-purple-400" />
               <div className="absolute -bottom-2 bg-purple-400 text-obsidian text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-xl shadow-purple-400/20">Sync 92%</div>
             </div>
             <div className="space-y-1">
               <h3 className="text-lg font-bold">Collective Synergy</h3>
               <p className="text-xs text-slate-500">Your team is currently in high flow state. Throughput increased by 14%.</p>
             </div>
          </div>

          <div className="glass-card p-6 border-teal-trust/10 bg-teal-trust/5">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-teal-trust">
              <CheckCircle2 className="w-4 h-4" />
              Shared Goals
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Sprint 12 Cleanup', value: 85 },
                { label: 'API Refactor', value: 42 },
                { label: 'Neural Cloud Sync', value: 100 },
              ].map((goal, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400 font-bold uppercase tracking-widest">{goal.label}</span>
                    <span className="text-teal-trust font-bold">{goal.value}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-trust" style={{ width: `${goal.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
             <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
               <Shield className="w-4 h-4 text-amber-strategic" />
               Synergy Security
             </h3>
             <div className="p-4 rounded-2xl bg-obsidian-darker border border-white/5 space-y-3">
               <div className="flex items-center justify-between text-[10px]">
                 <span className="text-slate-500">Neural Encryption</span>
                 <span className="text-green-400">AES-256-Active</span>
               </div>
               <div className="flex items-center justify-between text-[10px]">
                 <span className="text-slate-500">Access Control</span>
                 <span className="text-slate-300">RBAC Level 4</span>
               </div>
               <div className="flex items-center justify-between text-[10px]">
                 <span className="text-slate-500">Protocol Status</span>
                 <span className="text-teal-trust">Verified</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSynergy;