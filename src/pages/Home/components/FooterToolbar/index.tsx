import React, { useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  Container,
  ZoomMenuWrapper,
  ZoomMenuButton,
  ZoomMenuValue,
} from './styles';

interface FooterToolbarProps {
  canvasRef: any;
  preview: any;
  onChangePreview: Function;
  zoomRatio?: number;
}

const FooterToolbar: React.FC<FooterToolbarProps> = ({
  preview,
  onChangePreview,
  zoomRatio,
  canvasRef,
}) => {
  return (
    <Container>
      <ZoomMenuWrapper>
        <ZoomMenuButton
          leftSide
          onClick={() => canvasRef.current.handler.zoomHandler.zoomOut()}
        >
          <FaMinus />
        </ZoomMenuButton>
        <ZoomMenuValue>100</ZoomMenuValue>
        <ZoomMenuButton
          onClick={() => canvasRef.current.handler.zoomHandler.zoomIn()}
          rightSide
        >
          <FaPlus />
        </ZoomMenuButton>
      </ZoomMenuWrapper>
    </Container>
  );
};

export default FooterToolbar;
