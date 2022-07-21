
import arrow from "../assets/img/setinha.png"
import play from "../assets/img/play.png"

function card(action, index, flashcardsData, setFlashcardsData){
    
    
        (action === "show-question")?
            flashcardsData[index] = {...flashcardsData[index], showQuestion: true}
        :
            flashcardsData[index] = {...flashcardsData[index], showAnswer: true}
    
    const updateCardsData = [...flashcardsData];
    setFlashcardsData(updateCardsData);
}

function Card(props){

    const {index, flashcard, flashcardsData, setFlashcardsData} = props;

    return(
        <>
            <Text 
            index={index}
            flashcard={flashcard}
            flashcardsData={flashcardsData}
            setFlashcardsData={setFlashcardsData}
            />
            {
                (flashcard.showAnswer)?
                    <Buttons/>
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

function Question(props){
    const {flashcard} = props;
    return(
        (flashcard.showAnswer)?
            <p>{flashcard.answer}</p>
            :
            <p>{flashcard.question}</p>
    );
}

function Text(props){

    const {flashcard} = props;

    return(
        
        (flashcard.showQuestion)?
                <Question flashcard={flashcard}/>
            :
                <p>{flashcard.name}</p>
    );
}

function Buttons(){

    return(
        <div className="buttons">
            <button style={{background:"#FF3030"}}>Não lembrei</button>
            <button style={{background:"#FF922E"}}>Quase não lembrei</button>
            <button style={{background:"#2FBE34"}}>Zap!</button>
        </div>
    );
}

function Icon(props){

    const {index, flashcard, flashcardsData, setFlashcardsData} = props;

    return(
        (flashcard.showQuestion)?
            <img src={arrow} alt={arrow} onClick={() => card("show-answer",index, flashcardsData, setFlashcardsData)}/>
        :
            <img src={play} alt={play} onClick={() => card("show-question", index, flashcardsData, setFlashcardsData)}/>   
    );
}

export default function Flashcards({flashcardsData, setFlashcardsData, setUserAnswers}){

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
                            setUserAnswers={setUserAnswers}
                        />
                    </div>
                );
            })}
        </div>
    );
}