import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import AddPlayer from "./components/AddPlayer";
import EditPlayer from "./components/EditPlayer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<PlayerList />} />
          <Route path="add" element={<AddPlayer />} />
          <Route path="edit/:id" element={<EditPlayer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
