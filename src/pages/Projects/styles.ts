import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  .ant-spin {
    position: absolute;
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
  }
`;

export const Wrapper = styled.div`
  margin: 40px 120px;
  max-width: 85%;
`;

export const AddProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 140px;
  width: 140px;
  border-radius: 14px;
  background-color: #1a2434;
`;
