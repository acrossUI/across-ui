import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);

  h1 {
    margin-top: 30%;
    font-weight: bold;
    text-align: center;
    color: #fff;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
