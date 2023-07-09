import { Route, BrowserRouter, Routes } from "react-router-dom";
import FilesPage from "./pages/filesPage";
import TasksPage from "./pages/tasksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<FilesPage />} />
        <Route path="/files" element={<FilesPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
