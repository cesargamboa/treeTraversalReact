import React, { useState } from "react";
import AppContext from "./app-context";

const AppState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
