import React, { useState } from 'react';
import './App.css';

function App() {
  /* JS quiz Questions */
  const questions = [
    {
      questionlabel: 'What is the capital of Philippines?',
      answeroption: [
        { answerlabel: 'New york' , isCorrect: false },
        { answerlabel: 'Paris' , isCorrect: false },
        { answerlabel: 'Manila' , isCorrect: true },
        { answerlabel: 'Shanghai' , isCorrect: false },
      ],
    },
    {
      questionlabel: 'Who is the Philippine president declared martial Law?',
      answeroption: [
        { answerlabel: 'Rudrigo Duterte' , isCorrect: false },
        { answerlabel: 'Ferdinand Marcos' , isCorrect: true },
        { answerlabel: 'Manual Quezon' , isCorrect: false },
        { answerlabel: 'Ninoy Aquino' , isCorrect: false },
      ],
    },
    {
      questionlabel: 'The Iphone was created by which company?',
      answeroption: [
        { answerlabel: 'Intel' , isCorrect: false },
        { answerlabel: 'Amazon' , isCorrect: false },
        { answerlabel: 'Microsoft' , isCorrect: false },
        { answerlabel: 'Apple' , isCorrect: true },
      ],
    },
    {
      questionlabel: 'Who is the CEO of Tesla?',
      answeroption: [
        { answerlabel: 'Jheff Bezos' , isCorrect: false },
        { answerlabel: 'Elon Musk' , isCorrect: true },
        { answerlabel: 'Bill Gates' , isCorrect: false },
        { answerlabel: 'Tony Stark' , isCorrect: false },
      ],
    },
    {
      questionlabel: 'What does HTML stand for?',
      answeroption: [
        { answerlabel: 'Hyper Text Markup Language' , isCorrect: true },
        { answerlabel: 'Home Tool Markup Language' , isCorrect: false },
        { answerlabel: 'Hyperlinks and Text Markup Language' , isCorrect: false },
        { answerlabel: 'Hyper Task Markup' , isCorrect: false },
      ],
    },
  ];
  const [step, setstep] = useState(1);
  /* If the user click the button */
  const [currentQuestion, setcurrentQuestion] = useState(0);
  /* When the user done answering the questions it shows the result */
  const [showscore, setshowscore] = useState(false);
  /* User's score out of 5 questions */
  const [score, setscore] = useState(0);
  /* Start timer */
  const [count, setcounter] = useState(90);
  /* When button click will move to actual quiz */
  const handlestepbtnclick = () =>{
    setstep(2);
    setcounter(count);
  }
  /* Setting timer on quiz start */
  React.useEffect(() => {
    if(step === 2 ){
    const timer = count > 0 && 
    setInterval(() => setcounter(count-1), 1000);
      return () => clearInterval(timer);
    }
  });
  /* If the user did not finish the quiz and it reached to 0 then the alert message will popup */
  if(count === 0){
    alert('Your time is up! Click Ok to restart quiz.');
    window.location.reload();
  }

  /* When user click the button of choosen answer */
  const handleanswerbtnclick = (isCorrect) => {
    if(isCorrect === true){
      setscore(score + 1);
    }
  const nextQuestion = currentQuestion + 1;
      if(nextQuestion < questions.length){
          setcurrentQuestion(nextQuestion);
      }else{
          setshowscore(true);
          setcounter(false);
      }
  };

  const restart = () => {
    window.location.reload();
  }
      

  return (
    <div className="App">
      {/* Uses logic, after the quiz finish then automatically will show the result in only 1 file. */}
      {showscore ? (
        <div className='score'>
          <div className='crown'>&#128081;</div>
            <p><b>Congatulations!</b> You've completed the quiz.</p> 
            <p>You got {score} out of {questions.length}</p>
          <button className='restart' onClick={()=> restart()}>Restart Quiz</button>
        </div>
      ) : (
        <>
          { step === 1 &&
            <div className='rules'>
                <h3>Quiz Rules &#129409;</h3>
                <p>1. You will have only <strong>90 seconds</strong> to answer all question.</p>
                <p>2. Once you select your answer, it can't be undone.</p>
                <p>3. You can't select any option once time goes off.</p>
                <p>4. You can't exit from the quiz while you're playing.</p>
                <p>5. You'll get points on the basis of your correct answers.</p>
                <div className='luck'><strong>Good Luck! &#128512;</strong></div>
              <div className='start-quiz'>
                <button className='start' onClick={handlestepbtnclick}>Start Quiz</button>
              </div>
            </div>
          }
          { step === 2 &&
          <div className='question'>
              <div className='question-count'>
                <h2>Awesome Quiz App</h2>
                <div className='timer'>Your time ends in: {count} seconds</div>
                <div className='que'><span><strong>Question {currentQuestion + 1}/{questions.length}</strong></span></div>
              </div>
              <div className='question-label'>{questions[currentQuestion].questionlabel}</div>
          
            <div className='answer' id='answer'>
              {questions[currentQuestion].answeroption.map((answeroption) => 
              <button onClick={()=> handleanswerbtnclick(answeroption.isCorrect)}>{answeroption.answerlabel}</button>
              )} 
            </div>
          </div>
          }
        </>
      )}
    </div>
  );
}

export default App;
