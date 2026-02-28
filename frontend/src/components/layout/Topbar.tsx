import { Bell, Search, User } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="h-16 border-b border-white/5 bg-obsidian/50 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-10 ml-64">
      <div className="flex items-center bg-white/5 rounded-2xl px-4 py-2 w-96 border border-white/10 focus-within:border-teal-trust/50 transition-all">
        <Search className="w-4 h-4 text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Quantum search tasks or projects..." 
          className="bg-transparent border-none outline-none text-sm text-slate-200 w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-amber-strategic rounded-full border border-obsidian"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
        
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right">
            <p className="text-xs font-semibold text-white">John Doe</p>
            <p className="text-[10px] text-slate-500">Premium Plan</p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-trust to-blue-500 flex items-center justify-center border border-white/10 shadow-lg shadow-teal-trust/10">
            <User className="text-obsidian w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
