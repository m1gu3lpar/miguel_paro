import { useState } from "react";


export default function Home() {
    const [diagrama, setDiagrama] = useState("diagrama-clases.png");

    return (
        <div className="container">
            <h1>Mercado Agro</h1>

            {/* 📌 TABLA DEL CRONOGRAMA DE ACTIVIDADES */}
            <div className="cronograma">
                <h2>Cronograma de Actividades (SCRUM)</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Historia de Usuario</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HU-01</td>
                            <td>Configurar Next.js y GitHub</td>
                            <td className="estado-completado">✅ Completado</td>
                        </tr>
                        <tr>
                            <td>HU-02</td>
                            <td>Subir los diagramas UML</td>
                            <td className="estado-completado">✅ Completado</td>
                        </tr>
                        <tr>
                            <td>HU-03</td>
                            <td>Mostrar diagramas en la web</td>
                            <td className="estado-completado">✅ Completado</td>
                        </tr>
                        <tr>
                            <td>HU-05</td>
                            <td>Mejorar el diseño visual</td>
                            <td className="estado-completado">✅ Completado</td>
                        </tr>
                        <tr>
                            <td>HU-07</td>
                            <td>Hacer la página responsiva</td>
                            <td className="estado-en-progreso">🔄 En progreso</td>
                        </tr>
                        <tr>
                            <td>HU-12</td>
                            <td>Entrega final del proyecto</td>
                            <td className="estado-pendiente">🔲 Pendiente</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 📌 BOTONES PARA CAMBIAR ENTRE DIAGRAMAS */}
            <div className="button-container">
                {[
                    { name: "Diagrama de Clases", file: "diagrama-clases.png" },
                    { name: "Diagrama de Objetos", file: "diagrama-objetos.png" },
                    { name: "Diagrama de Componentes", file: "diagrama-componentes.png" },
                    { name: "Diagrama de Despliegue", file: "diagrama-despliegue.png" },
                    { name: "Diagrama de Paquetes", file: "diagrama-paquetes.png" },
                    { name: "Diagrama de Casos de Uso", file: "diagrama-casos-uso.png" },
                    { name: "Diagrama de Actividades", file: "diagrama-actividades.png" },
                    { name: "Diagrama de Estados", file: "diagrama-estados.png" },
                    { name: "Diagrama de Secuencia", file: "diagrama-secuencia.png" },
                    { name: "Diagrama de Comunicación", file: "diagrama-comunicacion.png" },
                ].map(({ name, file }) => (
                    <button key={file} onClick={() => setDiagrama(file)}>
                        {name}
                    </button>
                ))}
            </div>

            {/* 📌 IMAGEN DEL DIAGRAMA SELECCIONADO */}
            <img src={`/${diagrama}`} alt="Diagrama UML" />
        </div>
    );
}
