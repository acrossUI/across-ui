import React, { useState } from 'react';
import { Container } from './styles';
import Row from '../../../../components/Row';
import SideBarInput from '../SideBarInput';
import SideBarSubSection from '../SideBarSubSection';

export default () => {
  const [layoutX, setLayoutX] = useState();
  const [layoutY, setLayoutY] = useState();
  const [elWidth, setElWidth] = useState();

  return (
    <Container>
      <Row>
        <SideBarInput title="X" />
        <SideBarInput title="Y" />
      </Row>
      <Row>
        <SideBarInput title="Width" />
        <SideBarInput title="Height" />
      </Row>
      <Row>
        <SideBarInput title="Angle" />
      </Row>
      <Row>
        <SideBarSubSection title="Padding">
          <Row>
            <SideBarInput title="Top" />
            <SideBarInput title="Right" />
            <SideBarInput title="Bottom" />
            <SideBarInput title="Left" />
          </Row>
        </SideBarSubSection>
      </Row>
    </Container>
  );
};
