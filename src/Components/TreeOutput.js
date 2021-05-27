import React from "react";

export const TreeOutput = (props) => {
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
        <div className={`${props.start} bubble`}> </div>
      </li>
    );
  }
  props.setHeight(props.start);
  return (
    <li className={`parent-node-${props.start}`}>
      <div className={`${props.start} bubble`}>{props.treeNode.id}</div>
      {props.treeNode.left || props.treeNode.right ? (
        <ul>
          <TreeOutput
            start={props.start + 1}
            left={true}
            setHeight={props.setHeight}
            treeNode={props.treeNode.left}
          />
          <TreeOutput
            setHeight={props.setHeight}
            start={props.start + 1}
            treeNode={props.treeNode.right}
          />
        </ul>
      ) : null}
    </li>
  );
};
