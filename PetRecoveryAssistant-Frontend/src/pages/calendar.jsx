import { Link } from "react-router-dom";
import "../styles/styles.css";

const Calendar_page = () => {
    return(
        <div className="container">
            <h1 className="title">Calendario de Controles</h1>
            <p className="text-wrapper">Esta página es para mostrar las fechas en las que se debe ir a control médico</p>
            <Link to="/">
                <button className="button">
                    Volver al menú principal
                </button>
            </Link>
        </div>
    );
};

export default Calendar_page;