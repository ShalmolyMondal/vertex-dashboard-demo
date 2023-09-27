import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Home from "./pages/Home";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
// import Alerts from "./pages/Alert";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          {/* make dashboard root path */}
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          <Route path="analysis" element={<Analysis />} />
          {/* <Route path="/alert" element={<Alerts />} /> */} */}
        </Route>
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
