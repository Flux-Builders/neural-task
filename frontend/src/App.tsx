import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ExecutiveHub from "./pages/ExecutiveHub";
import PriorityMatrix from "./pages/PriorityMatrix";
import NeuralInbox from "./pages/NeuralInbox";
import AICopilot from "./pages/AICopilot";
import FlowAnalytics from "./pages/FlowAnalytics";
import Automations from "./pages/Automations";
import TeamSynergy from "./pages/TeamSynergy";
import NeuralSearch from "./pages/NeuralSearch";
import SettingsPage from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - No Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* App Routes - With MainLayout */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<ExecutiveHub />} />
                <Route path="/matrix" element={<PriorityMatrix />} />
                <Route path="/inbox" element={<NeuralInbox />} />
                <Route path="/copilot" element={<AICopilot />} />
                <Route path="/analytics" element={<FlowAnalytics />} />
                <Route path="/automations" element={<Automations />} />
                <Route path="/team" element={<TeamSynergy />} />
                <Route path="/search" element={<NeuralSearch />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route
                  path="*"
                  element={
                    <div className="flex items-center justify-center min-h-[50vh] text-slate-500 font-bold p-12 glass-card m-12">
                      Neural Path Indexing Error: Screen under development.
                    </div>
                  }
                />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
