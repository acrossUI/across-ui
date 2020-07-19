import React, { useState } from 'react';
import { Tree } from 'antd';
import Icon from '../Icon';
import { Container } from './styles';

const TreeView = ({
  canvasRef,
  items,
  onSelect,
  selectedItem,
  ...rest
}: any) => {
  const canvas2Icon = (item: any) => {
    if (item.type === 'rect') return 'box';
    if (item.type === 'textbox') return 'text';
    if (item.type === 'circle') return 'circle';
    if (item.type === 'rect') return 'box';
    if (item.type === 'line') return 'line';
    if (item.type === 'triangle') return 'triangle';
  };

  const canvas2Tree = (canvasItems: any) => {
    const nodes = Object.values(canvasItems).map((item: any) => {
      return {
        key: item.id,
        title: item.type,
        icon: <Icon name={canvas2Icon(item)} />,
      };
    });

    return nodes;
  };

  const treeData = [
    {
      title: 'MainPage',
      key: 1,
      icon: <Icon name="frame" />,
      children: canvas2Tree(items),
    },
  ];
  return (
    <Container>
      <Tree
        showIcon
        defaultExpandedKeys={[1]}
        treeData={treeData}
        onSelect={(el) => onSelect(el[0])}
        switcherIcon={<Icon name="chevronDown" />}
        {...rest}
      />
    </Container>
  );
};

export default TreeView;
