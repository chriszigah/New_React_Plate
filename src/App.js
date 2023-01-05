import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import { MainLayout } from "./components";

import mainroutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainroutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
