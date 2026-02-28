import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Cpu, 
  Mail, 
  Lock, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Github,
  User,
  Activity
} from 'lucide-react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Neural Network Effect (Simulated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-trust/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-700">
        <div className="glass-card p-8 bg-gradient-to-b from-white/5 to-transparent border-white/10 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-teal-trust rounded-2xl flex items-center justify-center mb-4 shadow-xl shadow-teal-trust/20">
              <Cpu className="text-obsidian w-10 h-10" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Neural Request</h1>
            <p className="text-slate-500 text-sm mt-1">Index your pilot profile in the network</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Pilot Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-teal-trust transition-colors" />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Pilot Connor"
                  className="w-full bg-obsidian-darker border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-teal-trust/50 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-teal-trust transition-colors" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="pilot@neural-task.ai"
                  className="w-full bg-obsidian-darker border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-teal-trust/50 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-teal-trust transition-colors" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-obsidian-darker border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-teal-trust/50 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-teal-trust mt-0.5" id="terms" required />
              <label htmlFor="terms" className="text-xs text-slate-400 leading-relaxed">
                I agree to the <span className="text-teal-trust font-bold hover:underline cursor-pointer">Neural Protocol Terms</span> and the <span className="text-teal-trust font-bold hover:underline cursor-pointer">Data Privacy Synthesis</span>
              </label>
            </div>

            <button 
              type="submit"
              className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg font-bold shadow-xl shadow-teal-trust/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Request Indexing <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-obsidian-lighter px-4 text-slate-600 font-bold tracking-widest">External Indexing</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="btn-secondary py-3 flex items-center justify-center gap-2 text-xs font-bold border-white/5 hover:bg-white/5 transition-all">
                <Github className="w-4 h-4" /> Github
              </button>
              <button className="btn-secondary py-3 flex items-center justify-center gap-2 text-xs font-bold border-white/5 hover:bg-white/5 transition-all">
                <Zap className="w-4 h-4 text-amber-strategic" /> SSO
              </button>
            </div>
          </div>

          <p className="text-center text-slate-500 text-xs mt-8">
            Already in the network? {' '}
            <Link to="/login" className="text-teal-trust font-bold hover:underline">Access Hub</Link>
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
            Neural Encrypted
          </div>
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            High-Speed Sync
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;