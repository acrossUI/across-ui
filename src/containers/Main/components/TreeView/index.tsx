import React from 'react';
import Tree from 'rc-tree';
import { Container } from './styles';

export default () => {
  const STYLE = `
  .rc-tree-child-tree {
    display: block;
  }

  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
  `;

  const treeData = [
    {
      key: '0-0',
      title: 'parent 1',
      children: [
        {
          key: '0-0-0',
          title: 'parent 1-1',
          children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }],
        },
        {
          key: '0-0-1',
          title: 'parent 1-2',
          children: [
            { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
            { key: '0-0-1-1', title: 'parent 1-2-1' },
            { key: '0-0-1-2', title: 'parent 1-2-2' },
            { key: '0-0-1-3', title: 'parent 1-2-3' },
            { key: '0-0-1-4', title: 'parent 1-2-4' },
            { key: '0-0-1-5', title: 'parent 1-2-5' },
            { key: '0-0-1-6', title: 'parent 1-2-6' },
            { key: '0-0-1-7', title: 'parent 1-2-7' },
            { key: '0-0-1-8', title: 'parent 1-2-8' },
            { key: '0-0-1-9', title: 'parent 1-2-9' },
            { key: 1128, title: 1128 },
          ],
        },
      ],
    },
  ];

  const motion = {
    motionName: 'node-motion',
    motionAppear: false,
    onAppearStart: (node: any) => {
      console.log('Start Motion:', node);
      return { height: 0 };
    },
    onAppearActive: (node: any) => ({ height: node.scrollHeight }),
    onLeaveStart: (node: any) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
  };

  return (
    <Container>
      <Tree
        style={{
          display: 'flex',
          flex: 1,
          border: '1px solid red',
          width: '100%',
        }}
        //expandedKeys={expandedKeys}
        //onExpand={this.onExpand}
        //autoExpandParent={this.state.autoExpandParent}
        checkable
        draggable
        onDragStart={() => console.log('draggStart')}
        onDragEnter={() => console.log('drag Enter')}
        onDrop={() => console.log('dropped')}
        treeData={treeData}
      />
    </Container>
  );
};
