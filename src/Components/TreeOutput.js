import * as React from "react";

export const TreeOutput = (props) => {
  if (!props.treeNode || !props.treeNode.id) {
    return (
      <li>
        <div className="bubble"> </div>
      </li>
    );
  }
  return (
    <li>
      <div className="bubble">{props.treeNode.id}</div>
      {props.treeNode.left || props.treeNode.right ? (
        <ul>
          <TreeOutput left={true} treeNode={props.treeNode.left} />
          <TreeOutput treeNode={props.treeNode.right} />
        </ul>
      ) : null}
    </li>
  );
};
