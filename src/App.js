import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Auth from './pages/Auth/Auth';
import {Router} from "react-router-dom"
import Chatpage from './pages/ChatPage/ChatPage';
import NoPage from './pages/NoPage/Nopage';
import UserSearchModal from './Component/UserSearchModal/UserSearchModal';
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/chat" element={<Chatpage/> } />
        <Route path="/modal" element={<UserSearchModal />} />
        <Route path='/*' element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;