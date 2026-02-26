import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="min-h-screen bg-background-light font-display">
      <Navbar />
      <AboutPage />
      {/* You can add a Footer component here later */}
    </div>
  );
}

export default App;
