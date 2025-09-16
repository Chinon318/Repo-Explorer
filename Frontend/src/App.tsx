import Buscador from "./views/Buscador";
import { Route, Routes } from "react-router-dom";
import RepoView from "./views/RepoView";

export default function App() {
    return (
      <Routes>
        <Route path="/" element={<Buscador/>}/>
        <Route path="/resultado/:userName" element={<RepoView/>}/>
      </Routes>
    )
}
