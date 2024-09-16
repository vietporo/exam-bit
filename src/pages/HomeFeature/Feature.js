import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container} from '../../globalStyles';
import {
  ContentWrapper,
  MapImageWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
 
} from './Feature.element';

const Feature = ({imagef}) => {
    
    return (
        <>
            <Container>
                <InfoRow>
                    <>
                        <ContentWrapper>
                            <TextWrapper>
                                <Heading>
                                    Always By Your Side 
                                </Heading>
                                <Subtitle>
                                    The location-sharing app is designed for family & friends safety, is the best way to protect your loved ones and keep them safe.
                                </Subtitle>
                                <Link to='/get-started'>
                                    <Button big fontBig primary='/'>
                                        Get Started
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </ContentWrapper>
                        <MapImageWrapper>
                            <ImgWrapper>
                                <Img src={require('../../images/mapicon.png')} alt={imagef} />
                            </ImgWrapper>
                        </MapImageWrapper>
                    </>
                </InfoRow>
            </Container>
        </>
    )
}

export default Feature;