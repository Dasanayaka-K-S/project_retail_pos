import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

/**
 * App — root component.
 * Renders the sidebar nav and the main dashboard page.
 */
function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-content">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
