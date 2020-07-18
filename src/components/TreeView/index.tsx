import React, { useState } from 'react';
import { Tree } from 'antd';
import Icon from '../Icon';
import { Container } from './styles';

const TreeView = ({ treeData, ...rest }: any) => {
  console.log(treeData);
  return (
    <Container>
      <Tree
        showIcon
        treeData={treeData}
        switcherIcon={<Icon name="chevronDown" />}
        {...rest}
      />
    </Container>
  );
};

export default TreeView;
