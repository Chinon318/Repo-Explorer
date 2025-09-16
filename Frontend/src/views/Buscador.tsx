import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Buscador() {
    const[userName, setUserName] = useState("");
    const navigate = useNavigate();
    

    async function BuscarRepo(e: React.FormEvent) {
        e.preventDefault();
        if(userName.trim() ==="")return;
        navigate(`/resultado/${userName.trim()}`)
    }


    return (
        <>
            <div className=" flex flex-col items-center justify-center h-screen gap-6">
                <h1 className=" text-4xl font-bold text-blue-600">
                    Encuentra todos los repositorios que quieras
                </h1>

                <form
                    onSubmit={BuscarRepo}
                    className=" flex flex-col items-center gap-3"
                >
                    <input 
                        type="text" 
                        placeholder="Escribe un usuario de GitHub"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className=" w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus: outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="px-4 py-2 w-80 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                            Buscar
                    </button>
                </form>
            </div>
        </>
        
    )
}
