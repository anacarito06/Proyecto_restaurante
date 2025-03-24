// App.jsx
import { Routes, Route } from "react-router-dom";  // Eliminamos BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import { CarritoProvider } from "./context/CarritoContext";
import { AuthProvider } from "./context/AuthContext";
import './App.css';
import PedidosAdmin from './components/Admin/PedidosAdmin';
import RutaProtegida from "./components/RutaProtegida";

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />

          {/* Ruta protegida para administradores */}
          <Route 
            path="/admin/pedidosAdmin" 
            element={
              <RutaProtegida>
                <PedidosAdmin />
              </RutaProtegida>
            } 
          />
        </Routes>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;

