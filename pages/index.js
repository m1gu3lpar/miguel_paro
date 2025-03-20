import { useState } from "react";

export default function Home() {
    const [diagrama, setDiagrama] = useState("diagrama-clases.png");

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Diagramas UML - Agro</h1>

            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => setDiagrama("diagrama-clases.png")}>Diagrama de Clases</button>
                <button onClick={() => setDiagrama("diagrama-objetos.png")}>Diagrama de Objetos</button>
                <button onClick={() => setDiagrama("diagrama-componentes.png")}>Diagrama de Componentes</button>
                <button onClick={() => setDiagrama("diagrama-despliegue.png")}>Diagrama de Despliegue</button>
                <button onClick={() => setDiagrama("diagrama-paquetes.png")}>Diagrama de Paquetes</button>
                <button onClick={() => setDiagrama("diagrama-casos-uso.png")}>Diagrama de Casos de Uso</button>
                <button onClick={() => setDiagrama("diagrama-actividades.png")}>Diagrama de Actividades</button>
                <button onClick={() => setDiagrama("diagrama-estados.png")}>Diagrama de Estados</button>
                <button onClick={() => setDiagrama("diagrama-secuencia.png")}>Diagrama de Secuencia</button>
                <button onClick={() => setDiagrama("diagrama-comunicacion.png")}>Diagrama de Comunicación</button>
            </div>

            <img src={`/${diagrama}`} alt="Diagrama UML" width="600px" />
        </div>
    );
}
