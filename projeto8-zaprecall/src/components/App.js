import { useState } from "react";

import Flashcards from "./Flashcards";

import logo from "../assets/img/logo.png";

export default function App(){

    const [start, setStart] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const flashcards = [

        {
            name: "pergunta 1",
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
            showAnswer: false
        },
        {
            name: "pergunta 2",
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces.",
            showAnswer: false
        },
        {
            name: "pergunta 3",
            question: "Componentes devem iniciar com __",
            answer: " letra maiúscula",
            showAnswer: false
        },
        {
            name: "pergunta 4",
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            showAnswer: false
        },
        {
            name: "pergunta 5",
            question: " O ReactDOM nos ajuda __ ",
            answer: " interagindo com a DOM para colocar componentes React na mesma",
            showAnswer: false
        },
        {
            name: "pergunta 6",
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências",
            showAnswer: false
        },
        {
            name: "pergunta 7",
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
            showAnswer: false
        },
        {
            name: "pergunta 8",
            question: "Usamos estado (state) para __ ",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            showAnswer: false
        }
    ];

    const [flashcardsData, setFlashcardsData] = useState(flashcards);


    return(
            (start)?

            <div className="container">

                <header>
                    <img src={logo} alt={logo}/>
                    <h1 className="title">ZapRecall</h1>
                </header>

                <Flashcards 
                    flashcardsData={flashcardsData} 
                    setFlashcardsData={setFlashcardsData}
                    userAnswers={userAnswers} 
                    setUserAnswers={setUserAnswers}
                />

                <footer className="progressBar">
                    <p>{userAnswers.length}/{flashcards.length} CONCLUÍDOS</p>
                </footer>
            </div>

            :

            <div className="container">
                <div className="initial">
                    <img src={logo} alt={logo}/>
                    <p>ZapRecall</p>
                    <button onClick={() => setStart(true)}>Iniciar Recall!</button>
                </div>
            </div>
        
    );
}