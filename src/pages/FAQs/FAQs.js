import React, { useState } from 'react';
import { 
  FAQSection, 
  Title, 
  Subtitle, 
  FAQWrapper, 
  FAQItem, 
  Question, 
  SubtitleTwo,
  OneFeature
} from './FAQs.element'; 

import { FiChevronUp, FiChevronDown } from 'react-icons/fi'; 
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <Title>Frequently Asked <span>Questions</span></Title>
        <OneFeature>
          <img src={require('../../images/Group.png')} alt="One Fea" />
        </OneFeature>
      <Subtitle>Have questions? Here’s some useful info to help you get used to Famee.ly</Subtitle>

      <FAQWrapper>
        <div>
          <FAQItem onClick={() => toggleFAQ(0)}>
            <Question>How Famee.ly Works?</Question>
            {openIndex === 0 ? <FiChevronUp /> : <FiChevronDown />}
          </FAQItem>
          </div>

        <div>
          <FAQItem onClick={() => toggleFAQ(1)}>
            <Question>How can I add a new member to my Circle?</Question>
            {openIndex === 1 ? <FiChevronUp /> : <FiChevronDown />}
          </FAQItem>
          </div>

        <div>
          <FAQItem onClick={() => toggleFAQ(2)}>
            <Question>How to join the Circle?</Question>
            {openIndex === 2 ? <FiChevronUp /> : <FiChevronDown />}
          </FAQItem>
          </div>
      </FAQWrapper>
      <SubtitleTwo>You receive an invite code to join a Circle? This means someone you know invited you join them on Famee.ly and be part of their private Circle. Simply join by going to Profile - Join A Circle, entering an Invite Code you received and you will be placed into your new Circle.</SubtitleTwo>
    </FAQSection>
  );
};

export default FAQs;
