import React from "react";
import arrow from "../assets/img/setinha.png";
import play from "../assets/img/play.png";

export default function Card(props){

    const {index, flashcard, flashcardsData, setFlashcardsData, userAnswers, setUserAnswers} = props;

    function card(action, index, flashcardsData, setFlashcardsData){
    
    
        (action === "show-question")?
            flashcardsData[index] = {...flashcardsData[index], showQuestion: true}
        :
            flashcardsData[index] = {...flashcardsData[index], showAnswer: true}
    
        const updateCardsData = [...flashcardsData];
        setFlashcardsData(updateCardsData);
    }

    function renderUserAnswer(index, icon, color, feedbackAnswer, userAnswers, setUserAnswers, flashcardsData, setFlashcardsData){

        flashcardsData[index] = {...flashcardsData[index], showQuestion: false, showAnswer: false, answered: true};
        const updateFlashCardsData = [...flashcardsData];
        setFlashcardsData(updateFlashCardsData);
    
        userAnswers[index] = {index, icon, color, feedbackAnswer};
        const updateUserAnswers = [...userAnswers];
        setUserAnswers(updateUserAnswers);

    }

    function Text(props){

        const {index, flashcard, userAnswers} = props;
    
        return(
            
            (flashcard.showQuestion)?
                    <Question flashcard={flashcard}/>
                :
                    <p className={`${userAnswers.answered? "answered" : ""}`} >Pergunta {index+1}</p>
        );
    }

    function Question(props){
        const {flashcard} = props;
        return(
            (flashcard.showAnswer)?
                <p>{flashcard.answer}</p>
                :
                <p>{flashcard.question}</p>
        );
    }

    function Buttons(props){

        const{index, userAnswers, setUserAnswers, flashcardsData, setFlashcardsData} = props;
    
        const icons = {
            correct: "checkmark-circle",
            almost:  "help-circle",
            wrong:   "close-circle"
        };
    
        return(
            <div className="buttons">
                <button style={{background:"#FF3030"}} onClick={()=> renderUserAnswer(index, icons.wrong, "#FF3030", false, userAnswers, setUserAnswers, flashcardsData, setFlashcardsData)}>Não lembrei</button>
                <button style={{background:"#FF922E"}} onClick={()=> renderUserAnswer(index, icons.almost, "#FF922E", true, userAnswers, setUserAnswers, flashcardsData, setFlashcardsData)}>Quase não lembrei</button>
                <button style={{background:"#2FBE34"}} onClick={()=> renderUserAnswer(index, icons.correct, "#2FBE34", true, userAnswers, setUserAnswers, flashcardsData, setFlashcardsData)}>Zap!</button>
            </div>
        );
    }
    function Icon(props){

        const {index, flashcard, flashcardsData, setFlashcardsData} = props;
    
        return(
            (flashcard.showQuestion)?
                <div className="turnOn">
                  <img src={arrow} alt={arrow} onClick={() => card("show-answer",index, flashcardsData, setFlashcardsData)}/>  
                </div>
                
            :
                <div>
                    <img src={play} alt={play} onClick={() => card("show-question", index, flashcardsData, setFlashcardsData)}/>
                </div>
        );
    }

    return(
        <>
            <Text 
            index={index}
            flashcard={flashcard}
            flashcardsData={flashcardsData}
            userAnswers={userAnswers}
            />
            {
                (flashcard.showAnswer)?
                    <Buttons 
                        index={index} 
                        userAnswers={userAnswers} 
                        setUserAnswers={setUserAnswers} 
                        flashcardsData={flashcardsData} 
                        setFlashcardsData={setFlashcardsData}/>
                :
                    (flashcardsData[index].answered)?

                        <ion-icon name={userAnswers[index].icon} style={{color:userAnswers[index].color}}></ion-icon>
                    :
                        <Icon 
                        index={index}
                        flashcard={flashcard}
                        flashcardsData={flashcardsData}
                        setFlashcardsData={setFlashcardsData}
                        />
            }
        </>
    );
}