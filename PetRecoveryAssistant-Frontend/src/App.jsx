import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu_ele from "./components/mainmenu";
import Treatment_ele from "./pages/treatment";
import Calendar_ele from "./pages/calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu_ele />} />
        <Route path="/treatment" element={<Treatment_ele />} />
        <Route path="/calendar" element={<Calendar_ele />} />
      </Routes>
    </Router>
  );
}

export default App;