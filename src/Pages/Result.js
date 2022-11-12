import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Result() {

    const [data, setData] = useState()
    const [answer, setAnswer] = useState([])
    const [result, setResult] = useState(0)
    const history = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('answer') || !localStorage.getItem('data')){
            history('/')
        }
        setAnswer(localStorage.getItem('answer'))
        setData(localStorage.getItem('data'))
    }, [])

    useEffect(() => {
        if(answer.length>0){
            setResult(JSON.parse(answer).filter((item)=> item===1).length)
        }
        
    }, [answer])


    const playAgain = () => {
        localStorage.removeItem('data')
        localStorage.removeItem('answer')
        history('/')
    }

    return (
        <div className="Result" >
            <div className="result-title">
                You scored <br/>
                {result} / 10
            </div>
            {data&&JSON.parse(data).results.map((item, index) => {
                return (<div className="result-element" key={index}>
                    <div className="question">
                        {index+1}.{item.question}
                    </div>
                    <div className="answer">
                        {JSON.parse(answer)[index]===1?'True':'False'}
                    </div>
                </div>)                
            })}

            <button className="play-again" onClick={playAgain}>PLAY AGAIN?</button>
            
        </div>
    );
}

export default Result;