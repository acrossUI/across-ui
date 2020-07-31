import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  cursor: pointer;
  ${(props: any) =>
    props.mode === 'overlayed' &&
    css`
      display: flex;
      background: #344157;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      margin: 5px 0;

      &:hover {
        background: #858fff;
      }
    `}
`;
