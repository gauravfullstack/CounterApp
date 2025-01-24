import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b">
      <button
        onClick={onToggle}
        className="w-full text-left py-3 px-5 text-lg font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-5 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AccordionItem
        title="Section 1"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <p>This is the content of Section 1</p>
      </AccordionItem>
      <AccordionItem
        title="Section 2"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <p>This is the content of Section 2</p>
      </AccordionItem>
      <AccordionItem
        title="Section 3"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <p>This is the content of Section 3</p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
