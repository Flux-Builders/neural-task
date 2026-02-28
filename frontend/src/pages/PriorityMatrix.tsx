import { useState } from "react";
import { Grid3X3, Plus, Trash2, Edit3, Save, X } from "lucide-react";

interface Task {
  id: string;
  title: string;
  urgency: number; // 1-4 (Low to Critical)
  importance: number; // 1-4 (Low to Critical)
  quadrant: "Q1" | "Q2" | "Q3" | "Q4";
  createdAt: Date;
}

const PriorityMatrix = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Complete quarterly report",
      urgency: 4,
      importance: 4,
      quadrant: "Q1",
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Schedule team meeting",
      urgency: 3,
      importance: 2,
      quadrant: "Q3",
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "Research new technologies",
      urgency: 1,
      importance: 3,
      quadrant: "Q2",
      createdAt: new Date(),
    },
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    urgency: 3,
    importance: 3,
  });

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const quadrants = [
    {
      id: "Q1",
      name: "Urgent & Important",
      color: "bg-red-500/20 border-red-500/30",
      description: "Do Now",
    },
    {
      id: "Q2",
      name: "Not Urgent & Important",
      color: "bg-blue-500/20 border-blue-500/30",
      description: "Schedule",
    },
    {
      id: "Q3",
      name: "Urgent & Not Important",
      color: "bg-amber-500/20 border-amber-500/30",
      description: "Delegate",
    },
    {
      id: "Q4",
      name: "Not Urgent & Not Important",
      color: "bg-gray-500/20 border-gray-500/30",
      description: "Eliminate",
    },
  ];

  const getQuadrantTasks = (quadrantId: string) => {
    return tasks.filter((task) => task.quadrant === quadrantId);
  };

  const addTask = () => {
    if (!newTask.title.trim()) return;

    const quadrantMap: Record<string, "Q1" | "Q2" | "Q3" | "Q4"> = {
      "1,1": "Q4",
      "1,2": "Q2",
      "1,3": "Q2",
      "1,4": "Q2",
      "2,1": "Q3",
      "2,2": "Q3",
      "2,3": "Q1",
      "2,4": "Q1",
      "3,1": "Q3",
      "3,2": "Q3",
      "3,3": "Q1",
      "3,4": "Q1",
      "4,1": "Q3",
      "4,2": "Q3",
      "4,3": "Q1",
      "4,4": "Q1",
    };

    const quadrantKey =
      `${newTask.urgency},${newTask.importance}` as keyof typeof quadrantMap;
    const quadrant = quadrantMap[quadrantKey] || "Q3";

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      urgency: newTask.urgency,
      importance: newTask.importance,
      quadrant,
      createdAt: new Date(),
    };

    setTasks([...tasks, task]);
    setNewTask({ title: "", urgency: 3, importance: 3 });
    setIsAdding(false);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setNewTask({
      title: task.title,
      urgency: task.urgency,
      importance: task.importance,
    });
  };

  const saveEdit = () => {
    if (!editingId || !newTask.title.trim()) return;

    setTasks(
      tasks.map((task) => {
        if (task.id === editingId) {
          const quadrantMap: Record<string, "Q1" | "Q2" | "Q3" | "Q4"> = {
            "1,1": "Q4",
            "1,2": "Q2",
            "1,3": "Q2",
            "1,4": "Q2",
            "2,1": "Q3",
            "2,2": "Q3",
            "2,3": "Q1",
            "2,4": "Q1",
            "3,1": "Q3",
            "3,2": "Q3",
            "3,3": "Q1",
            "3,4": "Q1",
            "4,1": "Q3",
            "4,2": "Q3",
            "4,3": "Q1",
            "4,4": "Q1",
          };

          const quadrantKey =
            `${newTask.urgency},${newTask.importance}` as keyof typeof quadrantMap;
          const quadrant = quadrantMap[quadrantKey] || "Q3";

          return {
            ...task,
            title: newTask.title,
            urgency: newTask.urgency,
            importance: newTask.importance,
            quadrant,
          };
        }
        return task;
      }),
    );

    setEditingId(null);
    setNewTask({ title: "", urgency: 3, importance: 3 });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewTask({ title: "", urgency: 3, importance: 3 });
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <p className="text-teal-trust text-sm font-semibold tracking-wider uppercase">
            Strategic Planning
          </p>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 flex items-center gap-3">
            <Grid3X3 className="w-8 h-8" />
            Priority Matrix
          </h1>
          <p className="text-slate-400 max-w-lg">
            Visualize and prioritize tasks using the Eisenhower Matrix
            framework. Focus on what matters most.
          </p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="btn-primary flex items-center gap-2 shadow-xl shadow-teal-trust/20"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      {/* Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quadrants.map((quadrant) => (
          <div
            key={quadrant.id}
            className={`glass-card p-6 border ${quadrant.color} flex flex-col`}
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                {quadrant.name}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {quadrant.description}
              </p>
            </div>

            <div className="flex-1 space-y-3">
              {getQuadrantTasks(quadrant.id).map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-white/5 border border-white/5 rounded-2xl group hover:bg-white/10 transition-all"
                >
                  {editingId === task.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={newTask.title}
                        onChange={(e) =>
                          setNewTask({ ...newTask, title: e.target.value })
                        }
                        className="w-full bg-obsidian-lighter border border-white/10 rounded-lg px-3 py-2 text-sm"
                        placeholder="Task title"
                      />
                      <div className="flex gap-2">
                        <select
                          value={newTask.urgency}
                          onChange={(e) =>
                            setNewTask({
                              ...newTask,
                              urgency: parseInt(e.target.value),
                            })
                          }
                          className="flex-1 bg-obsidian-lighter border border-white/10 rounded-lg px-2 py-1 text-xs"
                        >
                          <option value="1">Low Urgency</option>
                          <option value="2">Medium Urgency</option>
                          <option value="3">High Urgency</option>
                          <option value="4">Critical Urgency</option>
                        </select>
                        <select
                          value={newTask.importance}
                          onChange={(e) =>
                            setNewTask({
                              ...newTask,
                              importance: parseInt(e.target.value),
                            })
                          }
                          className="flex-1 bg-obsidian-lighter border border-white/10 rounded-lg px-2 py-1 text-xs"
                        >
                          <option value="1">Low Importance</option>
                          <option value="2">Medium Importance</option>
                          <option value="3">High Importance</option>
                          <option value="4">Critical Importance</option>
                        </select>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={saveEdit}
                          className="flex-1 btn-primary text-xs py-1 flex items-center justify-center gap-1"
                        >
                          <Save className="w-3 h-3" />
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex-1 btn-secondary text-xs py-1 flex items-center justify-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-medium pr-8 mb-2">
                        {task.title}
                      </p>
                      <div className="flex justify-between text-[10px]">
                        <span className="bg-white/10 px-2 py-0.5 rounded">
                          Urgency:{" "}
                          {
                            ["Low", "Medium", "High", "Critical"][
                              task.urgency - 1
                            ]
                          }
                        </span>
                        <span className="bg-white/10 px-2 py-0.5 rounded">
                          Importance:{" "}
                          {
                            ["Low", "Medium", "High", "Critical"][
                              task.importance - 1
                            ]
                          }
                        </span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => startEdit(task)}
                          className="text-[10px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded flex items-center gap-1"
                        >
                          <Edit3 className="w-2.5 h-2.5" />
                          Edit
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-[10px] bg-red-500/10 hover:bg-red-500/20 text-red-400 px-2 py-1 rounded flex items-center gap-1"
                        >
                          <Trash2 className="w-2.5 h-2.5" />
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {getQuadrantTasks(quadrant.id).length === 0 && (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No tasks in this quadrant
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Form */}
      {isAdding && (
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-4">Add New Task</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="w-full bg-obsidian-lighter border border-white/10 rounded-lg px-3 py-2"
              placeholder="Enter task title"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Urgency
                </label>
                <select
                  value={newTask.urgency}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      urgency: parseInt(e.target.value),
                    })
                  }
                  className="w-full bg-obsidian-lighter border border-white/10 rounded-lg px-3 py-2"
                >
                  <option value="1">Low Urgency</option>
                  <option value="2">Medium Urgency</option>
                  <option value="3">High Urgency</option>
                  <option value="4">Critical Urgency</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Importance
                </label>
                <select
                  value={newTask.importance}
                  onChange={(e) =>
                    setNewTask({
                      ...newTask,
                      importance: parseInt(e.target.value),
                    })
                  }
                  className="w-full bg-obsidian-lighter border border-white/10 rounded-lg px-3 py-2"
                >
                  <option value="1">Low Importance</option>
                  <option value="2">Medium Importance</option>
                  <option value="3">High Importance</option>
                  <option value="4">Critical Importance</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={addTask} className="btn-primary flex-1">
                Add Task
              </button>
              <button
                onClick={() => {
                  setIsAdding(false);
                  setNewTask({ title: "", urgency: 3, importance: 3 });
                }}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-bold mb-4">Eisenhower Matrix Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
            <h4 className="font-bold text-sm">Q1: Urgent & Important</h4>
            <p className="text-xs text-slate-400 mt-1">
              Do Now - Crisis management, pressing problems
            </p>
          </div>
          <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-xl">
            <h4 className="font-bold text-sm">Q2: Not Urgent & Important</h4>
            <p className="text-xs text-slate-400 mt-1">
              Schedule - Planning, prevention, development
            </p>
          </div>
          <div className="p-3 bg-amber-500/20 border border-amber-500/30 rounded-xl">
            <h4 className="font-bold text-sm">Q3: Urgent & Not Important</h4>
            <p className="text-xs text-slate-400 mt-1">
              Delegate - Interruptions, some meetings
            </p>
          </div>
          <div className="p-3 bg-gray-500/20 border border-gray-500/30 rounded-xl">
            <h4 className="font-bold text-sm">
              Q4: Not Urgent & Not Important
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Eliminate - Time wasters, busy work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriorityMatrix;
