import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import ErrorPage from "./components/ErrorPage";
import { routes } from "./constants";
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          {routes &&
            routes.map(({ path, link }) => (
              <Link key={path} className="link" to={path}>
                {link}
              </Link>
            ))}
        </nav>
        <Routes>
          {routes.map(({ path, Component, route }) =>
            route ? (
              <Route path={path} element={<Component route={{ route }} />} />
            ) : (
              <Route path={path} element={<Component />} />
            )
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
