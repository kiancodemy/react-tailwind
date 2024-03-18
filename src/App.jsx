import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
      </div>

      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
