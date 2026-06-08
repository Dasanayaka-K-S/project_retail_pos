import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

/**
 * App — root component.
 * Header and Sidebar are here so they appear on every page automatically.
 */
function App() {
  return (
    <div className="app-layout">

      {/* Left Sidebar */}
      <Sidebar />

      {/* Right side — Header + Page Content */}
      <div className="app-right">
        <Header pageTitle="Create Transaction" />
        <main className="app-content">
          <Dashboard />
        </main>
      </div>

    </div>
  );
}

export default App;