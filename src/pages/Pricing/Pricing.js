import React from 'react';
import {
  Container,
  MapImageWrapper,
  MapImage,
  ContentWrapper,
  Title,
  Description,
  StatsWrapper,
  StatBox,
  StatNumber,
  StatText
} from './Pricing.element';

const Pricing = ({Iimg}) => {
  return (
    <Container>
      <MapImageWrapper>
        <MapImage src={require('../../images/mobilemap.png')} alt={Iimg} />
      </MapImageWrapper>
      <ContentWrapper>
        <Title>The Location-Sharing App</Title>
        <Description>
          Famee.ly aims to help parents and caregivers protect their loved ones with easy tracking and alerting messages.
          Simply install the Famee.ly on your loved one’s phone. Once registered, each member appears on the private map
          so you’ll always know where your family members and friends are.
        </Description>
        <StatsWrapper>
          <StatBox>
            <StatNumber>2556</StatNumber>
            <StatText>App downloads</StatText>
          </StatBox>
          <StatBox>
            <StatNumber>1998</StatNumber>
            <StatText>Daily active users</StatText>
          </StatBox>
          <StatBox>
            <StatNumber>980</StatNumber>
            <StatText>Good reviews</StatText>
          </StatBox>
        </StatsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Pricing;
