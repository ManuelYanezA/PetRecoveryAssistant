//import React from "react";
import { Link } from "react-router-dom";

const Calendar_page = () => {
    return(
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Calendario de Controles</h1>
            <p>Esta página es para mostrar las fechas en las que se debe ir a control médico</p>
            <Link to="/">
                <button style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
                    Volver al menú principal
                </button>
            </Link>
        </div>
    );
};

export default Calendar_page;