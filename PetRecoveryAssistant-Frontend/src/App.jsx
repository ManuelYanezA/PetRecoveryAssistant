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
    <div style={{ padding: "20px" }}>
      {/* Page Title */}
      <h2>Bienvenido al menú principal</h2>

      {/* Menu */}
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/treatment">Seguimiento de Tratamiento</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/calendar">Calendario de Controles</Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/medCalc">Calculadora de Medicamentos</Link>
          </li>
        </ul>
      </nav>

      {/* Option Routes */}
      <Routes>
        <Route path="/" element={null}/>
        <Route path="/treatment" element={<Seguimiento_ele/>}/>
        <Route path="/calendar" element={<Calendario_ele/>}/>
        <Route path="/medCalc" element={<MedCalc_ele/>}/>
      </Routes>

    </div>
  );
}

export default App;