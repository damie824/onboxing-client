import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global/global.scss";

import Layout from "./components/layout";
import Main from "./pages/main";
import Delviery from "./pages/delivery/delivery";
import Login from "./pages/login/login";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/delivery/:id" element={<Delviery />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
