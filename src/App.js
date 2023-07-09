import {useState, useEffect, useCallback} from 'react';
import './app.css'
import Title from './Title';
import { baseUrl } from './config';
import Timer from './Timer';
import Result from './Result';
import Answers from './Answers';

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

  const onRestart = ()=>{
    setCurrentQuestionId(1);
    setTime(0);
    setCorrectAnswers(0);
  };
  
  const question = questions.find(q=> q.id === currentQuestionId)
  
  const onAnswer = useCallback((answer) => {
    fetch(baseUrl + 'correct_answers/' + question.id)
    .then(res => res.json())
    .then(correctAnswer=> {
      if(correctAnswer.correct === answer) {
        setCorrectAnswers(count => count + 1);
      }
      setCurrentQuestionId(id=> id + 1);
    });
  }, [question]);

  if(questions.length === 0 ) {
    return <div>Loading...</div>
  }else if(!question && questions.length) {
    const successRate = (correctAnswers/questions.length)* 100;
    return <Result successRate={successRate} onRestart={onRestart}/>
  } 
  
  return (
    <div className='container'>
      <Title />
    
      <div className='status'>
        <Timer setTime={setTime} time={time}/>
        <span>Score: {correctAnswers}</span>
      </div>
    
      <h4 className='text'>{question.text}</h4>
      <Answers onAnswer={onAnswer} answers={question.possible_answers} />
    </div>
  );
}

export default App;
