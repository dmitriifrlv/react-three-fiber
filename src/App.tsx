import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout/Layout";
import { Boxes } from "./Pages/Boxes/Boxes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="boxes" element={<Boxes />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
