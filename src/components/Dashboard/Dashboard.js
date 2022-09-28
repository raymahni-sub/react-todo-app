import "./Dashboard.css";

// Component Imports
import TaskStats from "./TaskStats/TaskStats";

function Dashboard() {
  return (
    <div className="Dashboard-area">
      <TaskStats />
    </div>
  );
}

export default Dashboard;
