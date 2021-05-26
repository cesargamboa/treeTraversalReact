import * as React from "react";

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
        <div className="bubble"> </div>
      </li>
    );
  }
  console.log("count", props.count, props.treeNode.id);
  //   if (
  //     props.treeNode &&
  //     props.treeNode.id &&
  //     (props.treeNode.left || props.treeNode.right)
  //   ) {
  //     count = count + 1;
  //     console.log("count", count, props.treeNode.id);
  //   }
  const test = parseInt(localStorage.getItem("globalCount"));
  console.log(test);
  if (test <= props.count) {
    console.log("test", parseInt(localStorage.getItem("globalCount")));
    localStorage.setItem("globalCount", props.count);
  }
  return (
    <li>
      <div className={`${props.count} bubble`}>{props.treeNode.id}</div>
      {props.treeNode.left || props.treeNode.right ? (
        <ul>
          <TreeOutput
            count={props.count + 1}
            left={true}
            treeNode={props.treeNode.left}
          />
          <TreeOutput count={props.count + 1} treeNode={props.treeNode.right} />
        </ul>
      ) : null}
    </li>
  );
};
