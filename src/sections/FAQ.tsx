import React, { useState } from 'react';
import { Accordion } from '../components/Accordion';
import { senaraiFaq } from '../data/landingData';

export const FAQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">Soalan Lazim</span>
          <h2>Mencari Jawapan?</h2>
          <p>Berikut adalah antara jawapan kepada soalan-soalan yang sering diajukan oleh bakal tetamu kami.</p>
        </div>

        <div className="faq-list">
          {senaraiFaq.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={activeFaq === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
