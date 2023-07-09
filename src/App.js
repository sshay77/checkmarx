import {useState, useEffect} from 'react';
import './app.css'
import Title from './Title';
import { baseUrl } from './config';
import Timer from './Timer';
import Result from './Result';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(()=>{
    fetch(baseUrl + 'questions')
    .then(res => res.json()) 
    .then(questions=> {
      setQuestions(questions);
    })
  }, []);

  const onAnswer = (qId, answer) => {
    fetch(baseUrl + 'correct_answers/' + qId)
    .then(res => res.json())
    .then(correctAnswer=> {
      if(correctAnswer.correct === answer) {
        setCorrectAnswers(count => count + 1);
      }
      setCurrentQuestionId(id=> id + 1);
    });
  };

  const onRestart = ()=>{
    setCurrentQuestionId(1);
    setTime(0);
    setCorrectAnswers(0);
  };
  
  const question = questions.find(q=> q.id === currentQuestionId)
  
  if(questions.length === 0 ) {
    return <div>Loading...</div>
  }else if(!question && questions.length) {
    const successRate = (correctAnswers/questions.length)* 100;
    return <Result successRate={successRate} onRestart={onRestart}/>
  } 
  
  return (
    <>
    <Title />
   
    <div>
      <Timer setTime={setTime} time={time}/>
      <span>correct answers: {correctAnswers}</span>
    </div>
   
    <h4>{question.text}</h4>
    
    <ol className='answers'>
      {question.possible_answers.map((answer, i)=>(
        <li key={i} onClick={()=>onAnswer(question.id, answer)}>{answer}</li>
    ))}
    </ol>
    </>
  );
}

export default App;
