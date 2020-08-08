import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 38px;
  background: #2a3445;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 200px;
`;

export const RightWrapper = styled.div`
  margin-left: auto;
  margin-right: 100px;
`;

export const Profile = styled.div`
  display: flex;

  position: relative;
  flex-direction: row;

  img {
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 16px;
  }

  span {
    color: #f4ede8;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
