import React from 'react';

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
  Input,
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <Section>
      <SectionTitle>Layout</SectionTitle>
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
    </Section>
    <Separator />
    <Section>
      <SectionTitle>Tipograpy</SectionTitle>
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
    </Section>
  </Container>
);

export default SideBar;
