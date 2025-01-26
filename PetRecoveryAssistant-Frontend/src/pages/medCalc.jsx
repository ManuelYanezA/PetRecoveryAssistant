//import React from "react";
import { Link } from "react-router-dom";

const MedCalc_page = () => {
    return(
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Calculadora de Medicinas</h1>
            <p>Esta página es para calcular cuántas cajas de medicamentos se deben comprar para que duren todo el tratamiento, reduciendo en lo posible la cantidad de compras que debe hacer el usuario.</p>
            <Link to="/">
                <button style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
                    Volver al menú principal
                </button>
            </Link>
        </div>
    );
};

export default MedCalc_page;