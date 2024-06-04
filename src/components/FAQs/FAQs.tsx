import "./FAQs.css";
import down from "../../assets/images/down.svg";
import { useState } from "react";

interface IFAQs {
  title: String;
  body: String;
}

function FAQs({ title, body }: IFAQs) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`FAQsContainer ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
      <div className="FAQsContainerHeader">
        <div className="left">{title}</div>
        <img className={`icon ${isOpen ? 'open' : ''}`} src={down} alt="Toggle" />
      </div>
      <div className={`FAQsContainerContent ${isOpen ? 'open' : ''}`}>
        {body}
      </div>
    </div>
  );
}

export default FAQs;
