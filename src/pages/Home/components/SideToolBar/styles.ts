import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  height: 100hv;
  width: 48px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: rgba(255, 255, 255, 0.08);
  background: ${(props) => props.theme.secondary};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;

  button + button {
    margin-top: 16px;
  }
`;
