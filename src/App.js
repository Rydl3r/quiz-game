import { useState, useEffect } from 'react';
import background from "./img/bg.png";
import Question from './question';

function App() {



  const [playing, setPlaying] = useState(false)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [resultInfo, setResultInfo] = useState(`Right! Your Score - ${score}`)
  const [showFinal, setShowFinal] = useState(false)
  const [showButtons, setShowButtons] = useState(true)

  const startGame = () => {
    setPlaying(true)
    setIndex(0)
  }

  const fetchQuestions = async () => {
    let response = await fetch('https://opentdb.com/api.php?amount=10')
    let data = await response.json()
    setQuestions(data.results)
  }

  const restartGame = () => {
    setIndex(0)
    setPlaying(false)
    setShowScore(false)
    setShowFinal(false)
    setScore(0)
    setShowButtons(true)
    fetchQuestions()
  }

  useEffect(() => {
    fetchQuestions();
  }, [])




  if (playing === false) {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1>IT'S<br />QUIZ<br />TIME</h1>
        <button href="something" className="button_hero" onClick={startGame}>Play</button>
      </div>
    );
  } else if (showFinal === true) {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1>That's<br />it!</h1>
        <h3>Your final score - {score}</h3>
        <button href="something" className="button_hero" onClick={restartGame}>Restart the game</button>
      </div>
    )
  } else {
    return (
      <div className="App" style={{ backgroundImage: `url(${background})`, height: "100vh", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Question score={score} showScore={showScore} setShowScore={setShowScore} question={questions[index]} setScore={setScore} setIndex={setIndex} index={index} resultInfo={resultInfo} setResultInfo={setResultInfo} playing={playing} setPlaying={setPlaying} showFinal={showFinal} setShowFinal={setShowFinal} showButtons={showButtons} setShowButtons={setShowButtons} />
      </div>
    )
  }
}

export default App;
