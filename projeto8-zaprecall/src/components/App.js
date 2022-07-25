import { React, useState } from "react";

import Flashcards from "./Flashcards";

import logo from "../assets/img/logo.png";
import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";

export default function App(){

    const [start, setStart] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const flashcards = [

        {
            id:0,
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
            showQuestion: false,
            showAnswer: false,
            answered: false
        },
        {
            id:1,
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces.",
            showQuestion: false,
            showAnswer: false,
        },
        {
            id:2,
            question: "Componentes devem iniciar com __",
            answer: " letra maiúscula",
            showQuestion: false,
            showAnswer: false,
            answered: false
        },
        {
            id:3,
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            showQuestion: false,
            showAnswer: false,
            answered: false
        },
        {
            id:4,
            question: " O ReactDOM nos ajuda __ ",
            answer: " interagindo com a DOM para colocar componentes React na mesma",
            showQuestion: false,
            showAnswer: false,
            answered: false
        },
        {
            id:5,
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências",
            showQuestion: false,
            showAnswer: false,
            answered: false
        },
        {
            id:6,
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
            showQuestion: false,
            showAnswer: false,
            answered: false
        },
        {
            id:7,
            question: "Usamos estado (state) para __ ",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            showQuestion: false,
            showAnswer: false,
            answered: false
        }
    ];

    flashcards.sort(() => {
        return(
            Math.random() - 0.5
        )
    } );

    const [flashcardsData, setFlashcardsData] = useState(flashcards);

    function Icons(){
        return(userAnswers.map((icon, index)=> {
            
            return(
                <ion-icon name={icon.icon} style={{color: icon.color}} ket={index}></ion-icon>
            );
        }))
    }

    function Feedback(){

        const feedback = userAnswers.every((verify, i, arr) => {

            return verify.feedbackAnswer === true
        })

        return(
            (feedback)?
            <>
                <div className="emoticon">
                    <img src={party} alt={party}/>
                    <p>Parabéns!</p>
                </div>
                <p>Você não esqueceu de<br/> nenhum flashcard!</p>
            </>
            :
            <>
                <div className="emoticon">
                    <img src={sad} alt={sad}/>
                    <p>Puts...</p>
                </div>
                <p>Ainda faltam alguns...<br/> Mas não desanime!</p>                                
            </>
        );
    }

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

                <footer className={`progressBar ${userAnswers.length === 8? "expand" : ""}`} >
                    <div className="feedback">
                        {
                            (userAnswers.length === 8)?
                                <Feedback userAnswers={userAnswers} />
                            :
                                <></>
                        }
                        <div className="questionsAnswered">
                            <p>{userAnswers.length}/{flashcards.length} CONCLUÍDOS</p>
                            <div>
                                <Icons/>
                            </div>
                        </div>
                    </div>
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