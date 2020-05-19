import React from 'react';

import {
  SideBarSection,
  SideBarSectionWrapper,
  SectionTitle,
  Separator,
} from './styles';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const SideBar = ({ title, children }: Props) => (
  <SideBarSection>
    <SideBarSectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SideBarSectionWrapper>
    <Separator />
  </SideBarSection>
);

export default SideBar;
