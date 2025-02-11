import { Link } from "react-router-dom";

function MainMenu() {
    return(
        <div style={containerStyle}>
            <h2 style={titleStyle}>PetRecoveryAssistant</h2>
            <div style={buttonContainerStyle}>
                <Link to="/calendar">
                    <button style={buttonStyle}>Calendario de Tratamiento</button>
                </Link>
                <Link to="/treatment">
                    <button style={buttonStyle}>Alarmas de Tratamiento</button>
                </Link>
            </div>
        </div>
    );
}

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
};

const titleStyle = {
    fontSize: "28px",
    marginBottom: "20px",
};

const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
};
const buttonStyle = {
    padding: "15px 30px",
    fontSize: "18px",
    width: "250px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
};

export default MainMenu;