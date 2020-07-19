import React from 'react';
import { Input, Slider, Collapse } from 'antd';
import {
  Container,
  Section,
  SectionTitle,
  SubSection,
  SubSectionTitle,
  Separator,
  Row,
  InputWrapper,
  InputTitle,
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <Collapse defaultActiveKey={['1']}>
      <Collapse.Panel header="Layout" key="1">
        <SubSection>
          <SubSectionTitle>subsection</SubSectionTitle>
          <Row>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputTitle>Angle</InputTitle>
              <Slider min={0} max={360} style={{ width: '130px' }} />
            </InputWrapper>
            <InputWrapper />
          </Row>
        </SubSection>
      </Collapse.Panel>

      <Collapse.Panel header="TYPOGRAPY" key="2">
        <SubSection>
          <SubSectionTitle>subsection</SubSectionTitle>
          <Row>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
          </Row>
          <Row>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
            <InputWrapper>
              <InputTitle>X</InputTitle>
              <Input type="text" />
            </InputWrapper>
          </Row>
        </SubSection>
      </Collapse.Panel>
    </Collapse>
  </Container>
);

export default SideBar;
