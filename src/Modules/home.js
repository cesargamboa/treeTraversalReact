import React, { useState, useEffect, useContext } from "react";
import { stringToJson } from "../helpers/dataParser";
import { TreeOutput } from "../Components/TreeOutput";
import AppContext from "../context/app-context";
import UploadFiles from "../Components/uploadFile";

const Home = () => {
  const [json, setJson] = useState("{}");
  const [previewJson, setPreviewJson] = useState("");
  const [last, setLast] = useState(false);
  const [generateOnChange, setGenerateOnChange] = useState(false);
  const { count, setCount } = useContext(AppContext);
  const setTreeData = (event) => {
    if (event.target) {
      generateOnChange && setJson(event.target.value);
      setPreviewJson(event.target.value);
    } else {
      setPreviewJson(event);
    }
  };
  const setHeight = (val) => {
    if (val > count) {
      setCount(val);
    }
    if (val < count) {
      setLast(true);
    }
  };
  useEffect(() => {
    const element = document.getElementsByClassName(`${count}`);
    if (element.length > 2) {
      element[0].parentElement.parentElement.parentElement.parentElement.parentElement.classList.add(
        "green-border"
      );
    }
    if (element.length === 2) {
      element[0].parentElement.parentElement.parentElement.classList.add(
        "green-border"
      );
    }
  }, [count, last]);
  return (
    <>
      <h1>Tree Traversal</h1>
      <h2>Upload a JSON file or Type in the text area</h2>
      <UploadFiles getFiles={(data) => setTreeData(data)} />
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
            <TreeOutput
              start={0}
              setHeight={setHeight}
              treeNode={stringToJson(json)}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
