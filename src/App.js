// Style Imports
import "./App.css";

// Component Imports
import Header from "./components/shared/Header/Header";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import CreateTask from "./components/CreateTask/CreateTask";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content-area">
        <Header />

        {/* Main Content Area */}
        <div className="d-flex w-100">
          <Dashboard />
          <CreateTask />
        </div>
      </div>
    </div>
  );
}

export default App;
