import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
