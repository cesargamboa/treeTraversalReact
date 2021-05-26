import React, { useState, useEffect } from "react";
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
  //   const par = JSON.parse(json);
  //   const getEntries = (jsn) => {
  //     Object.entries(jsn).map((entry) => {
  //       console.log("entry", entry);
  //       if (entry.length >= 2) {
  //         getEntries(entry[1]);
  //       }
  //     });
  //   };
  //   getEntries(par);
  useEffect(() => {
    let smallest = "";
    const maxChildNumber = parseInt(localStorage.getItem("globalCount"));
    const element = document.getElementsByClassName(
      `${localStorage.getItem("globalCount")}`
    );
    console.log(element.length);
    if (element.length > 1) {
      console.log(
        "element",
        element[0].parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
          "test"
        )
      );
    }
  }, [localStorage.getItem("globalCount")]);
  localStorage.setItem("globalCount", 0);
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
            <TreeOutput count={0} treeNode={stringToJson(json)} />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
