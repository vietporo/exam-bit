import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PiMapPinAreaBold } from 'react-icons/pi';

export const FooterContainer = styled.div`
  background-color: #0F4C81;
  padding: 60px 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterLogoDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;

  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterIcon = styled(PiMapPinAreaBold)`
  font-size: 3rem;
  color: #42FF8A;
`;

export const FooterName = styled(Link)`
  color: #fff;
  margin-left: 10px;
  font-size: 20px;
  text-decoration: none;
`;

export const FooterDesc = styled.p`
  margin-top: 16px;
  font-size: 16px;
  max-width: 400px;
  line-height: 1.8;
  color: #fff;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 16px;
  font-size: 16px;

  &:hover {
    color: #42FF8A;
    transition: 0.3s ease-out;
  }
`;

export const FooterSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin-top: 32px;
    align-items: center;
  }

  h4 {
    margin-bottom: 16px;
  }

  div {
    display: flex;
    margin-bottom: 16px;
  }
`;

export const SubscribeInput = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  outline: none;
`;

export const SubscribeButton = styled.button`
  background-color: #42FF8A;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #34e27a;
    transition: 0.3s ease-out;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-right: 16px;

  &:hover {
    color: #42FF8A;
    transition: 0.3s ease-out;
  }
`;