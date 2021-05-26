import dJSON from "dirty-json";

export const arrayToString = (list) => {
  let objeto = "";
  if (Array.isArray(list)) {
    objeto += `{ "id": ` + list[0] + ",";
    if (list.length > 1) {
      objeto += `"left": ` + arrayToString(list[1]);
    }
    if (list.length > 2) {
      objeto += `"right":` + arrayToString(list[2]);
    }
    objeto += "}";
  }
  return objeto;
};
export const stringToJson = (string) => {
  let parsedData = "{}";
  try {
    parsedData = dJSON.parse(string);
  } catch (e) {
    parsedData = "error";
  }
  return parsedData;
};
