import { useState } from "react";

import arrow from "../assets/img/setinha.png"
import play from "../assets/img/play.png"

function card(action, index, flashcardsData, setFlashcardsData){
    flashcardsData[index] = {...flashcardsData[index], showAnswer: true};
    const updateCardsData = [...flashcardsData];
    setFlashcardsData(updateCardsData);
}


export default function Flashcards({flashcardsData, setFlashcardsData, setUserAnswers}){

    return(
        <div className="deck">
            {flashcardsData.map((flashcard, index)=>{
                return(
                    <div className="card" key={index}>

                        {flashcard.showAnswer? flashcard.question : flashcard.name}

                        {flashcard.showAnswer?

                                <img src={arrow} alt={arrow} onClick={() => card('turn-on', index, flashcardsData, setFlashcardsData)}/>
                            :
                                <img src={play} alt={play} onClick={() => card('play', index, flashcardsData, setFlashcardsData)}/>
                        }
                    </div>
                );
            })}
        </div>
    );
}