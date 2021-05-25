import React, { useState } from "react";
import { arrayToString, stringToJson } from "../helpers/dataParser";
import { TreeOutput } from "../Components/TreeOutput";

const Home = () => {
  const test1 = [1, [2], [3, [3, ["a"], ["b"]], null]];
  const test2 = [1, [2, [1], [2]], [1, [1], null]];
  const text = arrayToString(test2);
  const json = stringToJson(text);

  return (
    <>
      <h1>Tree Traversal</h1>
      <textarea value={JSON.stringify(json, null, 2)}></textarea>
      <div className="tree">
        <ul>
          <li>
            <TreeOutput treeNode={json} />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
