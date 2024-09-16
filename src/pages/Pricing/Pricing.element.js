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

export const MapImageWrapper = styled.div`
  flex: 1;
  position: relative;
  margin-right: 40px;
`;

export const MapImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #333333;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666666;
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 30px;
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatNumber = styled.h2`
  font-size: 28px;
  color: #0F4C81;
  margin-bottom: 5px;
`;

export const StatText = styled.p`
  font-size: 16px;
  color: #888888;
`;
