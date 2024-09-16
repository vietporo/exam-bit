import styled from 'styled-components';

export const FAQSection = styled.section`
  padding: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;  
  text-align: center;
  margin-bottom: 10px;
  
  span {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 8px;
      background-color: #00e676;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }
`;

export const OneFeature = styled.div`
    display: flex;
    margin-left: 300px;
    margin-top: -20px;
    @media screen and (max-width: 960px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #555555;
  margin-bottom: 40px;
`;

export const SubtitleTwo = styled.p`
  text-align: center;
  font-size: 16px;
  color: #555555;
  margin-bottom: 40px;
  margin-top: 1rem;
  max-width: 550px;  
`;

export const FAQWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }
`;

export const FAQItem = styled.div`
  background-color: #F5F5F5;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Question = styled.h3`
  font-size: 18px;
  color: #333333;
  margin: 0;
`;
