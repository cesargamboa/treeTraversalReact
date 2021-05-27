import Home from "./Modules/home";
import AppState from "./context/AppState";
import "./App.css";
function App() {
  return (
    <div className="App">
      <AppState>
        <Home />
      </AppState>
    </div>
  );
}

export default App;
