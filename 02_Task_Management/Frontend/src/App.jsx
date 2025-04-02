import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alltasks from "./Pages/Alltasks";
import Importanttasks from "./Pages/Importanttasks";
import Completedtasks from "./Pages/Completedtasks";
import Incompleted from "./Pages/Incompleted";
import Signup from "./Pages/signup";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Alltasks />} />
            <Route path="/importanttasks" element={<Importanttasks />} />
            <Route path="/completedtasks" element={<Completedtasks />} />
            <Route path="/incompletedtasks" element={<Incompleted />} />
          </Route>

          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
