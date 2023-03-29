import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Produk from "./components/product";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import TestPage from "./pages/test";
import CustomHooks from "./pages/costumhooks";
import ToDoList from "./pages/todolist";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="test" element={<TestPage />}></Route>
        <Route path="custom" element={<CustomHooks />}></Route>
        <Route path="todolist" element={<ToDoList />}></Route>
      </Routes>
    </>
  );
}

export default App;
