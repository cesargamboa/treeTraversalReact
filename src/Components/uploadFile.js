import { arrayToString, stringToJson } from "../helpers/dataParser";
const UploadFile = (props) => {
  const setFiles = () => {
    const files = document.getElementById("avatar").files;
    if (files.length <= 0) {
      return false;
    }
    var fr = new FileReader();
    fr.onload = function (e) {
      const result = JSON.parse(e.target.result);
      let formatted;
      if (Array.isArray(result)) {
        const text = arrayToString(result);
        formatted = JSON.stringify(stringToJson(text), null, 2);
      } else {
        formatted = JSON.stringify(result, null, 2);
      }
      props.getFiles(formatted);
      return formatted;
    };

    fr.readAsText(files.item(0));
  };
  return (
    <input
      type="file"
      onChange={(e) => setFiles(e.target.value)}
      id="avatar"
      name="avatar"
      accept="application/JSON"
    />
  );
};
export default UploadFile;
