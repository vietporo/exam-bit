import React from 'react';
import {
  FeatureSection,
  Title,
  Subtitle,
  TextWrapper,
  FeatureWrapper,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  FeatureCardTwo,
  OneFeature
} from './Blog.element';

const Blog = () => {
  return (
    <FeatureSection>
      <TextWrapper>
        <Title>
          Features That Made Us <span>Unique</span>
        </Title>
        <OneFeature>
          <img src={require('../../images/Group.png')} alt="One Feature" />
        </OneFeature>
        <Subtitle>
          All you need to have is Famee.ly | The location-sharing app and a smartphone.
          Check out what you can do with Famee.ly.
        </Subtitle>
      </TextWrapper>

      <FeatureWrapper>
        <FeatureCard>
          <FeatureIcon>
            <img src={require('../../images/location.png')} alt="Location Sharing Icon" />
          </FeatureIcon>
          <div>
            <FeatureTitle>Location sharing</FeatureTitle>
            <FeatureDescription>
              Locate & protect your family 24/7 with real-time location and geo-fencing.
            </FeatureDescription>
          </div>
        </FeatureCard>

        <FeatureCardTwo>
          <FeatureIcon>
            <img src={require('../../images/lock.png')} alt="Place Alerts Icon" />
          </FeatureIcon>
          <div>
            <FeatureTitle>Place alerts</FeatureTitle>
            <FeatureDescription>
              Get notified as loved ones come and go from their most visited places.
            </FeatureDescription>
          </div>
        </FeatureCardTwo>

        <FeatureCardTwo>
          <FeatureIcon>
            <img src={require('../../images/locahistory.png')} alt="Location History Icon" />
          </FeatureIcon>
          <div>
            <FeatureTitle>Location history</FeatureTitle>
            <FeatureDescription>
              See the location history of your family’s whereabouts easily throughout the day.
            </FeatureDescription>
          </div>
        </FeatureCardTwo>
      </FeatureWrapper>
    </FeatureSection>
  );
};

export default Blog;
