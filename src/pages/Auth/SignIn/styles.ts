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

  @media (max-width: 800px) {
    display: none;
  }
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
  flex-direction: column;
  width: 100%;
  margin: 68px 40px 0;
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 16px 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #33354a;
    height: 62px;
    width: 62px;
    border-radius: 50%;
  }

  a + a {
    margin-left: 30px;
  }
`;

export const SignupLink = styled.div`
  display: flex;
  margin: auto 0 40px;

  a {
    margin-left: 4px;
  }
`;

export const SocialIconsDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;

  div {
    width: 80px;
    height: 0;
    border: 0.1px solid #e1e2ea;
  }

  span {
    margin: 0 20px;
  }
`;
