import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./styles/global/global.scss";

import Layout from "./components/layout";
import Main from "./pages/main";
import Login from "./pages/login/login";
import DelvieryInfo from "./pages/delivery/deliveryInfo";
import Delivery from "./pages/delivery/delivery";
import Purchase from "./pages/purchase/purchase";
import ChatRoom from "./pages/chats/chatroom";
import Chats from "./pages/chats/chat";
import Me from "./pages/me/me";
import Search from "./pages/search/search";
import Product from "./pages/product/product";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/delivery/:id" element={<DelvieryInfo />} />
            <Route path="/chats" element={<ChatRoom />} />
            <Route path="/chats/:id" element={<Chats />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/search" element={<Search />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
