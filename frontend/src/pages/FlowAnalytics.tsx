import {
  BarChart3,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Filter,
  Download,
} from "lucide-react";

const FlowAnalytics = () => {
  const stats = [
    { label: "Flow Efficiency", value: "94.2%", change: "+2.4%", trend: "up" },
    { label: "Tasks Completed", value: "1,284", change: "+12%", trend: "up" },
    { label: "Avg. Cycle Time", value: "4.2h", change: "-0.5h", trend: "down" },
    {
      label: "Neural Sync Rate",
      value: "99.9%",
      change: "Stable",
      trend: "neutral",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">
            Neural Data Synthesis
          </p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <BarChart3 className="w-8 h-8" />
            Flow Analytics
          </h1>
          <p className="text-slate-400 max-w-lg">
            Real-time visualization of your productivity metrics and neural
            processing efficiency.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="glass-card p-6 flex flex-col justify-between group hover:border-teal-trust/20 transition-all"
          >
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
              {stat.label}
            </p>
            <div className="mt-2 flex items-end justify-between">
              <h3 className="text-3xl font-black text-white">{stat.value}</h3>
              <span
                className={`text-[10px] font-bold px-2 py-1 rounded-full border ${
                  stat.trend === "up"
                    ? "text-green-400 bg-green-400/10 border-green-400/20"
                    : stat.trend === "down"
                      ? "text-amber-strategic bg-amber-strategic/10 border-amber-strategic/20"
                      : "text-slate-400 bg-white/5 border-white/10"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-8 glass-card p-6 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-trust" />
              Throughput Velocity
            </h3>
            <div className="flex gap-2">
              <button className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-2 px-2">
            {[45, 60, 40, 80, 55, 70, 90, 65, 50, 85, 75, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-white/5 rounded-t-lg relative group transition-all hover:bg-teal-trust/20"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-trust/40 to-teal-trust/10 rounded-t-lg transition-all"
                  style={{ height: `${h}%` }}
                ></div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-obsidian-darker border border-white/10 px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {h} units
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Side Panels */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              Time Allocation
            </h3>
            <div className="space-y-4">
              {[
                { label: "Deep Work", value: 65, color: "bg-teal-trust" },
                { label: "Collaborative", value: 20, color: "bg-purple-400" },
                {
                  label: "Administrative",
                  value: 15,
                  color: "bg-amber-strategic",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white font-bold">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border-teal-trust/10 bg-teal-trust/5">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-teal-trust">
              <TrendingUp className="w-4 h-4" />
              Efficiency Insight
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed italic">
              "Your throughput is **22% higher** during morning sessions when
              the Neural Search engine is active. Consider shifting complex
              refactoring to these blocks."
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Goal Progress
            </h3>
            <div className="flex items-center justify-center py-4">
              <div className="relative w-32 h-32 rounded-full border-4 border-white/5 border-t-teal-trust flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">82%</p>
                  <p className="text-[8px] text-slate-500 uppercase font-bold">
                    Quarterly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowAnalytics;
