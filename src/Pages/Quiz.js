import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {

    const [data, setData] = useState()
    const [quizNumber, setQuizNumber] = useState(0)
    const [answer, setAnswer] = useState([])
    const history = useNavigate()

    useEffect(()=>{
        localStorage.removeItem('answer')
        localStorage.removeItem('data')
        fetch(" https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            })
    }, [])

    const checkAnswer = (string) =>{
        if(data?.results[quizNumber]?.correct_answer===string){
            const temp = answer
            temp.push(1)
            setAnswer([...temp])
        } else {
            const temp = answer
            temp.push(0)
            setAnswer([...temp])
        }
        if(quizNumber<9) {
            setQuizNumber((prveState)=>prveState+1)
        } else {
            localStorage.setItem('answer', JSON.stringify(answer))
            localStorage.setItem('data',JSON.stringify(data))
            history('/result')
        }
    }

  return (
    <div className="Quiz" >
        <div className="quiz-title">
            {data?.results[quizNumber].category}
        </div>
        <div className="quiz-description">
            {data?.results[quizNumber].question}
        </div>
        <div className="quiz-number">
            {quizNumber+1} of 10
        </div>
        <div className="quiz-check">
            <div className="check-element">
                <button className="check-button" onClick={()=>checkAnswer('True')}>True</button>
            </div>
            <div className="check-element">
                <button className="check-button" onClick={()=>checkAnswer('False')} >False</button>
            </div> 
        </div>
    </div>
  );
}

export default Quiz;