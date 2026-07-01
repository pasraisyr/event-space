import React from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  onClick
}) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button 
        type="button"
        className="faq-question-btn"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {question}
        <ChevronDown className="faq-icon-arrow" size={20} />
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">
          {answer}
        </div>
      </div>
    </div>
  );
};
export default Accordion;
