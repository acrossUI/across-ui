import styled from 'styled-components';

export const Wrapper = styled.span<any>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`;
