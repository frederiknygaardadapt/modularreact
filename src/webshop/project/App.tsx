import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Header } from "ui/components/Header/Header";
import { Topbar } from "ui/components/Topbar/Topbar";
import { Login } from "./Login";

const App = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
