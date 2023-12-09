import "./App.css";
import { ViewProvider } from "./context/ViewContext";
import FixHeader from "./components/FixHeader";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className='h-full overflow-hidden min-h-screen'>
      <ViewProvider>
        <FixHeader />
        <Homepage />
      </ViewProvider>
    </div>
  );
}

export default App;
