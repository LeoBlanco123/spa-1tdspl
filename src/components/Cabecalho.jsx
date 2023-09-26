import { createElement } from "react";
export default function Cabecalho(props){

    return(
        <>
        <header>
            <h1>Vite + React / Coded By - Blanco</h1>
            <ul>

                {
                    props.children.map((item, index) =>{ 
                        createElement("li", {key: index}, item);
                        return item;
                    })
                    
                }

            </ul>
        </header>

        </>
    )
}