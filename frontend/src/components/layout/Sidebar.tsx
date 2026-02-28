import { 
  LayoutDashboard, 
  Grid3X3, 
  Inbox, 
  Cpu, 
  BarChart3, 
  Zap, 
  Users, 
  Search, 
  Settings,
  LogOut
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Executive Hub', path: '/' },
  { icon: Grid3X3, label: 'Priority Matrix', path: '/matrix' },
  { icon: Inbox, label: 'Neural Inbox', path: '/inbox' },
  { icon: Cpu, label: 'AI Co-Pilot', path: '/copilot' },
  { icon: BarChart3, label: 'Flow Analytics', path: '/analytics' },
  { icon: Zap, label: 'Automations', path: '/automations' },
  { icon: Users, label: 'Team Synergy', path: '/team' },
  { icon: Search, label: 'Neural Search', path: '/search' },
  { icon: Settings, label: 'API Settings', path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate logout
    navigate('/login');
  };

  return (
    <aside className="w-64 h-screen bg-obsidian-lighter border-r border-white/5 flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-teal-trust rounded-lg flex items-center justify-center">
          <Cpu className="text-obsidian w-5 h-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-white">Neural Task</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-2xl transition-all ${
              location.pathname === item.path
                ? 'bg-teal-trust/10 text-teal-trust'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 w-full text-slate-400 hover:text-red-400 hover:bg-red-400/5 rounded-2xl transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
