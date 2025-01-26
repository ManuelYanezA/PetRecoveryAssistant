//import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Seguimiento_ele from "./pages/treatment";
import Calendario_ele from "./pages/calendar";
import MedCalc_ele from "./pages/medCalc";

/*Note to self (ESP): Esta página funciona como el header de toda la app, es decir, al seleccionar alguna
opción, el menú no se moverá de lugar, por el momento, me limitaré a dejar todo arriba de forma que no
moleste al resto de la página de las opciones de más abajo, en el futuro se podría lograr que esto funcione
de forma diferente.
*/
function App(){
  return(
    <div style={containerStyle}>
      {/* Page Title */}
      <h2 style={{ marginBottom: "5px" }}>PetRecoveryAssistant</h2>

      {/* Navigation Menu */}
      <nav>
        <ul style={navStyle}>
          <Link to="/treatment">
            <button style={buttonStyle}>Seguimiento de Tratamiento</button>
          </Link>
          <Link to="/calendar">
            <button style={buttonStyle}>Calendario de Controles</button>
          </Link>
          <Link to="/medCalc">
            <button style={buttonStyle}>Calculadora de Medicinas</button>
          </Link>
        </ul>
      </nav>

      {/* Option Routes */}
      <Routes>
        <Route path="/treatment" element={<Seguimiento_ele/>}/>
        <Route path="/calendar" element={<Calendario_ele/>}/>
        <Route path="/medCalc" element={<MedCalc_ele/>}/>
        <Route path="/" element={null}/>
      </Routes>

    </div>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignitems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  padding: "20px",
  boxSizing: "border-box",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#007BFF",
  color: "white",
  cursor: "pointer",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
};

buttonStyle[":hover"] = {
  backgroundColor: "#0056b3",
};

export default App;