import React from 'react';
import '../App.css'
const Modal = ({ responses, setShowModal }) => {
  const totalScore = Object.values(responses).reduce((acc, val) => acc + parseInt(val), 0);
  let severity = '';
  if (totalScore >= 20) {
    severity = 'Severe';
  } else if (totalScore >= 15) {
    severity = 'Moderately severe';
  } else if (totalScore >= 10) {
    severity = 'Moderate';
  } else if (totalScore >= 5) {
    severity = 'Mild';
  } else {
    severity = 'None';
  }

  const getSeverityDescription = (severity) => {
    switch (severity) {
      case 'Severe':
        return 'You may have severe depression. It is essential to seek professional help as soon as possible.';
      case 'Moderately severe':
        return 'Your symptoms indicate moderately severe depression. Consider consulting with a healthcare professional.';
      case 'Moderate':
        return 'Your symptoms suggest moderate depression. It is advisable to talk to a healthcare provider about your concerns.';
      case 'Mild':
        return 'Your symptoms are indicative of mild depression. Consider discussing your feelings with a trusted person or seeking professional support.';
      default:
        return 'Your symptoms do not indicate depression based on this assessment. However, if you are experiencing distress, consider reaching out to a healthcare provider for further evaluation.';
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Total Score: {totalScore}</h2>
        <h2>Severity: {severity}</h2>
        <p>{getSeverityDescription(severity)}</p>
      </div>
    </div>
  );
};

export default Modal;
