import React from 'react';
import Icon from '../../../../components/Icon';
import { Container, Wrapper } from './styles';

const TopBar: React.FC = ({ canvasRef }: any) => (
  <Container>
    <Wrapper>
      <Icon name="curvedArrowLeft" mode="overlayed" />
      <Icon name="curvedArrowRight" mode="overlayed" />
    </Wrapper>
  </Container>
);

export default TopBar;
