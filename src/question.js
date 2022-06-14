import React from "react";

const question = ({
  showButtons,
  setShowButtons,
  score,
  showScore,
  setShowScore,
  question,
  setScore,
  setIndex,
  index,
  resultInfo,
  setResultInfo,
  playing,
  setPlaying,
  showFinal,
  setShowFinal,
}) => {
  function htmlDecode(input) {
    var e = document.createElement("textarea");
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  const correct_answer = () => {
    setResultInfo(`Right! Your Score - ${score}`);
    let newScore = score + 1;
    let newIndex = index + 1;
    setScore(newScore);
    setShowButtons(false);
    setShowScore(true);
    if (newIndex > 9) {
      setShowFinal(true);
    } else {
      setTimeout(() => {
        setIndex(newIndex);
        setShowButtons(true);
        setShowScore(false);
      }, 1000);
    }
  };

  const incorrect_answer = () => {
    setResultInfo(`Wrong! Your Score - ${score}`);
    let newScore = score;
    let newIndex = index + 1;
    setScore(newScore);
    setShowButtons(false);
    setShowScore(true);
    if (newIndex > 9) {
      setShowFinal(true);
    } else {
      setTimeout(() => {
        setIndex(newIndex);
        setShowButtons(true);
        setShowScore(false);
      }, 1000);
    }
  };

  let randomNumber = Math.floor(Math.random() * 4) + 1;

  let orderOfIncorrect = [1, 2, 3, 3];

  if (randomNumber === 1) {
    orderOfIncorrect.length = 0; // Clear contents
    orderOfIncorrect.push.apply(orderOfIncorrect, [0, 0, 1, 2]);
  } else if (randomNumber === 2) {
    orderOfIncorrect.length = 0; // Clear contents
    orderOfIncorrect.push.apply(orderOfIncorrect, [0, 0, 1, 2]);
  } else if (randomNumber === 3) {
    orderOfIncorrect.length = 0; // Clear contents
    orderOfIncorrect.push.apply(orderOfIncorrect, [0, 1, 1, 2]);
  } else if (randomNumber === 4) {
    orderOfIncorrect.length = 0; // Clear contents
    orderOfIncorrect.push.apply(orderOfIncorrect, [0, 1, 2, 2]);
  }

  const returnButtons = () => {
    return "cokc";
  };

  return (
    <div>
      <h2 className="question_title">{htmlDecode(question.question)}</h2>
      {showButtons === true && showScore === false ? (
        <div>
          {question.incorrect_answers.length === 1 ? (
            <div className="buttons_wrapper">
              {randomNumber === 1 || randomNumber === 2 ? (
                <button
                  href="something"
                  className="button_hero"
                  onClick={correct_answer}
                >
                  {htmlDecode(question.correct_answer)}
                </button>
              ) : (
                <button
                  href="something"
                  className="button_hero"
                  onClick={incorrect_answer}
                >
                  {htmlDecode(question.incorrect_answers[0])}
                </button>
              )}
              {randomNumber === 3 || randomNumber === 4 ? (
                <button
                  href="something"
                  className="button_hero"
                  onClick={correct_answer}
                >
                  {htmlDecode(question.correct_answer)}
                </button>
              ) : (
                <button
                  href="something"
                  className="button_hero"
                  onClick={incorrect_answer}
                >
                  {htmlDecode(question.incorrect_answers[0])}
                </button>
              )}
            </div>
          ) : (
            <div className="buttons_wrapper">
              {randomNumber === 1 ? (
                <button
                  href="something"
                  className="button_hero"
                  onClick={correct_answer}
                >
                  {htmlDecode(question.correct_answer)}
                </button>
              ) : (
                <button
                  href="something"
                  className="button_hero"
                  onClick={incorrect_answer}
                >
                  {htmlDecode(question.incorrect_answers[orderOfIncorrect[0]])}
                </button>
              )}
              {randomNumber === 2 ? (
                <button
                  href="something"
                  className="button_hero"
                  onClick={correct_answer}
                >
                  {htmlDecode(question.correct_answer)}
                </button>
              ) : (
                <button
                  href="something"
                  className="button_hero"
                  onClick={incorrect_answer}
                >
                  {htmlDecode(question.incorrect_answers[orderOfIncorrect[1]])}
                </button>
              )}
              {randomNumber === 3 ? (
                <button
                  href="something"
                  className="button_hero"
                  onClick={correct_answer}
                >
                  {htmlDecode(question.correct_answer)}
                </button>
              ) : (
                <button
                  href="something"
                  className="button_hero"
                  onClick={incorrect_answer}
                >
                  {htmlDecode(question.incorrect_answers[orderOfIncorrect[2]])}
                </button>
              )}
              {randomNumber === 4 ? (
                <button
                  href="something"
                  className="button_hero"
                  onClick={correct_answer}
                >
                  {htmlDecode(question.correct_answer)}
                </button>
              ) : (
                <button
                  href="something"
                  className="button_hero"
                  onClick={incorrect_answer}
                >
                  {htmlDecode(question.incorrect_answers[orderOfIncorrect[3]])}
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>{showScore ? <h3>{resultInfo}</h3> : <h3></h3>}</div>
      )}
    </div>
  );
};

export default question;
