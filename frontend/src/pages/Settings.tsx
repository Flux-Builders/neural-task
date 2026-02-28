import { 
  Settings, 
  Cpu, 
  Shield, 
  Zap, 
  Database, 
  Globe, 
  Bell, 
  Lock, 
  User, 
  MoreVertical,
  ChevronRight,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

const SettingsPage = () => {
  const settingsGroups = [
    {
      title: 'Neural Engine',
      items: [
        { label: 'Model Selection', value: 'Neural Flow v2.4.0', icon: Cpu, color: 'text-teal-trust' },
        { label: 'Sync Frequency', value: 'Every 5m', icon: Zap, color: 'text-amber-strategic' },
        { label: 'Data Retention', value: '90 Days', icon: Database, color: 'text-blue-400' },
      ]
    },
    {
      title: 'Security & Access',
      items: [
        { label: 'Neural Encryption', value: 'AES-256-GCM', icon: Shield, color: 'text-green-400' },
        { label: 'Two-Factor Auth', value: 'Enabled', icon: Lock, color: 'text-purple-400' },
        { label: 'Session Management', value: '4 Active', icon: Globe, color: 'text-slate-400' },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { label: 'Notifications', value: 'All Active', icon: Bell, color: 'text-amber-strategic' },
        { label: 'Team Visibility', value: 'Pilot Only', icon: User, color: 'text-teal-trust' },
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">System Configuration</p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <Settings className="w-8 h-8" />
            API Settings
          </h1>
          <p className="text-slate-400 max-w-lg">
            Configure your neural network, manage security protocols, and personalize your experience.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2 border shadow-lg shadow-white/5">
            <RotateCcw className="w-4 h-4" />
            Reset Defaults
          </button>
          <button className="btn-primary flex items-center gap-2 shadow-xl shadow-teal-trust/20">
            <Zap className="w-4 h-4" />
            Apply Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Settings Panel */}
        <div className="lg:col-span-8 space-y-6">
          {settingsGroups.map((group, i) => (
            <div key={i} className="glass-card overflow-hidden">
               <div className="p-4 border-b border-white/5 bg-white/5">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{group.title}</h3>
               </div>
               <div className="divide-y divide-white/5">
                  {group.items.map((item, j) => (
                    <div key={j} className="p-6 flex items-center gap-6 group hover:bg-white/5 transition-all cursor-pointer">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border bg-white/5 border-white/10 ${item.color} group-hover:bg-white/10 transition-colors`}>
                          <item.icon className="w-6 h-6" />
                       </div>
                       <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                          <p className="text-xs text-slate-500">{item.value}</p>
                       </div>
                       <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-teal-trust transition-colors" />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>

        {/* Sidebar Info Panels */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4">
             <div className="w-20 h-20 rounded-3xl bg-teal-trust/10 flex items-center justify-center border border-teal-trust/20 relative">
               <User className="w-10 h-10 text-teal-trust" />
               <div className="absolute -bottom-2 bg-teal-trust text-obsidian text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-xl shadow-teal-trust/20">Pro Pilot</div>
             </div>
             <div className="space-y-1">
               <h3 className="text-lg font-bold text-white">Neural Task Pro</h3>
               <p className="text-xs text-slate-500">Your neural license is active until Dec 2026. All enterprise features unlocked.</p>
             </div>
             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
               <div className="h-full bg-teal-trust w-[100%]"></div>
             </div>
             <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Full Neural Bandwidth Active</p>
          </div>

          <div className="glass-card p-6 border-purple-400/10 bg-purple-400/5">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-purple-400">
              <ExternalLink className="w-4 h-4" />
              API Documentation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              "Access the full neural API documentation to build custom integrations and automations."
            </p>
            <button className="w-full btn-outline text-[10px] py-1.5 border-purple-400/20 text-purple-400 hover:bg-purple-400/10">View Swagger Docs</button>
          </div>

          <div className="glass-card p-6">
             <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
               <Shield className="w-4 h-4 text-amber-strategic" />
               System Status
             </h3>
             <div className="p-4 rounded-2xl bg-obsidian-darker border border-white/5 space-y-3">
               <div className="flex items-center justify-between text-[10px]">
                 <span className="text-slate-500">Global API Latency</span>
                 <span className="text-green-400">42ms</span>
               </div>
               <div className="flex items-center justify-between text-[10px]">
                 <span className="text-slate-500">Neural Sync Success</span>
                 <span className="text-green-400">100.0%</span>
               </div>
               <div className="flex items-center justify-between text-[10px]">
                 <span className="text-slate-500">Firewall Integrity</span>
                 <span className="text-teal-trust">Verified</span>
               </div>
             </div>
             <div className="mt-4 pt-4 border-t border-white/5">
                <button className="w-full btn-secondary text-[10px] py-1.5 flex items-center justify-center gap-2">
                  System Diagnostic <MoreVertical className="w-3 h-3" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;