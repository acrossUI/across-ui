import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Container = styled(SimpleBar)`
  background: ${(props) => props.theme.secondary};
  height: 100%;
  min-width: 230px;

  .ant-collapse-header {
    background: ${(props) => props.theme.secondary};
  }
  .ant-collapse-content-active {
    padding: 0 10px;
  }
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 20px;

  /* Row */
  > div {
    justify-content: space-between;
  }
`;

export const SubSectionTitle = styled.span`
  color: #8d8ea1;
  font-size: 9px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0 12px;

  input {
    width: 72px;
    height: 28px;
    padding: 4px 8px;
    background: transparent;
    border: 1px solid #33354a;
    color: #fff;
  }
`;

export const InputTitle = styled.span`
  color: #8d8ea1;
  font-size: 9px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
