import setinha from "../assets/img/setinha.png"
import play from "../assets/img/play.png"

export default function Flashcards(){

    const flashcards = [
        {
            name: "pergunta 1",
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            name: "pergunta 2",
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces."
        },
        {
            name: "pergunta 3",
            question: "Componentes devem iniciar com __",
            answer: " letra maiúscula"
        },
        {
            name: "pergunta 4",
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            name: "pergunta 5",
            question: " O ReactDOM nos ajuda __ ",
            answer: " interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            name: "pergunta 6",
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            name: "pergunta 7",
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes "
        },
        {
            name: "pergunta 8",
            question: "Usamos estado (state) para __ ",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ];

    return(
        <div className="deck">
            {flashcards.map((flashcard, index)=>{
                return(
                    <div className="card" key={index}>
                        {flashcard.name}
                        <img src={play} alt={play}/>
                    </div>
                )
            })}
        </div>
    );
}