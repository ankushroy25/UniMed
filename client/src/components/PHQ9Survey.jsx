import React, { useState } from 'react';
import Modal from './Modal';
import '../App.css'
const PHQ9Survey = () => {
  const [responses, setResponses] = useState({});
  const [showModal, setShowModal] = useState(false);

  const questions = [
    '1.Little interest or pleasure in doing things',
    '2.Feeling down, depressed, or hopeless',
    '3.Trouble falling or staying asleep, or sleeping too much',
    '4.Feeling tired or having little energy',
    '5.Poor appetite or overeating',
    '6.Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
    '7.Trouble concentrating on things, such as reading the newspaper or watching television',
    '8.Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
    '9.Thoughts that you would be better off dead, or of hurting yourself'
  ];

  const handleResponse = (questionId, value) => {
    const newResponses = { ...responses, [questionId]: value };
    setResponses(newResponses);
  };

  const calculateScore = () => {
    if (Object.keys(responses).length < questions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    setShowModal(true);
  };

  return (
    <div>
      <h2>PHQ-9 Depression Severity Assessment</h2>
      <h4 class="main-question">
        Over the last 2 weeks, how often have you been bothered by any of the following problems?
    </h4>
      <form className="form-container">
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <label>
              <input
                type="radio"
                name={`question${index}`}
                value="0"
                onChange={() => handleResponse(index, 0)}
              /> Not at all
            </label>
            <label>
              <input
                type="radio"
                name={`question${index}`}
                value="1"
                onChange={() => handleResponse(index, 1)}
              /> Several days
            </label>
            <label>
              <input
                type="radio"
                name={`question${index}`}
                value="2"
                onChange={() => handleResponse(index, 2)}
              /> More than half the days
            </label>
            <label>
              <input
                type="radio"
                name={`question${index}`}
                value="3"
                onChange={() => handleResponse(index, 3)}
              /> Nearly every day
            </label>
          </div>
        ))}
      </form>
      <button onClick={calculateScore}>Submit</button>
      {showModal && <Modal responses={responses} setShowModal={setShowModal} />}
    </div>
  );
};

export default PHQ9Survey;
