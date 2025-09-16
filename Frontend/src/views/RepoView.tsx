import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function RepoView() {
    const {userName} = useParams();
    const [repos, setRepos] = useState<any[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5141/api/git/${userName}`).then(async(res) =>{
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error);
            }
            return res.json();
        }).then((data) => {
            setRepos(data);
            setError("");
        }).catch((err) => {
            setError(err.message);
            setRepos([]);
        });
    }, [userName]);
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
            <h1 className="text-3xl font-bold text-blue-600">
                Repositorios de {userName}
            </h1>

            <Link to="/" className="text-blue-500 hover:underline mb-4">
                Volver
            </Link>

            {error && <p className="text-red-500">{error}</p>}

            {repos.length > 0 && (
                <ul className="w-full max-w-xl bg-gray-100 rounded-lg shadow-lg p-4">
                {repos.map((repo, i) => (
                    <li key={i} className="border-b last:border-none py-2">
                    <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        {repo.name}
                    </a>
                    </li>
                ))}
                </ul>
            )}
            </div>
        </>
    )
}
