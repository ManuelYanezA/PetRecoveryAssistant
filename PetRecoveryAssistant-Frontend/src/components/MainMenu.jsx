import { Link } from "react-router-dom";
import "../styles/styles.css";

function MainMenu() {
    return(
        <div className="container">
            <h2 className="title">PetRecoveryAssistant</h2>
            <div className="button-container">
                <Link to="/calendar">
                    <button className="button">Calendario de Tratamiento</button>
                </Link>
                <Link to="/treatment">
                    <button className="button">Seguimiento de Tratamiento</button>
                </Link>
                <Link to="/treatment">
                    <button style={buttonStyle}>Alarmas de Tratamiento</button>
                </Link>
            </div>
        </div>
    );
}

export default MainMenu;