import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseRef1 from "./Hooks/Useref1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UseRef1 />} />
      </Routes>
    </Router>
  );
}

export default App;
