import React from "react";
import Card from "./Card.js";

export default function Flashcards({flashcardsData, setFlashcardsData, userAnswers, setUserAnswers}){

    return(
        <div className="deck">
            {flashcardsData.map((flashcard, index)=>{
                return(
                    <div className={`card ${flashcard.showQuestion? "expandCard" : ""}`} key={index}>
                        <Card 
                            index={index}
                            flashcard={flashcard} 
                            flashcardsData={flashcardsData} 
                            setFlashcardsData={setFlashcardsData}
                            userAnswers={userAnswers}
                            setUserAnswers={setUserAnswers}
                        />
                    </div>
                );
            })}
        </div>
    );
}