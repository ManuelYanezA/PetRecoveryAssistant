import { Link } from "react-router-dom";
import "../styles/styles.css";
import { useState } from "react";
import Calendar from 'react-calendar';

const Calendar_page = () => {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue){
        setValue(nextValue);
    }
    return(
        <div className="container">
            <h1 className="title">Calendario de Controles</h1>
            <Calendar
                onChange={onChange}
                value={value}
            />
            <Link to="/">
                <button className="button">
                    Volver al menú principal
                </button>
            </Link>
        </div>
    );
};

export default Calendar_page;

//<p className="text-wrapper">Esta página es para mostrar las fechas en las que se debe ir a control médico</p>