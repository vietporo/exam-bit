import styled from 'styled-components';

export const FeatureSection = styled.section`
  display: flex;
  padding: 60px 20px;
  background-color: #f9f9f9;
  flex-direction: row; 
  align-items: flex-start; 
  justify-content: center; 
  text-align: left; 
  gap: 40px;

  @media screen and (max-width: 960px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }
`;

export const OneFeature = styled.div`
    display: flex;
    margin-left: 80px;
    margin-top: -25px;
    @media screen and (max-width: 960px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 62px;
  font-weight: bold;
  margin-bottom: 20px;

  span {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 8px;
      background-color: #00e676;
      bottom: -5px;
      left: 0;
      z-index: -1;
    }
  }
`;

export const Subtitle = styled.p`
  display: flex;

  font-size: 16px;
  color: #555555;
  max-width: 600px;
  margin-bottom: 50px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  justify-content: center;
  max-width: 600px;
  margin-right:10px;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 400px; 
  margin-right: 200px
`;

export const FeatureCard = styled.div`
display: flex;

  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  width: 550px;
  display: flex;
  align-items: center;
  text-align: left;
  gap: 15px;
  
  @media screen and (max-width: 960px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }
`;

export const FeatureCardTwo = styled.div`
display: flex;

  background-color: #F5F5F5;
  border-radius: 10px;
  padding: 30px;
  width: 550px;
  display: flex;
  align-items: center;
  text-align: left;
  gap: 15px;
  
  @media screen and (max-width: 960px) {
    flex-direction: column; 
    align-items: center; 
    width: 100%;
  }

`;

export const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #333333;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
  color: #777777;
  line-height: 1.5rem;
`;
