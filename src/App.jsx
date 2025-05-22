import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import Course from "./Website/Pages/Course";
import Blog from "./Website/Pages/Blog";
import Contact from "./Website/Pages/Contact";
import Pages from "./Website/Pages/Pages";
import Team from "./Team";
import Test from "./Test";
import Four from "./Four";
import Dashboard from "./Website/Pages/Admin/Pages/Dashboard";
import AddForm from "./Website/Pages/Admin/Pages/addForm";
import Dashboard1 from "./Website/Pages/Admin/Pages/Dashboard1";
import AddFormabout from "./Website/Pages/Admin/Pages/Addabout";
import Alogin from "./Website/Pages/Admin/Pages/Alogin";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feature" element={<Pages />} />
          <Route path="/team" element={<Team />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Four />} />
          <Route path="/back" element={<Home />} />
          {/* Admin */}
          <Route path="/Acourse" element={<Dashboard />} />
          <Route path="/addform" element={<AddForm />} />
          <Route path="/Aabout"  element={<Dashboard1 />}/>
          <Route path="/addformabout" element={<AddFormabout/>}/>
          <Route path="/alogin" element={<Alogin/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
