import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./pages/Example";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
