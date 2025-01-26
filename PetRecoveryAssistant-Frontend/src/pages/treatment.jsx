//import React from "react";
import { Link } from "react-router-dom";

const Treatment_page = () => {
    return(
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Seguimiento de Tratamiento</h1>
            <p>Esta página es para hacer seguimiento del tratamiento, como a qué horas dar cuál medicina.</p>
            <Link to="/">
                <button style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
                    Volver al menú principal
                </button>
            </Link>
        </div>
    );
};

export default Treatment_page;