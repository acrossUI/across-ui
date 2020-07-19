import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.secondary};
  height: 100%;
  min-width: 230px;
`;

export const Section = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  margin-right: 16px;
`;

export const SectionTitle = styled.span`
  font-weight: 800;
  font-size: 12px;
  margin-bottom: 16px;
  text-transform: uppercase;
  color: ${(props) => props.theme.sectionTitle};
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 20px;
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

export const Separator = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 4px;
  width: 100%;
`;
