import styled, { css } from 'styled-components';

interface ZoomMenuButtonProps {
  leftSide?: boolean;
  rightSide?: boolean;
}

export const Container = styled.div`
  position: absolute;
  bottom: 10px;
  height: 40px;
`;

export const ZoomMenuWrapper = styled.div`
  margin-left: 30px;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(255, 255, 255, 0.2);
  -moz-box-shadow: 1px 1px 4px 1px rgba(255, 255, 255, 0.2);
  box-shadow: 1px 1px 5px 1px rgba(255, 255, 255, 0.2);
`;

export const ZoomMenuButton = styled.button<ZoomMenuButtonProps>`
  height: 30px;
  width: 60px;
  border: 0;
  color: #fff;
  background: ${(props) => props.theme.secondary};
  cursor: pointer;

  ${(props) =>
    props.leftSide
      ? css`
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        `
      : css`
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        `}
`;

export const ZoomMenuValue = styled.span`
  color: #fff;
`;
