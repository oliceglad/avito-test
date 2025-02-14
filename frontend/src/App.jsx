import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { FormPage } from "./pages/FormPage";
import { ItemPage } from "./pages/ItemPage";
import { ListPage } from "./pages/ListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/form" Component={FormPage} />
          <Route path="/item/:id" Component={ItemPage} />
          <Route path="/list" Component={ListPage} />
          <Route path="*" element={<Navigate to="/list" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
