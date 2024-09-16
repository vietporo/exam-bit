import React from 'react';
import { 
  FooterContainer, 
  FooterWrapper, 
  FooterLogo, 
  FooterDesc, 
  FooterLinksContainer, 
  FooterLink, 
  FooterSubscribe, 
  SocialIcons, 
  SocialIconLink, 
  SubscribeInput, 
  SubscribeButton, 
  FooterName,
  FooterIcon,
  FooterLogoDesc
} from './Footer.element';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoDesc>
          <FooterLogo>
            <FooterIcon />
            <FooterName to="/">Famee.ly</FooterName>
          </FooterLogo>
          <FooterDesc>
            makes it easy to beautify the space you’re in with the help of one of our indoor plants that are sure to lift the spirits and purify the air.
          </FooterDesc>
        </FooterLogoDesc>


        <FooterLinksContainer>
          <FooterLink to="/">Features</FooterLink>
          <FooterLink to="/">Pricing</FooterLink>
          <FooterLink to="/">Blog</FooterLink>
          <FooterLink to="/">FAQs</FooterLink>
        </FooterLinksContainer>

        <FooterSubscribe>
          <h4>Don't want to miss anything?</h4>
          <div>
            <SubscribeInput type="email" placeholder="Your email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </div>
          <SocialIcons>
            <SocialIconLink>
              <FaFacebook />

            </SocialIconLink>
            <SocialIconLink>
              <FaInstagram />

            </SocialIconLink>
            <SocialIconLink>
              <FaYoutube />

            </SocialIconLink>
            <SocialIconLink>
              <FaTwitter />
              
            </SocialIconLink>
          </SocialIcons>
        </FooterSubscribe>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
