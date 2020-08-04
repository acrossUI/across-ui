import styled from 'styled-components';

export const PickerInput = styled.div`
  display: flex;
  cursor: pointer;
  padding: 2px 2px 2px 20px;
  width: 82px;
  border-radius: 2px;
  height: 26px;
  padding-left: 20px;
  background: ${(props) => props.color};

  div {
    display: flex;
    flex: 1;
    background: #1a2434;
    align-items: center;
    justify-content: center;

    span {
      text-transform: uppercase;
      letter-spacing: 1.3px;
      color: #fff;
      font-size: 10px;
    }
  }
`;
