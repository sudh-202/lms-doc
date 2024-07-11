import { useState } from 'react';

const FaqDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button className={`faq-question ${isOpen ? 'underline' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className={`arrow ${isOpen ? 'open' : ''}` }>˅</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          {answer}
        </div>
      )}
      <style jsx>{`
        .faq-item {
          margin-bottom: 1em;
          margin-top: 20px;
        }
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.2em;
          cursor: pointer;
          color: white;
          text-decoration: none;
        }
        .faq-question.underline {
          text-decoration: underline;
        }
        .faq-answer {
          margin-top: 0.5em;
          font-size: 1em;
          color: lightgray;
        }
        .arrow {
          float: right;
          transition: transform 0.3s;
        }
        .arrow.open {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default FaqDropdown;
