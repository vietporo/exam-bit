import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: #fff;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row; 
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10rem;
  margin-left: 10rem;
`;

export const ContentWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MapImageWrapper = styled.div`
  flex: 1; 
  position: relative;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

@media screen and (max-width: 768px) {
  padding-bottom:65;
}
`

export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? '##a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom:16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 5rem;
  line-height:1.1;
  color: #000000;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom:35px;
  font-size:18px;
  line-height:24px;
  color: #000000;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width:100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;