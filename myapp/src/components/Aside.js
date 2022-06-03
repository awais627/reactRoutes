import React from "react";
import { Outlet, Routes, Route, Link } from "react-router-dom";

const Aside = ({ route }) => {
  return (
    <div>
      <div>Aside1 </div>
      <nav>
        <Link className="link" to="aside1">
          Aside2
        </Link>
        <Link className="link" to="aside2">
          Aside3
        </Link>
        <Link className="link" to="aside3">
          Aside3
        </Link>
      </nav>
      <Routes>
        {route.route.map(({ path, Component }) => (
          <Route path={path} element={<Component />}></Route>
        ))}
      </Routes>
    </div>
  );
};

export default Aside;
