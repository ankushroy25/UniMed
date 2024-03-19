import { useState } from "react";
import Modal from "./Modal";
import "../App.css";
import { Button } from "@mui/material";
const PHQ9Survey = () => {
  const [responses, setResponses] = useState({});
  const [showModal, setShowModal] = useState(false);

  const questions = [
    "1.Little interest or pleasure in doing things",
    "2.Feeling down, depressed, or hopeless",
    "3.Trouble falling or staying asleep, or sleeping too much",
    "4.Feeling tired or having little energy",
    "5.Poor appetite or overeating",
    "6.Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    "7.Trouble concentrating on things, such as reading the newspaper or watching television",
    "8.Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
    "9.Thoughts that you would be better off dead, or of hurting yourself",
  ];

  const handleResponse = (questionId, value) => {
    const newResponses = { ...responses, [questionId]: value };
    setResponses(newResponses);
  };

  const calculateScore = () => {
    if (Object.keys(responses).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="flex flex-col justify-center rounded-md pt-4 mt-8 mx-12 md:mx-32 px-4 md:px-16 shadow-xl shadow-slate-800 bg-gray-200 mb-12">
      <h2 className="text-center mb-4 text-xl text-gray-700 font-bold">
        PHQ-9 Depression Severity Assessment
      </h2>
      <h4 className="font-semibold mb-4">
        Over the last 2 weeks, how often have you been bothered by any of the
        following problems?
      </h4>
      <form className="form-container">
        {questions.map((question, index) => (
          <div key={index} className="mb-4 p-2 bg-gray-100 rounded-md">
            <p className="text-lg font-semibold ">{question}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 my-2 ml-4">
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="0"
                  onChange={() => handleResponse(index, 0)}
                />
                Not at all
              </label>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="1"
                  onChange={() => handleResponse(index, 1)}
                />
                Several days
              </label>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="2"
                  onChange={() => handleResponse(index, 2)}
                />
                More than half the days
              </label>
              <label>
                <input
                  type="radio"
                  name={`question${index}`}
                  value="3"
                  onChange={() => handleResponse(index, 3)}
                />
                Nearly every day
              </label>
            </div>
          </div>
        ))}
        <div className="flex my-4 justify-center">
          <Button
            type="reset"
            variant="contained"
            className="my-4 br"
            onClick={calculateScore}
          >
            Submit
          </Button>
        </div>
      </form>

      {showModal && <Modal responses={responses} setShowModal={setShowModal} />}
    </div>
  );
};

export default PHQ9Survey;
