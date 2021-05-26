import React, { useState } from "react";
import { stringToJson } from "../helpers/dataParser";
import { TreeOutput } from "../Components/TreeOutput";

const Home = () => {
  //   const test1 = [1, [2], [3, [3, ["a"], ["b"]], null]];
  //   const test2 = [1, [2, [1], [2]], [1, [1], null]];
  const [json, setJson] = useState("{}");
  const [previewJson, setPreviewJson] = useState("");
  const [generateOnChange, setGenerateOnChange] = useState(false);
  //   const text = arrayToString(test2);
  //   const test = stringToJson(text);
  const setTreeData = (event) => {
    generateOnChange && setJson(event.target.value);
    setPreviewJson(event.target.value);
  };
  return (
    <>
      <h1>Tree Traversal</h1>
      <div>
        <textarea
          onChange={(e) => setTreeData(e)}
          value={previewJson}
        ></textarea>
        <form>
          <label htmlFor="generate-on-change">
            Generate Tree on text change
          </label>
          <input
            onChange={() => setGenerateOnChange(!generateOnChange)}
            name="generate-on-change"
            type="checkbox"
          ></input>
        </form>
      </div>
      <button className="btn" onClick={() => setJson(previewJson)}>
        Generate Tree
      </button>
      <div className="tree">
        <ul>
          <li>
            {console.log("jason", json)}
            <TreeOutput treeNode={stringToJson(json)} />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
