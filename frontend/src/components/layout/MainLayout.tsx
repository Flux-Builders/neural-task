import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-obsidian text-slate-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Topbar />
        <main className="p-8 ml-64 min-h-[calc(100vh-64px)]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
