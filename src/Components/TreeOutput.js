import * as React from "react";

export const TreeOutput = (props) => {
  {
    console.log("props", props);
  }
  if (props.treeNode === "error") {
    return (
      <h3 className="warning-message">
        Error when parsing the data, please check the json
      </h3>
    );
  }
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
