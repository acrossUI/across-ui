import React from 'react';
import Tree, { TreeNode } from 'rc-tree';/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,
no-alert, no-console, react/no-find-dom-node */


import './index.css';



const treeData = [
  {
    key: '0-0',
    title: 'parent 1',
    children: [
      { key: '0-0-0', title: 'parent 1-1', children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }] },
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

export default function Demo ()  {


    return (
      <div style={{ height: '100%', backgroundColor: '#fff'}}>

        <h2>Select</h2>
        <Tree
          //ref={this.treeRef}
          className="myCls"
          defaultExpandAll
          checkable={<input type="checkbox" id="scales" name="scales"/>}
          treeData={treeData}
          onSelect={(e) => console.log(e)}
          height={150}
        />


      </div>
    );
  }



