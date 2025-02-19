import { Link } from "react-router-dom";
import "../styles/styles.css";

const Treatment_page = () => {
    return(
        <div className="container">
            <h1 className="title">Seguimiento de Tratamiento</h1>
            <p className="text-wrapper">Esta página es para hacer seguimiento del tratamiento, como a qué horas dar cuál medicina.</p>
            <Link to="/">
                <button className="button">
                    Volver al menú principal
                </button>
            </Link>
        </div>
    );
};

export default Treatment_page;