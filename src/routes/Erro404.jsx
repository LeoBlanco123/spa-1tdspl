import { Link } from "react-router-dom"

export default function Erro404(){
    return(
        <div>
            <h1>Está pagina não existe</h1>
            <p>Retorne para o inicio <span><Link to='/'>INICIO</Link></span></p>
        </div>
    )
}