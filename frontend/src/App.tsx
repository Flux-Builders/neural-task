import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ExecutiveHub from './pages/ExecutiveHub';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ExecutiveHub />} />
          {/* Add other routes here */}
          <Route path="*" element={<div className="flex items-center justify-center min-h-[50vh] text-slate-500 font-bold p-12 glass-card m-12">Neural Path Indexing Error: Screen under development.</div>} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
