import { useState } from "react";

import Flashcards from "./Flashcards";

import logo from "../assets/img/logo.png";

export default function App(){

    const [start, setStart] = useState(false);

    return(
            (start)?

            <div className="container">

                <header>
                    <img src={logo} alt={logo}/>
                    <h1 className="title">ZapRecall</h1>
                </header>

                <Flashcards/>

                <footer className="progressBar">
                    <p>0/4 CONCLUÍDOS</p>
                </footer>
            </div>

            :

            <div className="container initial">
                <img src={logo} alt={logo}/>
                <p>ZapRecall</p>
                <button>Iniciar Recall!</button>
            </div>
        
    );
}