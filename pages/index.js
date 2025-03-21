import { useState } from "react";

export default function Home() {
    const [diagrama, setDiagrama] = useState("diagrama-clases.png");

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Diagramas UML - Agro</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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
                    <button
                        key={file}
                        onClick={() => setDiagrama(file)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
                    >
                        {name}
                    </button>
                ))}
            </div>

            <img
                src={`/${diagrama}`}
                alt="Diagrama UML"
                className="w-3/4 max-w-lg rounded-lg shadow-lg border border-gray-300"
            />
        </div>
    );
}
