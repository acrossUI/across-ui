import styled from 'styled-components';

import wave from '../../../assets/img/authWave.svg';
import containerBackground from '../../../assets/img/containerBackground.svg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #0e1420;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(81.42deg, #151c2e 3.23%, #162635 97.55%);
  border-radius: 14px;
  width: 872px;
  height: 575px;
`;

export const BannerWrapper = styled.div`
  display: flex;
  border-radius: 14px 0px 0px 14px;
  height: 100%;
  width: 408px;
  background-image: url(${containerBackground});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const BannerContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;

  img {
    margin: 0 30px;
  }

  span {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
  }
`;

export const BlurOverlay = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.46);
  z-index: 999;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 14px 0px 0px 14px;
`;

export const FormWraper = styled.div`
  display: flex;
  width: 100%;
  margin: 68px 40px 0;
`;
